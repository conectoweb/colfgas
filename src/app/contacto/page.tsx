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
  ArrowRight,
  Headphones,
  Flame,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contáctanos | Técnicos de Gas Natural e Instaladores en Bogotá',
  description:
    '¿Necesitas una red de gas para una vivienda o una industria? Contáctanos al 320 827 1724 o por WhatsApp. Instalaciones de gas natural, reparaciones y mantenimiento en Bogotá y alrededores con técnicos certificados por Vanti.',
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

      {/* Header Banner - Hero Comercial de Contacto */}
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

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-[#287A1C] border border-emerald-300 mb-3">
            <Headphones className="w-3.5 h-3.5 text-[#287A1C]" aria-hidden="true" />
            <span>Atención Rápida • Bogotá y Alrededores</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-[#263238] leading-tight max-w-4xl">
            ¿Necesitas una Red de Gas para una Vivienda o una Industria?
          </h1>

          <p className="mt-3 text-base sm:text-lg text-[#5B6570] max-w-3xl leading-relaxed">
            Habla directamente con nuestros <strong>técnicos e instaladores de gas natural certificados por Vanti</strong>. Cotizamos tu proyecto de instalación, reparación de gas o mantenimiento en Bogotá y municipios de la Sabana sin intermediarios, con rapidez y total garantía de seguridad.
          </p>

          {/* Micro indicadores de confianza en cabecera */}
          <div className="mt-6 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#5B6570]">
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#287A1C]" aria-hidden="true" />
              <span>Empresa Certificada por Vanti</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />
              <span>Instaladores de Gas Certificados</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#287A1C]" aria-hidden="true" />
              <span>Pruebas de Hermeticidad Garantizadas</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />
              <span>Cobertura en Bogotá y Municipios Vecinos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Bloques Principales de Contacto Directo */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Aclaración de Enfoque */}
          <div className="p-4 sm:p-5 rounded-2xl bg-sky-50 border border-sky-200 text-[#263238] flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-[#0066B3] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm">
              <strong className="font-bold text-[#263238]">Especialistas en Vivienda e Industria:</strong>{' '}
              Atendemos construcciones residenciales (edificios multifamiliares, torres, casas), comercios y plantas industriales en Bogotá y la Sabana. No ofrecemos servicios para vehículos ni estaciones automotrices de combustible.
            </div>
          </div>

          {/* Bloques de Acción Principal: WhatsApp y Llamada Directa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* WhatsApp Card - Llamado de Ventas Principal */}
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 border-2 border-emerald-300 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-[#43BE24]/10 rounded-full blur-xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#43BE24] text-white flex items-center justify-center shadow-md">
                    <MessageCircle className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-200/80 text-[#287A1C] border border-emerald-300">
                    Respuesta Inmediata
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-[#263238]">
                  Escríbenos por WhatsApp
                </h2>
                
                <p className="text-sm text-[#5B6570] mt-2 leading-relaxed">
                  <strong>La manera más rápida de cotizar tu proyecto.</strong> Chatea en tiempo real con uno de nuestros técnicos de gas natural. Puedes enviarnos fotos de tu instalación, planos o contarnos qué necesitas:
                </p>

                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#5B6570]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0" />
                    <span>Instalaciones de gas natural para viviendas y edificios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0" />
                    <span>Reparación urgente de fugas y mantenimiento preventivo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0" />
                    <span>Redes industriales, calderas y estaciones ERM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0" />
                    <span>Puntos y servicio técnico de gasodomésticos en Bogotá</span>
                  </li>
                </ul>

                <div className="mt-5 p-3 rounded-xl bg-white/90 border border-emerald-200 text-center">
                  <span className="text-xs text-[#5B6570] block">Línea Oficial WhatsApp:</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#287A1C] font-mono tracking-wide">
                    {COMPANY_INFO.phoneDisplay}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4">
                <a
                  href={COMPANY_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-base font-bold text-white bg-[#43BE24] hover:bg-[#37A51D] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                  aria-label="Abrir WhatsApp para cotizar proyecto de gas"
                >
                  <MessageCircle className="w-5 h-5 text-white" aria-hidden="true" />
                  <span>Chatear por WhatsApp Ahora</span>
                  <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
                </a>
                <p className="text-[11px] text-[#5B6570] text-center mt-2">
                  Atención directa de técnicos de gas • Bogotá y Sabana
                </p>
              </div>
            </div>

            {/* Direct Call Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-sky-50/70 via-white to-sky-50/30 border-2 border-sky-300 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-[#0066B3]/10 rounded-full blur-xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0066B3] text-white flex items-center justify-center shadow-md">
                    <Phone className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-sky-200/80 text-[#0066B3] border border-sky-300">
                    Llamada Telefónica
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-[#263238]">
                  Llámanos Directamente
                </h2>
                
                <p className="text-sm text-[#5B6570] mt-2 leading-relaxed">
                  <strong>Habla en este instante con un instalador certificado.</strong> Si necesitas resolver dudas técnicas inmediatas, coordinar una visita de obra o cotizar por teléfono:
                </p>

                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#5B6570]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0066B3] flex-shrink-0" />
                    <span>Asesoría personalizada sin costo inicial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0066B3] flex-shrink-0" />
                    <span>Programación ágil de visitas de inspección técnica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0066B3] flex-shrink-0" />
                    <span>Diagnóstico de reparaciones de gas y fugas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0066B3] flex-shrink-0" />
                    <span>Claridad total en costos, materiales y tiempos de entrega</span>
                  </li>
                </ul>

                <div className="mt-5 p-3 rounded-xl bg-white/90 border border-sky-200 text-center">
                  <span className="text-xs text-[#5B6570] block">Línea Telefónica Directa:</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#0066B3] font-mono tracking-wide">
                    {COMPANY_INFO.phoneDisplay}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4">
                <a
                  href={COMPANY_INFO.phoneCallUrl}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-base font-bold text-white bg-[#0066B3] hover:bg-[#005291] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                  aria-label={`Llamar al teléfono ${COMPANY_INFO.phoneDisplay}`}
                >
                  <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                  <span>Llamar al {COMPANY_INFO.phoneDisplay}</span>
                  <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
                </a>
                <p className="text-[11px] text-[#5B6570] text-center mt-2">
                  Llamada directa a ingenieros • Sin conmutadores engorrosos
                </p>
              </div>
            </div>

          </div>

          {/* Sede y Ubicación Estratégica */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#0066B3] border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                <MapPin className="w-6 h-6 text-[#0066B3]" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                  Sede Principal en Bogotá
                </span>
                <h3 className="text-lg font-bold text-[#263238] mt-0.5">
                  {COMPANY_INFO.address}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6570] mt-1 max-w-xl leading-relaxed">
                  Nuestra sede en Bogotá es el punto de coordinación logística para atender proyectos residenciales e industriales en toda la capital y los municipios de la Sabana.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-[#263238] bg-white border border-slate-300 hover:bg-slate-100 shadow-sm transition-all"
                aria-label="Abrir mapa de ubicación en Google Maps"
              >
                <span>Ver Ubicación en Google Maps</span>
                <ExternalLink className="w-4 h-4 text-slate-500" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Cobertura en Bogotá y Alrededores */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-[#287A1C] mb-2">
                Presencia Operativa
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238]">
                Cobertura en Bogotá y Alrededores
              </h2>
              <p className="mt-2 text-sm text-[#5B6570] leading-relaxed">
                Nuestros <strong>técnicos en gas natural e instaladores certificados</strong> se desplazan a tu obra o edificación con equipos especializados para inspección, montaje y pruebas de hermeticidad.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div className="p-4 rounded-2xl bg-[#F4F7F8] border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <Building2 className="w-4 h-4 text-[#0066B3]" />
                  <span className="font-bold text-sm text-[#263238]">Bogotá Zona Norte</span>
                </div>
                <p className="text-xs text-[#5B6570] leading-relaxed">
                  Usaquén, Suba, Chapinero, Calle 80 y proyectos residenciales en desarrollo.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F4F7F8] border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <Building2 className="w-4 h-4 text-[#0066B3]" />
                  <span className="font-bold text-sm text-[#263238]">Bogotá Centro y Occidente</span>
                </div>
                <p className="text-xs text-[#5B6570] leading-relaxed">
                  Fontibón, Engativá, Teusaquillo, Barrios Unidos, Puente Aranda y zonas comerciales.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F4F7F8] border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <Building2 className="w-4 h-4 text-[#0066B3]" />
                  <span className="font-bold text-sm text-[#263238]">Bogotá Sur y Soacha</span>
                </div>
                <p className="text-xs text-[#5B6570] leading-relaxed">
                  Kennedy, Bosa, Tunjuelito, Usme, Ciudad Bolívar, Soacha y macroproyectos VIS/VIP.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F4F7F8] border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <Factory className="w-4 h-4 text-[#287A1C]" />
                  <span className="font-bold text-sm text-[#263238]">Sabana de Bogotá</span>
                </div>
                <p className="text-xs text-[#5B6570] leading-relaxed">
                  Chía, Cajicá, Cota, Funza, Mosquera, Madrid, Facatativá, Zipaquirá y parques industriales.
                </p>
              </div>
            </div>
          </div>

          {/* Proceso Rápido de 3 Pasos */}
          <div className="p-8 rounded-3xl bg-[#F4F7F8] border border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0066B3]/10 text-[#0066B3] mb-2">
                Sin Vueltas ni Complicaciones
              </span>
              <h2 className="text-2xl font-bold text-[#263238]">
                ¿Cómo atendemos tu solicitud en COLFGAS?
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#5B6570]">
                Un proceso ágil y transparente para que tu red de gas esté lista a tiempo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#287A1C] flex items-center justify-center font-bold text-sm mb-3">
                    01
                  </div>
                  <h3 className="font-bold text-[#263238] text-sm sm:text-base">Escríbenos o Llámanos</h3>
                  <p className="mt-1.5 text-xs text-[#5B6570] leading-relaxed">
                    Escríbenos por WhatsApp al <strong>320 827 1724</strong> o llámanos. Cuéntanos qué tipo de obra o reparación requieres y comparte fotos o planos si los tienes.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0066B3] flex items-center justify-center font-bold text-sm mb-3">
                    02
                  </div>
                  <h3 className="font-bold text-[#263238] text-sm sm:text-base">Diagnóstico y Cotización Clara</h3>
                  <p className="mt-1.5 text-xs text-[#5B6570] leading-relaxed">
                    Evaluamos requerimientos técnicos, diámetros y normativas aplicadas por Vanti. Te entregamos un presupuesto formal, detallado y sin sobrecostos.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#263238] flex items-center justify-center font-bold text-sm mb-3">
                    03
                  </div>
                  <h3 className="font-bold text-[#263238] text-sm sm:text-base">Ejecución y Prueba de Hermeticidad</h3>
                  <p className="mt-1.5 text-xs text-[#5B6570] leading-relaxed">
                    Instalamos o reparamos con materiales certificados y realizamos pruebas de presión manométrica para que recibas el servicio habilitado con cero fugas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces de Exploración Adicional */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#263238]">
                ¿Quieres conocer más sobre nuestros proyectos antes de llamar?
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6570] mt-1">
                Explora el catálogo de servicios de gas o la galería fotográfica de instalaciones en obra.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#0066B3] bg-[#F4F7F8] border border-sky-200 hover:bg-sky-50 transition-all"
              >
                <span>Ver Servicios</span>
              </Link>
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#0066B3] bg-[#F4F7F8] border border-sky-200 hover:bg-sky-50 transition-all"
              >
                <span>Ver Proyectos</span>
              </Link>
              <Link
                href="/preguntas-frecuentes"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#287A1C] bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all"
              >
                <span>Resolver Dudas (FAQ)</span>
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
