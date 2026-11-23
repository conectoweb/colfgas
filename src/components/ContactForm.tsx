'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';
import { MessageCircle, CheckCircle2, Phone } from 'lucide-react';

interface FormData {
  fullName: string;
  phone: string;
  projectType: string;
  message: string;
  acceptPolicy: boolean;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  projectType?: string;
  message?: string;
  acceptPolicy?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    projectType: 'residencial',
    message: '',
    acceptPolicy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Por favor ingresa tu nombre.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor ingresa un número de teléfono o celular.';
    } else if (!/^[0-9+ ()-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Ingresa un formato de teléfono válido (ej. 320 827 1724).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Por favor describe brevemente tu requerimiento o consulta.';
    } else if (formData.message.trim().length < 6) {
      newErrors.message = 'El mensaje debe tener al menos 6 caracteres.';
    }

    if (!formData.acceptPolicy) {
      newErrors.acceptPolicy = 'Debes autorizar el tratamiento de datos para continuar.';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const projectTypesMap: Record<string, string> = {
      residencial: 'Gas Residencial / Edificios Multifamiliares',
      industrial: 'Gas Industrial / Comercial',
      mantenimiento: 'Mantenimiento de Redes y Pruebas de Hermeticidad',
      consulta: 'Consulta General sobre Redes de Gas',
    };

    const text = `*SOLICITUD DE ASESORÍA - COLFGAS CONSTRUCCIONES S.A.S.*
👤 *Nombre:* ${formData.fullName}
📞 *Teléfono:* ${formData.phone}
🏗️ *Tipo de Servicio:* ${projectTypesMap[formData.projectType] || formData.projectType}
📝 *Mensaje:*
${formData.message}

_Enviado desde el sitio web oficial de COLFGAS_`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encoded}`;

    // Open WhatsApp directly
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setStatus('success');
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-8 lg:p-10">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-[#287A1C] mb-2">
          Contacto Ágil
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#263238]">
          Inicia tu Consulta o Cotización
        </h2>
        <p className="mt-2 text-sm text-[#5B6570] leading-relaxed">
          Ingresa tus datos básicos para iniciar la conversación. Al hacer clic, tu mensaje se abrirá directamente en WhatsApp con nuestro equipo en el <strong>{COMPANY_INFO.phoneDisplay}</strong>.
        </p>
      </div>

      {status === 'success' && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#287A1C] flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs sm:text-sm">
            <p className="font-bold text-[#287A1C]">¡Mensaje preparado para WhatsApp!</p>
            <p className="mt-0.5 text-emerald-900">
              Si la ventana no se abrió de inmediato, puedes escribirnos directamente al <strong>{COMPANY_INFO.phoneDisplay}</strong>.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Nombre Completo (sin pedir datos tributarios ni NIT) */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#263238] mb-1.5">
            Nombre Completo <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Ej. Carlos Rodríguez"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#263238] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066B3] ${
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

        {/* Teléfono / Celular */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#263238] mb-1.5">
            Teléfono o Celular (WhatsApp) <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ej. 320 827 1724"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#263238] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066B3] ${
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

        {/* Tipo de Servicio */}
        <div>
          <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-[#263238] mb-1.5">
            Servicio de Interés <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-[#263238] focus:outline-none focus:ring-2 focus:ring-[#0066B3]"
          >
            <option value="residencial">Gas Residencial (Edificios multifamiliares y conjuntos)</option>
            <option value="industrial">Gas Industrial (Plantas de producción y comercio)</option>
            <option value="mantenimiento">Mantenimiento de Redes e Inspección</option>
            <option value="consulta">Otra consulta técnica</option>
          </select>
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#263238] mb-1.5">
            Mensaje o Consulta <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntanos brevemente qué necesitas para tu proyecto o edificación..."
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#263238] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066B3] ${
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
              Autorizo el tratamiento de mis datos de contacto conforme a la{' '}
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

        {/* Submit Actions */}
        <div className="pt-3 space-y-3">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] shadow-sm hover:shadow transition-all focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            <MessageCircle className="w-5 h-5 text-[#263238]" aria-hidden="true" />
            <span>Continuar por WhatsApp ({COMPANY_INFO.phoneDisplay})</span>
          </button>

          <div className="text-center">
            <span className="text-xs text-[#5B6570]">O si prefieres llamada directa:</span>{' '}
            <a
              href={COMPANY_INFO.phoneCallUrl}
              className="text-xs font-bold text-[#0066B3] hover:underline inline-flex items-center gap-1 ml-1"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Llamar al {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}