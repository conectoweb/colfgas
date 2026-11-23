import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';
import { getBreadcrumbJsonLd } from '@/lib/seo';
import {
  Phone,
  MapPin,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Factory,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto y Atención Directa | COLFGAS CONSTRUCCIONES S.A.S.',
  description:
    'Comunícate con COLFGAS CONSTRUCCIONES S.A.S. Empresa certificada por Vanti. WhatsApp y teléfono: 320 827 1724. Sede: Calle 90 Sur # 4F-33 Este, Bogotá.',
  alternates: {
    canonical: '/contacto',
  },
};

export default function ContactoPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Contacto', url: '/contacto' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header Banner */}
      <section className="bg-[#F4F7F8] border-b border-slate-200 py-12 sm:py-16 text-[#263238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#287A1C] border border-emerald-300 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{COMPANY_INFO.vantiCertification}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-[#263238] leading-tight">
            Canales de Contacto Directo
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#5B6570] max-w-3xl leading-relaxed">
            Comunícate con nuestro equipo técnico para cotizaciones o asesoría en redes de gas para
            construcciones residenciales e industriales.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Sello y Aclaración de Enfoque */}
          <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 text-[#263238] flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-[#0066B3] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm">
              <strong className="font-bold text-[#263238]">Enfoque Exclusivo en Edificación e Industria:</strong>{' '}
              Trabajamos con redes fijas de gas para viviendas, conjuntos multifamiliares y plantas
              industriales. No ofrecemos servicios para vehículos ni gas automotor (GNCV).
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#287A1C] flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#287A1C]">
                  Atención Inmediata
                </span>
                <h2 className="text-lg font-bold text-[#263238] mt-1">Escribir por WhatsApp</h2>
                <p className="text-xs text-[#5B6570] mt-1.5 leading-relaxed">
                  Canal directo para cotizaciones, envío de planos y consultas técnicas.
                </p>
                <div className="mt-3 text-base font-bold text-[#263238]">
                  {COMPANY_INFO.phoneDisplay}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={COMPANY_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] shadow-sm transition-all"
                  aria-label="Escribir por WhatsApp a COLFGAS"
                >
                  <MessageCircle className="w-4 h-4 text-[#263238]" aria-hidden="true" />
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Llamada Telefónica Card */}
            <div className="p-6 rounded-2xl bg-white border border-sky-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0066B3] flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                  Línea Telefónica
                </span>
                <h2 className="text-lg font-bold text-[#263238] mt-1">Llamada Directa</h2>
                <p className="text-xs text-[#5B6570] mt-1.5 leading-relaxed">
                  Comunícate directamente por voz con nuestros asesores para atención de proyectos.
                </p>
                <div className="mt-3 text-base font-bold text-[#263238]">
                  {COMPANY_INFO.phoneDisplay}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={COMPANY_INFO.phoneCallUrl}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#0066B3] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all"
                  aria-label={`Llamar al ${COMPANY_INFO.phoneDisplay}`}
                >
                  <Phone className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />
                  <span>Llamar: {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Dirección Física Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#263238] flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#0066B3]" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5B6570]">
                  Sede Principal
                </span>
                <h2 className="text-lg font-bold text-[#263238] mt-1">Dirección Confirmada</h2>
                <p className="text-xs text-[#5B6570] mt-1.5 leading-relaxed">
                  Sede oficial de operaciones en la ciudad de Bogotá, Colombia.
                </p>
                <div className="mt-3 text-sm font-bold text-[#263238]">
                  {COMPANY_INFO.address}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#263238] bg-slate-100 hover:bg-slate-200 transition-all"
                  aria-label="Ver ubicación exacta en Google Maps"
                >
                  <span>Ver en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Banner de Cierre */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#F4F7F8] border border-slate-200 text-center space-y-4">
            <h3 className="text-2xl font-bold text-[#263238]">
              ¿Prefieres navegar por la landing page principal?
            </h3>
            <p className="text-sm text-[#5B6570] max-w-xl mx-auto">
              Conoce en detalle nuestros servicios, soluciones y preguntas frecuentes en la página principal.
            </p>
            <div className="pt-2">
              <Link
                href="/#inicio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] shadow-sm transition-all"
              >
                <span>Ir a la Landing Page Principal</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
