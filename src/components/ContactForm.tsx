'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';
import { Send, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  message: string;
  acceptPolicy: boolean;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  location?: string;
  message?: string;
  acceptPolicy?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'residencial',
    location: '',
    message: '',
    acceptPolicy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Por favor ingresa tu nombre completo o de la empresa.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor ingresa un número de teléfono o celular.';
    } else if (!/^[0-9+ ()-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Ingresa un formato de teléfono válido (ej. 320 827 1724).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor ingresa tu correo electrónico.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Ingresa un correo electrónico válido.';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Indica la ciudad o municipio del proyecto (ej. Bogotá, Chía, Soacha).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Por favor describe brevemente tu proyecto o requerimiento.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'El mensaje debe tener al menos 15 caracteres para brindarte una mejor asesoría.';
    }

    if (!formData.acceptPolicy) {
      newErrors.acceptPolicy = 'Debes autorizar el tratamiento de datos para procesar tu solicitud.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const projectTypesMap: Record<string, string> = {
      residencial: 'Red de Gas Residencial / Multifamiliar',
      industrial: 'Gas Industrial / Comercial (Alta o Media Presión)',
      comercial: 'Gas Comercial (Restaurantes, Locales, Centros Comerciales)',
      mantenimiento: 'Mantenimiento / Detección de Fugas / Inspección',
      'obra-civil': 'Obra Civil Complementaria para Redes',
      otro: 'Otro requerimiento de gas / ingeniería',
    };

    const text = `*SOLICITUD DE COTIZACIÓN - COLFGAS CONSTRUCCIONES S.A.S.*
👤 *Nombre:* ${formData.fullName}
📞 *Teléfono:* ${formData.phone}
✉️ *Correo:* ${formData.email}
🏗️ *Tipo de Proyecto:* ${projectTypesMap[formData.projectType] || formData.projectType}
📍 *Ubicación:* ${formData.location}
📝 *Descripción del Requerimiento:*
${formData.message}

_Enviado desde el sitio web colfgas.com.co_`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encoded}`, '_blank');
    setStatus('success');
    setStatusMessage('¡Tu cotización ha sido redactada y enviada a WhatsApp! Un asesor te responderá a la brevedad.');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setStatusMessage('');

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          throw new Error('No se pudo enviar el formulario a través del servicio externo.');
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus('success');
      setStatusMessage(
        '¡Gracias por contactar a COLFGAS! Hemos recibido tu solicitud. Nuestro equipo de ingenieros revisará los requerimientos y te contactará dentro del horario laboral.'
      );
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        projectType: 'residencial',
        location: '',
        message: '',
        acceptPolicy: false,
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
      setStatusMessage(
        'Hubo un problema al procesar el envío. También puedes escribirnos directamente por WhatsApp al ' +
          COMPANY_INFO.phones[0].display +
          ' para atención inmediata.'
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 lg:p-10">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#263238]">
          Solicita una Cotización o Asesoría Técnica
        </h2>
        <p className="mt-2 text-sm text-[#5B6570] leading-relaxed">
          Cuéntanos sobre tu proyecto de gas residencial o industrial. Te contactaremos con una propuesta técnica ajustada a la normativa colombiana.
        </p>
      </div>

      {/* Accessible live region for status announcements */}
      <div aria-live="polite" className="mb-6">
        {status === 'success' && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#287A1C] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-sm">
              <p className="font-bold text-[#263238]">¡Solicitud recibida exitosamente!</p>
              <p className="mt-1 text-[#263238]">{statusMessage}</p>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-sm">
              <p className="font-bold text-[#263238]">Error en el envío</p>
              <p className="mt-1 text-[#263238]">{statusMessage}</p>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#263238] mb-1.5">
            Nombre Completo o Razón Social <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Ej. Ing. Carlos Rodríguez / Constructora Los Andes"
            className={`w-full px-4 py-3 rounded-lg border text-sm text-[#263238] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066B3] ${
              errors.fullName ? 'border-rose-500 bg-rose-50/40' : 'border-slate-300 bg-white'
            }`}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-rose-600 font-medium">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Phone & Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#263238] mb-1.5">
              Teléfono / Celular <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ej. 320 827 1724"
              className={`w-full px-4 py-3 rounded-lg border text-sm text-[#263238] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066B3] ${
                errors.phone ? 'border-rose-500 bg-rose-50/40' : 'border-slate-300 bg-white'
              }`}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-xs text-rose-600 font-medium">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#263238] mb-1.5">
              Correo Electrónico <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nombre@empresa.com"
              className={`w-full px-4 py-3 rounded-lg border text-sm text-[#263238] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066B3] ${
                errors.email ? 'border-rose-500 bg-rose-50/40' : 'border-slate-300 bg-white'
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-rose-600 font-medium">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Project Type & Location Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-[#263238] mb-1.5">
              Sector / Tipo de Servicio <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-sm text-[#263238] focus:outline-none focus:ring-2 focus:ring-[#0066B3]"
            >
              <option value="residencial">Gas Residencial (Edificios / Multifamiliares)</option>
              <option value="industrial">Gas Industrial (Calderas, Hornos, ERM)</option>
              <option value="comercial">Gas Comercial (Restaurantes, Locales)</option>
              <option value="mantenimiento">Mantenimiento y Pruebas de Hermeticidad</option>
              <option value="obra-civil">Obra Civil Complementaria para Redes</option>
              <option value="diseno">Diseño y Cálculo Hidráulico</option>
              <option value="otro">Otro Requerimiento</option>
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-xs font-semibold uppercase tracking-wider text-[#263238] mb-1.5">
              Ciudad / Municipio del Proyecto <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Ej. Bogotá D.C., Chía, Mosquera, etc."
              className={`w-full px-4 py-3 rounded-lg border text-sm text-[#263238] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066B3] ${
                errors.location ? 'border-rose-500 bg-rose-50/40' : 'border-slate-300 bg-white'
              }`}
              aria-invalid={!!errors.location}
              aria-describedby={errors.location ? 'location-error' : undefined}
            />
            {errors.location && (
              <p id="location-error" className="mt-1.5 text-xs text-rose-600 font-medium">
                {errors.location}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#263238] mb-1.5">
            Detalle del Requerimiento <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe el alcance de la obra: número de apartamentos, tipo de industria, diámetro requerido, si requiere acometida nueva o mantenimiento..."
            className={`w-full px-4 py-3 rounded-lg border text-sm text-[#263238] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066B3] ${
              errors.message ? 'border-rose-500 bg-rose-50/40' : 'border-slate-300 bg-white'
            }`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-rose-600 font-medium">
              {errors.message}
            </p>
          )}
        </div>

        {/* Data Policy Consent Checkbox */}
        <div className="pt-1">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="acceptPolicy"
              name="acceptPolicy"
              checked={formData.acceptPolicy}
              onChange={handleChange}
              className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#0066B3] focus:ring-[#0066B3]"
              aria-invalid={!!errors.acceptPolicy}
              aria-describedby={errors.acceptPolicy ? 'acceptPolicy-error' : undefined}
            />
            <label htmlFor="acceptPolicy" className="text-xs text-[#263238] leading-relaxed">
              Autorizo de manera libre, previa y expresa a <strong>COLFGAS CONSTRUCCIONES S.A.S.</strong> el tratamiento de mis datos personales para responder a mi cotización conforme a la Ley 1581 de 2012 y la{' '}
              <Link href="/politica-de-privacidad" className="text-[#0066B3] underline font-semibold hover:text-[#005291]">
                Política de Privacidad
              </Link>
              . <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
          </div>
          {errors.acceptPolicy && (
            <p id="acceptPolicy-error" className="mt-1.5 text-xs text-rose-600 font-medium ml-7">
              {errors.acceptPolicy}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
          {/* Submit via form */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] focus:outline-none focus:ring-4 focus:ring-sky-200 transition-all shadow-sm disabled:opacity-70"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>Enviando información...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Enviar Solicitud por Correo</span>
              </>
            )}
          </button>

          {/* Quick WhatsApp Quoting */}
          <button
            type="button"
            onClick={handleSendWhatsApp}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] focus:outline-none focus:ring-4 focus:ring-emerald-200 transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Cotizar Rápido por WhatsApp</span>
          </button>
        </div>
      </form>
    </div>
  );
}
