import type { Metadata } from 'next';
import Link from 'next/link';
import { getBreadcrumbJsonLd } from '@/lib/seo';
import { COMPANY_INFO, DIFFERENTIALS, CLIENT_VALIDATION_CHECKLIST } from '@/lib/constants';
import {
  ShieldCheck,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  ExternalLink,
} from 'lucide-react';
import { ClientConfirmationBadge } from '@/components/ClientConfirmationBadge';

export const metadata: Metadata = {
  title: 'Nosotros | COLFGAS CONSTRUCCIONES S.A.S.',
  description:
    'Conoce a COLFGAS CONSTRUCCIONES S.A.S., empresa colombiana de ingeniería y construcción especializada en redes de gas para viviendas e industrias.',
  alternates: {
    canonical: '/nosotros',
  },
};

export default function NosotrosPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Nosotros', url: '/nosotros' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Banner - Luminous & Modern */}
      <section className="bg-[#F4F7F8] border-b border-slate-200 py-12 sm:py-16 text-[#263238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#5B6570]">
              <li>
                <Link href="/" className="hover:text-[#0066B3] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#0066B3]">Nosotros</li>
            </ol>
          </nav>
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#0066B3] border border-sky-200 mb-3">
            Identidad Corporativa e Ingeniería
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-[#263238] leading-tight">
            Acerca de COLFGAS CONSTRUCCIONES S.A.S.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#5B6570] max-w-3xl leading-relaxed">
            Ingeniería, construcción y montaje técnico de redes de gas natural y GLP en Colombia, con enfoque exclusivo en soluciones habitacionales, comerciales e industriales.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Who We Are & Heritage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Nuestra Empresa
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238]">
                Especialistas en Infraestructuras de Gas y Obras de Ingeniería Civil
              </h2>
              <p className="text-sm sm:text-base text-[#5B6570] leading-relaxed">
                <strong>COLFGAS CONSTRUCCIONES S.A.S.</strong> es una sociedad comercial constituida en Colombia, cuyo objeto y trayectoria se fundamentan en la ejecución de obras de ingeniería civil y montaje de redes de conducción de fluidos combustibles.
              </p>
              <p className="text-sm sm:text-base text-[#5B6570] leading-relaxed">
                Nuestra fortaleza radica en integrar dos disciplinas que comúnmente se subcontratan por separado: la precisión técnica y hermeticidad de la instalación de gas y la capacidad operativa de obra civil (zanjado, cruces viales dirigidos, cajas de inspección y reposición de pavimentos).
              </p>

              <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-[#263238] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#0066B3] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[#5B6570]">
                  <strong className="text-[#263238]">Enfoque y Alcance Claro:</strong> Nuestras capacidades se centran en redes estacionarias de gas para edificaciones, viviendas, comercios e industrias. <em>No comercializamos cilindros de gas vehicular, ni realizamos conversiones automotrices ni operamos estaciones de servicio de combustible vehicular.</em>
                </p>
              </div>
            </div>

            {/* Corporate Fact Sheet Card */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#263238] mb-4 pb-2 border-b border-slate-200">
                Ficha Técnica Corporativa
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-[#5B6570] block text-xs uppercase font-semibold">Razón Social:</span>
                  <span className="font-bold text-[#263238]">{COMPANY_INFO.legalName}</span>
                </div>

                <div>
                  <span className="text-[#5B6570] block text-xs uppercase font-semibold">Nombre Comercial:</span>
                  <span className="font-bold text-[#263238]">{COMPANY_INFO.tradeName}</span>
                </div>

                <div>
                  <span className="text-[#5B6570] block text-xs uppercase font-semibold">Sede Principal:</span>
                  <span className="text-[#263238] font-medium block">{COMPANY_INFO.address}</span>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#0066B3] hover:underline mt-1 font-semibold"
                  >
                    <span>Ver en Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div>
                  <span className="text-[#5B6570] block text-xs uppercase font-semibold">Actividad Principal:</span>
                  <span className="text-[#263238]">Construcción de obras de ingeniería civil e instalaciones de redes de gas natural y GLP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center text-[#0066B3] mb-6">
                <Target className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[#263238] mb-3">Nuestra Misión</h3>
              <p className="text-sm text-[#5B6570] leading-relaxed">
                {COMPANY_INFO.missionStatement}
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-[#287A1C] mb-6">
                <Eye className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[#263238] mb-3">Nuestra Visión</h3>
              <p className="text-sm text-[#5B6570] leading-relaxed">
                Consolidarnos como el contratista de referencia en Colombia para constructoras, desarrolladores inmobiliarios e industrias en soluciones integradas de ingeniería de gas y obras civiles, reconocidos por nuestro cumplimiento técnico y cero incidentes operacionales.
              </p>
              <div className="mt-3">
                <ClientConfirmationBadge
                  label="Texto de visión sujeto a aprobación final del cliente"
                  variant="banner"
                />
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Nuestros Pilares
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-1">
                Principios Técnicos y Éticos en Obra
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DIFFERENTIALS.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#007afd] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5 text-[#007afd]" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-base text-[#263238] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Validation Checklist for Client Transparency */}
          <div className="p-8 rounded-3xl bg-[#F4F7F8] border border-slate-200">
            <div className="max-w-3xl mb-6">
              <div className="flex items-center gap-2 text-amber-700 mb-2">
                <FileCheck className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Transparencia de Datos del Proyecto
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#263238]">
                Puntos en Proceso de Validación con COLFGAS
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6570] mt-1 leading-relaxed">
                Siguiendo rigurosos criterios éticos, el sitio web no inventa certificaciones, años de trayectoria no documentados ni cifras comerciales. Los siguientes elementos están listos para ser validados por el equipo directivo de COLFGAS antes de la puesta en marcha:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CLIENT_VALIDATION_CHECKLIST.map((item) => (
                <div key={item.id} className="p-4 rounded-xl bg-white border border-slate-200 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#263238]">{item.label}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        item.status === 'Confirmado'
                          ? 'bg-emerald-100 text-[#287A1C]'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[#5B6570]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Hub: Enlaces recomendados a Servicios, Proyectos, FAQ y Mapa */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Arquitectura y Navegación
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#263238] mt-1">
                Conoce Más Sobre COLFGAS
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6570] mt-1">
                Accede directamente a nuestras áreas de servicio, registros de obra, preguntas frecuentes y el mapa completo del sitio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <Link
                href="/servicios"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all group"
              >
                <span className="text-xs font-bold text-[#0066B3] block mb-1">Portafolio</span>
                <span className="text-sm font-bold text-[#263238] group-hover:text-[#0066B3] transition-colors block">
                  Nuestros Servicios
                </span>
                <span className="text-xs text-[#5B6570] mt-1 block">
                  Construcción, instalación y mantenimiento de redes de gas.
                </span>
              </Link>

              <Link
                href="/proyectos"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <span className="text-xs font-bold text-[#287A1C] block mb-1">Experiencia</span>
                <span className="text-sm font-bold text-[#263238] group-hover:text-[#287A1C] transition-colors block">
                  Galería de Proyectos
                </span>
                <span className="text-xs text-[#5B6570] mt-1 block">
                  Fichas técnicas y tipologías de obra residencial e industrial.
                </span>
              </Link>

              <Link
                href="/preguntas-frecuentes"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all group"
              >
                <span className="text-xs font-bold text-[#0066B3] block mb-1">Dudas Técnicas</span>
                <span className="text-sm font-bold text-[#263238] group-hover:text-[#0066B3] transition-colors block">
                  Preguntas Frecuentes
                </span>
                <span className="text-xs text-[#5B6570] mt-1 block">
                  Respuestas sobre certificación Vanti, procesos y cotizaciones.
                </span>
              </Link>

              <Link
                href="/mapa-del-sitio"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all group"
              >
                <span className="text-xs font-bold text-[#5B6570] block mb-1">Estructura</span>
                <span className="text-sm font-bold text-[#263238] group-hover:text-[#0066B3] transition-colors block">
                  Mapa del Sitio (HTML)
                </span>
                <span className="text-xs text-[#5B6570] mt-1 block">
                  Índice navegable de todas las páginas y secciones del portal.
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] shadow-sm transition-all"
            >
              <span>Contáctanos para tu Próximo Proyecto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
