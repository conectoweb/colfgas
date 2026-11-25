'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';
import { getBreadcrumbJsonLd } from '@/lib/seo';
import {
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Building2,
  Factory,
  ChevronDown,
  Filter,
  Wrench,
  AlertTriangle,
} from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: 'Certificación' | 'Servicios' | 'Contacto y Cotización' | 'Calidad y Seguridad' | 'Cobertura';
  hasConfirmationNote?: boolean;
}

const ALL_FAQS: FaqItem[] = [
  {
    question: '¿COLFGAS está formalmente certificada por Vanti?',
    answer:
      'Sí. COLFGAS CONSTRUCCIONES S.A.S. cuenta con la certificación oficial de Vanti como empresa calificada para la construcción, instalación y mantenimiento de redes de gas natural, lo que garantiza el cumplimiento de los procedimientos y estándares de la empresa distribuidora.',
    category: 'Certificación',
  },
  {
    question: '¿Qué tipo de servicios ofrece COLFGAS CONSTRUCCIONES S.A.S.?',
    answer:
      'Nos especializamos en tres áreas fundamentales: 1) Construcción de redes matrices y acometidas de gas; 2) Instalación de redes de distribución interna, montantes verticales y centros de medición; y 3) Mantenimiento técnico de sistemas de gas y pruebas de hermeticidad para edificaciones residenciales e industriales.',
    category: 'Servicios',
  },
  {
    question: '¿COLFGAS presta servicios para gas vehicular o conversión de motores?',
    answer:
      'No. En COLFGAS estamos enfocados exclusivamente en redes fijas de gas por tubería para edificaciones de vivienda, comercio e industrias. No realizamos conversión de motores a gas, no comercializamos cilindros vehiculares ni operamos estaciones de servicio de combustible vehicular (GNCV).',
    category: 'Servicios',
  },
  {
    question: '¿Ofrecen mantenimiento a calentadores o estufas domésticas?',
    answer:
      'Nuestro portafolio de mantenimiento cubre la infraestructura de la red de gas: tuberías fijas, montantes, reguladores de presión, válvulas de corte y pruebas de hermeticidad. La atención de gasodomésticos o artefactos de consumo individuales requiere evaluación previa caso a caso [CONFIRMAR CON COLFGAS].',
    category: 'Servicios',
    hasConfirmationNote: true,
  },
  {
    question: '¿Cómo puedo solicitar una cotización o visita técnica?',
    answer:
      'Puedes comunicarte a través de nuestra página de contacto oficial o completar el formulario web. Atendemos solicitudes tanto para obras nuevas en planos como para adecuaciones o mantenimiento de redes existentes.',
    category: 'Contacto y Cotización',
  },
  {
    question: '¿Dónde está ubicada la sede principal de COLFGAS?',
    answer:
      'Nuestra sede principal confirmada está ubicada en la Calle 90 Sur # 4F-33 Este, Bogotá, Colombia.',
    category: 'Contacto y Cotización',
  },
  {
    question: '¿Cuál es la cobertura geográfica de atención de COLFGAS?',
    answer:
      'Nuestra base de operaciones principal se encuentra en Bogotá y la región de Cundinamarca, con capacidad operativa de evaluar proyectos en otras zonas del país según el alcance de la obra [CONFIRMAR COBERTURA EXACTA CON COLFGAS].',
    category: 'Cobertura',
    hasConfirmationNote: true,
  },
  {
    question: '¿Cuáles son los horarios de atención al público?',
    answer:
      'Atendemos consultas y requerimientos a través de nuestros canales oficiales de contacto durante jornada laboral [CONFIRMAR HORARIO EXACTO CON COLFGAS]. Para urgencias de obra coordinamos previamente con el cliente.',
    category: 'Contacto y Cotización',
    hasConfirmationNote: true,
  },
  {
    question: '¿Qué es una prueba de hermeticidad y por qué es indispensable?',
    answer:
      'Es un ensayo de seguridad neumática reglamentario en el que se presuriza la red con aire o gas inerte utilizando un manómetro certificado. Permite constatar que no existan microfugas ni caídas de presión en las uniones de la tubería, siendo requisito obligatorio para la habilitación del servicio de gas ante la empresa distribuidora.',
    category: 'Calidad y Seguridad',
  },
  {
    question: '¿Qué estándares de calidad y seguridad rigen los proyectos de COLFGAS?',
    answer:
      'Nuestras obras se ejecutan bajo rigurosos estándares de seguridad técnica, ingeniería de alta precisión y las especificaciones técnicas homologadas por Vanti, garantizando una habilitación rápida y sin contratiempos.',
    category: 'Calidad y Seguridad',
  },
  {
    question: '¿Qué documentación técnica suministra COLFGAS para la contratación de obras?',
    answer:
      'COLFGAS CONSTRUCCIONES S.A.S. entrega la propuesta comercial formal, memorias técnicas, planos hidrosanitarios de gas y certificados de conformidad requeridos para la ejecución y legalización de proyectos residenciales e industriales.',
    category: 'Certificación',
  },
];

