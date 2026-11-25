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
  Clock,
  FileCheck2,
  ArrowRight,
  Headphones,
} from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contáctanos y Cotiza tu Proyecto de Gas | COLFGAS CONSTRUCCIONES S.A.S.',
  description:
    'Landing oficial de contacto de COLFGAS CONSTRUCCIONES S.A.S. Asesoría y cotizaciones de redes de gas para viviendas e industrias. WhatsApp y teléfono: 320 827 1724. Sede: Calle 90 Sur # 4F-33 Este, Bogotá, Colombia.',
  alternates: {
    canonical: '/contacto',
  },
};

export default function ContactoPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Contáctanos', url: '/contacto' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header Banner - Hero de la Landing de Contacto */}
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
              <li className="font-semibold text-[#0066B3]">Contáctanos</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#0066B3] border border-sky-300 mb-3">
            <Headphones className="w-3.5 h-3.5 text-[#0066B3]" aria-hidden="true" />
            <span>Centro Oficial de Asesoría y Cotizaciones</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-[#263238] leading-tight">
            Contáctanos y Cotiza tu Proyecto de Gas
          </h1>

          <p className="mt-3 text-base sm:text-lg text-[#5B6570] max-w-3xl leading-relaxed">
            Comunícate directamente con nuestro equipo de ingenieros para cotizaciones, revisión de planos arquitectónicos o asesoría técnica en redes fijas de gas para construcciones residenciales e industriales en Colombia.
          </p>

          {/* Micro indicadores de confianza en cabecera */}
          <div className="mt-6 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#5B6570]">
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#287A1C]" aria-hidden="true" />
              <span>Respaldo y Homologación Vanti</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />
              <span>Altos Estándares de Seguridad</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#287A1C]" aria-hidden="true" />
              <span>Pruebas de Hermeticidad 100% Certificadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Sello y Aclaración de Enfoque */}
          <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 text-[#263238] flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-[#0066B3] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm">
              <strong className="font-bold text-[#263238]">Especialidad en Vivienda e Industria:</strong>{' '}
              Trabajamos con redes e instalaciones fijas de gas para viviendas, conjuntos multifamiliares, comercio y plantas industriales. No prestamos servicios para gas vehicular, conversión de motores ni estaciones de combustible (GNCV).
            </div>
          </div>

          {/* Cards Grid: Canales Directos de Comunicación */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#287A1C] flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#287A1C]">
                  Atención Inmediata
                </span>
                <h2 className="text-lg font-bold text-[#263238] mt-1">Escribir por WhatsApp</h2>
                <p className="text-xs text-[#5B6570] mt-1.5 leading-relaxed">
                  Canal directo para cotizaciones, envío de memorias técnicas, planos en PDF y consultas rápidas.
                </p>
                <div className="mt-3 text-base font-bold text-[#263238] font-mono">
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
                  <span>Abrir WhatsApp ({COMPANY_INFO.phoneDisplay})</span>
                </a>
              </div>
            </div>

            {/* Phone Call Card */}
            <div className="p-6 rounded-2xl bg-white border border-sky-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0066B3] flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                  Línea Telefónica Directa
                </span>
                <h2 className="text-lg font-bold text-[#263238] mt-1">Llamada por Voz</h2>
                <p className="text-xs text-[#5B6570] mt-1.5 leading-relaxed">
                  Comunícate directamente con nuestros ingenieros para resolver inquietudes técnicas de obra.
                </p>
                <div className="mt-3 text-base font-bold text-[#263238] font-mono">
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
                  <span>Llamar al {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Physical Address Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#263238] flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#0066B3]" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5B6570]">
                  Sede Principal
                </span>
                <h2 className="text-lg font-bold text-[#263238] mt-1">Dirección Confirmada</h2>
                <p className="text-xs text-[#5B6570] mt-1.5 leading-relaxed">
                  Sede oficial de operaciones para la gestión técnica y contractual de proyectos en Bogotá.
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

          {/* Formulario de Cotización Rápida con Envío Preparado a WhatsApp */}
          <div className="pt-2">
            <ContactForm />
          </div>

          {/* Proceso de Atención: ¿Qué ocurre después de escribirnos? */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0066B3]/10 text-[#0066B3] mb-2">
                Paso a Paso
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238]">
                ¿Cómo atendemos tu proyecto en COLFGAS?
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#5B6570]">
                Un proceso transparente y técnico desde el primer contacto hasta la entrega en obra.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0066B3] flex items-center justify-center font-bold text-sm mb-3">
                    01
                  </div>
                  <h3 className="font-bold text-[#263238] text-sm sm:text-base">Recepción de Solicitud o Planos</h3>
                  <p className="mt-1.5 text-xs text-[#5B6570] leading-relaxed">
                    Recibimos tus datos a través de WhatsApp, llamada o formulario. Si dispones de planos arquitectónicos o hidrosanitarios, los revisamos sin compromiso.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#287A1C] flex items-center justify-center font-bold text-sm mb-3">
                    02
                  </div>
                  <h3 className="font-bold text-[#263238] text-sm sm:text-base">Evaluación y Diseño Técnico</h3>
                  <p className="mt-1.5 text-xs text-[#5B6570] leading-relaxed">
                    Nuestros ingenieros analizan diámetros, trazados de tubería, centros de medición y requerimientos específicos de tu obra con estándares de Vanti.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#263238] flex items-center justify-center font-bold text-sm mb-3">
                    03
                  </div>
                  <h3 className="font-bold text-[#263238] text-sm sm:text-base">Propuesta y Cronograma</h3>
                  <p className="mt-1.5 text-xs text-[#5B6570] leading-relaxed">
                    Te entregamos una propuesta económica detallada, clara y sin costos ocultos, con cronograma de obra y compromiso de pruebas de hermeticidad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces de Exploración Adicional */}
          <div className="p-8 rounded-3xl bg-[#F4F7F8] border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold text-[#263238]">
                ¿Deseas conocer más sobre nuestras soluciones antes de cotizar?
              </h3>
              <p className="text-sm text-[#5B6570] mt-1">
                Explora el portafolio de servicios, el registro fotográfico de instalaciones o el mapa del sitio.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#0066B3] bg-white border border-sky-200 hover:bg-sky-50 transition-all"
              >
                <span>Ver Servicios</span>
              </Link>
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#0066B3] bg-white border border-sky-200 hover:bg-sky-50 transition-all"
              >
                <span>Ver Galería de Obras</span>
              </Link>
              <Link
                href="/mapa-del-sitio"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] transition-all"
              >
                <span>Mapa del Sitio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}