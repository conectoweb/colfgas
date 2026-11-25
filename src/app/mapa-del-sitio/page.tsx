import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';
import { getBreadcrumbJsonLd } from '@/lib/seo';
import {
  Home,
  Building2,
  Factory,
  Wrench,
  Camera,
  Users,
  HelpCircle,
  MapPin,
  ShieldCheck,
  FileText,
  Network,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mapa del Sitio Web | COLFGAS CONSTRUCCIONES S.A.S.',
  description:
    'Estructura navegable y organizada de todas las páginas, servicios técnicos de redes de gas y canales de atención de COLFGAS CONSTRUCCIONES S.A.S.',
  alternates: {
    canonical: '/mapa-del-sitio',
  },
};

export default function MapaDelSitioPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Nosotros', url: '/nosotros' },
    { name: 'Mapa del Sitio', url: '/mapa-del-sitio' },
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
              <li>
                <Link href="/nosotros" className="hover:text-[#0066B3] transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#0066B3]">Mapa del Sitio</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#0066B3] border border-sky-300 mb-3">
            <Network className="w-3.5 h-3.5 text-[#0066B3]" aria-hidden="true" />
            <span>Guía de Navegación del Sitio</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-[#263238] leading-tight">
            Mapa del Sitio Web
          </h1>

          <p className="mt-3 text-base sm:text-lg text-[#5B6570] max-w-3xl leading-relaxed">
            Explora de manera rápida y estructurada todas las secciones, servicios de ingeniería de gas, registros técnicos y canales oficiales de atención de COLFGAS CONSTRUCCIONES S.A.S.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* GRUPO 1: PÁGINAS PRINCIPALES */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
              <Home className="w-5 h-5 text-[#0066B3]" aria-hidden="true" />
              <h2 className="text-xl font-bold text-[#263238]">Páginas Principales</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0066B3]/40 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#263238] group-hover:text-[#0066B3] transition-colors flex items-center justify-between">
                    <span>Inicio</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0066B3] transition-colors" />
                  </h3>
                  <p className="mt-2 text-xs text-[#5B6570] leading-relaxed">
                    Propuesta de valor en redes de gas para viviendas e industrias, sección destacada de certificación Vanti y vitrina general.
                  </p>
                </div>
                <span className="mt-3 text-[11px] font-mono text-[#0066B3]">/</span>
              </Link>

              <Link
                href="/servicios"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0066B3]/40 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#263238] group-hover:text-[#0066B3] transition-colors flex items-center justify-between">
                    <span>Servicios Generales</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0066B3] transition-colors" />
                  </h3>
                  <p className="mt-2 text-xs text-[#5B6570] leading-relaxed">
                    Visión global del portafolio técnico: construcción de redes matrices, instalación interna y protocolos de mantenimiento.
                  </p>
                </div>
                <span className="mt-3 text-[11px] font-mono text-[#0066B3]">/servicios</span>
              </Link>

              <Link
                href="/proyectos"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0066B3]/40 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#263238] group-hover:text-[#0066B3] transition-colors flex items-center justify-between">
                    <span>Proyectos y Galería</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0066B3] transition-colors" />
                  </h3>
                  <p className="mt-2 text-xs text-[#5B6570] leading-relaxed">
                    Fichas técnicas tipológicas residenciales e industriales, acompañadas del banco fotográfico documental de 46 registros.
                  </p>
                </div>
                <span className="mt-3 text-[11px] font-mono text-[#0066B3]">/proyectos</span>
              </Link>

              <Link
                href="/nosotros"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0066B3]/40 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#263238] group-hover:text-[#0066B3] transition-colors flex items-center justify-between">
                    <span>Sobre Nosotros</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0066B3] transition-colors" />
                  </h3>
                  <p className="mt-2 text-xs text-[#5B6570] leading-relaxed">
                    Perfil corporativo, misión institucional, enfoque técnico en edificación y ficha de datos comerciales.
                  </p>
                </div>
                <span className="mt-3 text-[11px] font-mono text-[#0066B3]">/nosotros</span>
              </Link>

              <Link
                href="/preguntas-frecuentes"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0066B3]/40 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#263238] group-hover:text-[#0066B3] transition-colors flex items-center justify-between">
                    <span>Preguntas Frecuentes</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0066B3] transition-colors" />
                  </h3>
                  <p className="mt-2 text-xs text-[#5B6570] leading-relaxed">
                    Respuestas a dudas sobre procesos técnicos, tiempos de obra y habilitación.
                  </p>
                </div>
                <span className="mt-3 text-[11px] font-mono text-[#0066B3]">/preguntas-frecuentes</span>
              </Link>

              <Link
                href="/contacto"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0066B3]/40 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#263238] group-hover:text-[#0066B3] transition-colors flex items-center justify-between">
                    <span>Canales de Contacto</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0066B3] transition-colors" />
                  </h3>
                  <p className="mt-2 text-xs text-[#5B6570] leading-relaxed">
                    Canales oficiales de atención telefónica, chat directo, dirección física de la sede en Bogotá y formulario de cotización.
                  </p>
                </div>
                <span className="mt-3 text-[11px] font-mono text-[#0066B3]">/contacto</span>
              </Link>
            </div>
          </div>

          {/* GRUPO 2: SERVICIOS TÉCNICOS DETALLADOS */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
              <Building2 className="w-5 h-5 text-[#287A1C]" aria-hidden="true" />
              <h2 className="text-xl font-bold text-[#263238]">Servicios Especializados de Gas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/servicios/gas-residencial"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#287A1C]/50 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#287A1C] flex items-center justify-center mb-3">
                    <Building2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-[#263238] group-hover:text-[#287A1C] transition-colors">
                    Gas Residencial
                  </h3>
                  <p className="mt-2 text-xs text-[#5B6570] leading-relaxed">
                    Redes internas, montantes verticales, centros de medición unificados y acometidas para conjuntos residenciales y edificios multifamiliares con altos estándares de seguridad.
                  </p>
                </div>
                <span className="mt-4 text-[11px] font-mono text-[#287A1C]">/servicios/gas-residencial</span>
              </Link>

              <Link
                href="/servicios/gas-industrial"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0066B3]/50 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0066B3] flex items-center justify-center mb-3">
                    <Factory className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-[#263238] group-hover:text-[#0066B3] transition-colors">
                    Gas Industrial
                  </h3>
                  <p className="mt-2 text-xs text-[#5B6570] leading-relaxed">
                    Líneas de suministro en acero soldado y polietileno PEAD, estaciones de regulación ERM y trenes de gas para calderas, hornos e industrias.
                  </p>
                </div>
                <span className="mt-4 text-[11px] font-mono text-[#0066B3]">/servicios/gas-industrial</span>
              </Link>

              <Link
                href="/servicios/mantenimiento"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-500/50 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center mb-3">
                    <Wrench className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-[#263238] group-hover:text-amber-800 transition-colors">
                    Mantenimiento de Redes
                  </h3>
                  <p className="mt-2 text-xs text-[#5B6570] leading-relaxed">
                    Pruebas de hermeticidad certificadas, sustitución de reguladores, recambio de valvulería y adecuaciones técnicas previas a revisiones periódicas.
                  </p>
                </div>
                <span className="mt-4 text-[11px] font-mono text-amber-800">/servicios/mantenimiento</span>
              </Link>
            </div>
          </div>

          {/* GRUPO 3: REGISTRO FOTOGRÁFICO Y COMPONENTES */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
              <Camera className="w-5 h-5 text-[#0066B3]" aria-hidden="true" />
              <h2 className="text-xl font-bold text-[#263238]">Galería Técnica Documental</h2>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-base font-bold text-[#263238]">
                  Registro Visual de Instalaciones y Redes (46 Fotografías)
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6570] max-w-2xl leading-relaxed">
                  Catálogo visual organizado por categorías: baterías de medidores y gabinetes, tuberías matrices y colectores, manómetros e inspección técnica en obra.
                </p>
              </div>

              <Link
                href="/proyectos#galeria-tecnica"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] transition-colors flex-shrink-0"
              >
                <span>Explorar Galería</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* GRUPO 4: CANALES DE ATENCIÓN DIRECTA */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
              <ShieldCheck className="w-5 h-5 text-[#43BE24]" aria-hidden="true" />
              <h2 className="text-xl font-bold text-[#263238]">Atención Directa y Contacto</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#287A1C] mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Página de Contacto</span>
                  </div>
                  <div className="text-base font-bold text-[#263238] mt-1">Canales Oficiales</div>
                  <p className="text-xs text-[#5B6570] mt-1">
                    Acceso a nuestras líneas de mensajería, atención telefónica directa y solicitud de cotizaciones.
                  </p>
                </div>
                <Link
                  href="/contacto"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#287A1C] hover:underline"
                >
                  <span>Ir a Contáctanos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0066B3] mb-1">
                    <FileText className="w-4 h-4" />
                    <span>Cotización de Proyectos</span>
                  </div>
                  <div className="text-base font-bold text-[#263238] mt-1">Formulario de Contacto</div>
                  <p className="text-xs text-[#5B6570] mt-1">
                    Envía los detalles de tu proyecto para recibir una propuesta técnica personalizada.
                  </p>
                </div>
                <Link
                  href="/contacto"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0066B3] hover:underline"
                >
                  <span>Diligenciar Formulario</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5B6570] mb-1">
                    <MapPin className="w-4 h-4 text-[#0066B3]" />
                    <span>Sede Principal</span>
                  </div>
                  <div className="text-sm font-bold text-[#263238] mt-1">{COMPANY_INFO.address}</div>
                  <p className="text-xs text-[#5B6570] mt-1">Sede de operaciones en Bogotá, Colombia.</p>
                </div>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066B3] hover:underline"
                >
                  <span>Ver en Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* GRUPO 5: POLÍTICAS Y ASPECTOS LEGALES */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
              <FileText className="w-5 h-5 text-slate-600" aria-hidden="true" />
              <h2 className="text-xl font-bold text-[#263238]">Marco Legal y Transparencia</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/politica-de-privacidad"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0066B3]/40 hover:shadow-sm transition-all group"
              >
                <h3 className="text-sm font-bold text-[#263238] group-hover:text-[#0066B3] transition-colors flex items-center justify-between">
                  <span>Política de Tratamiento de Datos (Ley 1581 de 2012)</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0066B3]" />
                </h3>
                <p className="mt-1.5 text-xs text-[#5B6570] leading-relaxed">
                  Lineamientos sobre privacidad, protección y tratamiento seguro de los datos de contacto suministrados.
                </p>
              </Link>

              <Link
                href="/terminos-y-condiciones"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0066B3]/40 hover:shadow-sm transition-all group"
              >
                <h3 className="text-sm font-bold text-[#263238] group-hover:text-[#0066B3] transition-colors flex items-center justify-between">
                  <span>Términos y Condiciones</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0066B3]" />
                </h3>
                <p className="mt-1.5 text-xs text-[#5B6570] leading-relaxed">
                  Términos de uso del portal web, alcances técnicos de las propuestas preliminares y propiedad intelectual.
                </p>
              </Link>
            </div>
          </div>

          {/* AVISO TÉCNICO SOBRE SITEMAP XML */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-[#5B6570] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0066B3] flex-shrink-0" />
              <span>
                Para motores de búsqueda (Google, Bing) y herramientas de indexación técnica, consulta el archivo estandarizado XML.
              </span>
            </div>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#0066B3] font-semibold hover:underline flex-shrink-0"
            >
              <span>sitemap.xml</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}