export default function PreguntasFrecuentesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    'Todas',
    'Certificación',
    'Servicios',
    'Contacto y Cotización',
    'Calidad y Seguridad',
    'Cobertura',
  ];

  const filteredFaqs =
    selectedCategory === 'Todas'
      ? ALL_FAQS
      : ALL_FAQS.filter((f) => f.category === selectedCategory);

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Preguntas Frecuentes', url: '/preguntas-frecuentes' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#F4F7F8] via-white to-[#F4F7F8] border-b border-slate-200 py-12 sm:py-16 text-[#263238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#5B6570]">
              <li>
                <Link href="/" className="hover:text-[#0066B3] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#0066B3]">Preguntas Frecuentes</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#0066B3] border border-sky-200 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#0066B3]" aria-hidden="true" />
            <span>Centro de Respuestas Técnicas</span>
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-[#263238] leading-tight">
            Preguntas Frecuentes
          </h1>

          <p className="mt-3 text-base sm:text-lg text-[#5B6570] max-w-3xl leading-relaxed">
            Información verificada y respuestas claras sobre nuestros servicios de redes de gas residencial e industrial, certificación Vanti, procesos y canales de contacto.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Transparency & Disclaimer Box */}
          <div className="mb-10 p-5 rounded-2xl bg-sky-50 border border-sky-200 text-[#263238] flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-[#0066B3] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm space-y-1">
              <strong className="font-bold text-[#263238]">Transparencia y Veracidad:</strong> Las respuestas presentadas en esta sección se fundamentan exclusivamente en los datos confirmados de COLFGAS CONSTRUCCIONES S.A.S. Aquellos aspectos comerciales específicos están señalados con <span className="font-semibold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded text-[11px]">[CONFIRMAR CON COLFGAS]</span> para garantizar una comunicación 100% fidedigna.
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="mb-10 flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="text-xs font-bold text-[#5B6570] uppercase tracking-wider mr-2 hidden sm:inline-flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" aria-hidden="true" />
              Filtrar por:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#0066B3] ${
                  selectedCategory === cat
                    ? 'bg-[#0066B3] text-white shadow-sm'
                    : 'bg-slate-100 text-[#263238] hover:bg-slate-200'
                }`}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4 mb-16">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] hover:bg-slate-50/70 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-sky-50 text-[#0066B3] font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#263238]">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5B6570] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[#0066B3]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 text-sm text-[#5B6570] leading-relaxed border-t border-slate-100 bg-[#F4F7F8]/40">
                      <p>{faq.answer}</p>
                      {faq.hasConfirmationNote && (
                        <div className="mt-3 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0" aria-hidden="true" />
                          <span>Dato sujeto a validación final con el cliente o memoria de obra.</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-4">
            <h3 className="text-2xl font-bold text-[#263238]">
              ¿Tienes otra pregunta sobre tu proyecto de gas?
            </h3>
            <p className="text-sm text-[#5B6570] max-w-xl mx-auto">
              Comunícate directamente con nuestros ingenieros. Te asesoramos en dimensionamiento técnico y cotizaciones para tu obra.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold text-white bg-[#0066B3] hover:bg-[#005291] shadow-md transition-all"
              >
                <span>Ir a Contáctanos / Cotizar</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
