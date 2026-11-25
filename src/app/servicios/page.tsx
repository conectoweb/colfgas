import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_CATALOG } from '@/lib/constants';
import { ServiceCard } from '@/components/ServiceCard';
import { FaqAccordion, FaqItem } from '@/components/FaqAccordion';
import { getBreadcrumbJsonLd } from '@/lib/seo';
import {
  ShieldCheck,
  ArrowRight,
  Gauge,
  CheckCircle2,
  FileCheck2,
  Building2,
  Factory,
  Wrench,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Instalaciones y Reparaciones de Gas Natural en Bogotá | Servicios COLFGAS',
  description:
    '¿Necesitas una red de gas para una vivienda o una industria? Instalaciones de gas natural, reparaciones de gas y mantenimiento en Bogotá y alrededores con técnicos certificados por Vanti.',
  alternates: {
    canonical: '/servicios',
  },
};

const FAQS_SERVICIOS: FaqItem[] = [
  {
    question: '¿COLFGAS presta servicios para vehículos a gas o estaciones de servicio?',
    answer:
      'No. En COLFGAS CONSTRUCCIONES S.A.S. estamos enfocados con exclusividad en redes e instalaciones fijas por tubería para edificaciones residenciales, conjuntos multifamiliares, comercio e industrias. No realizamos conversión de motores, venta ni distribución de gas vehicular (GNCV) ni mantenimiento de automotores.',
    category: 'Enfoque Operativo',
  },
  {
    question: '¿Qué estándares técnicos y de calidad rigen sus obras?',
    answer:
      'Nuestras obras se ejecutan bajo rigurosos estándares de calidad, seguridad y precisión técnica, cumpliendo las directrices y especificaciones de Vanti para edificaciones residenciales, comerciales e industriales.',
    category: 'Calidad y Seguridad',
  },
  {
    question: '¿Qué es una prueba de hermeticidad y por qué es obligatoria?',
    answer:
      'La prueba de hermeticidad es un ensayo neumático estandarizado con manómetro calibrado que somete la red a una presión superior a la normal de servicio durante un tiempo reglamentario. Garantiza una instalación 100% estanca antes de la habilitación del suministro ante la distribuidora de gas.',
    category: 'Seguridad',
  },
  {
    question: '¿Qué materiales de tubería se utilizan según el sector?',
    answer:
      'Para vivienda y edificaciones residenciales empleamos tubería multicapa PE-AL-PE y cobre tipo L o K. En plantas industriales se instala tubería de acero al carbono cédula 40/80 soldada por personal calificado, y en canalizaciones exteriores enterradas se utiliza polietileno de alta densidad (PEAD).',
    category: 'Materiales Certificados',
  },
  {
    question: '¿Cómo solicito una visita técnica o cotización formal?',
    answer:
      'Puedes contactarnos a través de nuestra página de contacto oficial por WhatsApp o llamada directa. Revisamos tus requerimientos, planos arquitectónicos o memorias técnicas para estructurar una propuesta económica y técnica a la medida en Bogotá y alrededores.',
    category: 'Cotizaciones',
  },
];

export default function ServiciosPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Servicios', url: '/servicios' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header Banner with Visual Hero Diagram */}
      <section className="bg-gradient-to-b from-[#F4F7F8] via-white to-[#F4F7F8] border-b border-slate-200 py-12 sm:py-16 text-[#263238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading and Value Proposition */}
            <div className="lg:col-span-6 text-center lg:text-left space-y-4">
              <nav aria-label="Breadcrumb" className="mb-2">
                <ol className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#5B6570]">
                  <li>
                    <Link href="/" className="hover:text-[#0066B3] transition-colors">
                      Inicio
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="font-semibold text-[#0066B3]">Servicios</li>
                </ol>
              </nav>

              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-[#287A1C] border border-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#287A1C]" aria-hidden="true" />
                <span>Instaladores y Técnicos de Gas Certificados • Bogotá y Sabana</span>
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-[#263238] leading-tight">
                Instalaciones de Gas Natural, Reparaciones y Redes en Bogotá
              </h1>
              <p className="text-base sm:text-lg text-[#5B6570] leading-relaxed">
                ¿Necesitas una red de gas para una vivienda o una industria? En <strong>COLFGAS</strong> contamos con <strong>técnicos en gas natural e instaladores certificados por Vanti</strong>. Diseñamos, construimos, reparamos y mantenemos tus redes con pruebas de hermeticidad garantizadas en Bogotá y municipios aledaños.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/servicios/gas-residencial"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]"
                >
                  <Building2 className="w-4 h-4" aria-hidden="true" />
                  <span>Gas Residencial</span>
                </Link>
                <Link
                  href="/servicios/gas-industrial"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#287A1C] hover:bg-[#1E5F15] shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#287A1C]"
                >
                  <Factory className="w-4 h-4" aria-hidden="true" />
                  <span>Gas Industrial</span>
                </Link>
                <Link
                  href="/servicios/mantenimiento"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#263238] bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <Wrench className="w-4 h-4 text-[#287A1C]" aria-hidden="true" />
                  <span>Mantenimiento</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Technical Graphic */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 bg-white">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/galeria/corredor-de-obra-con-tuberias-amarillas.webp"
                    alt="Trazado y montaje de redes de tuberías de gas en corredor técnico de edificación en obra"
                    width={800}
                    height={500}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-[#0066B3] shadow-md border border-sky-200 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0066B3]" aria-hidden="true" />
                      <span>Redes Fijas Certificadas</span>
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
                  <span className="text-[11px] font-semibold text-[#5B6570]">
                    Tendido de tuberías aéreas en zona técnica con altos estándares de seguridad
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Explicit Focus Clarification Box */}
          <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-sky-50 border border-sky-200 text-[#263238] flex flex-col sm:flex-row items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#0066B3] text-white flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="text-sm">
              <h2 className="text-base font-bold text-[#263238] mb-1">
                Especialidad Técnica Exclusiva: Redes Fijas de Edificación e Industria
              </h2>
              <p className="text-[#5B6570] leading-relaxed">
                COLFGAS CONSTRUCCIONES S.A.S. enfoca su portafolio estrictamente en redes de tubería, montantes, acometidas y estaciones fijas de regulación para viviendas, comercio e industrias. <strong>No ofrecemos conversión automotriz, suministro de gas vehicular (GNCV) ni transporte de combustible para automotores.</strong>
              </p>
            </div>
          </div>

          {/* Service Cards Grid with micro-interactions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {SERVICES_CATALOG.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={service.slug === 'residencial' || service.slug === 'industrial'}
              />
            ))}
          </div>

          {/* Visual Explanatory Section: Protocolo de Hermeticidad */}
          <div className="mb-20 rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#287A1C]">
                  Protocolo Técnico de Calidad
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#263238]">
                  Pruebas de Hermeticidad y Seguridad Operativa
                </h2>
                <p className="text-sm text-[#5B6570] leading-relaxed">
                  Cada red construida por COLFGAS pasa por un estricto ensayo de presión neumática con manómetro certificado antes de su habilitación. Verificamos la total ausencia de caídas de presión en uniones y accesorios.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#263238]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0" aria-hidden="true" />
                    <span>Presurización de prueba a 1.5 veces la presión de trabajo reglamentaria.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0" aria-hidden="true" />
                    <span>Inspección de uniones con solución formadora de burbujas no corrosiva.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0" aria-hidden="true" />
                    <span>Emisión de acta técnica de conformidad para distribuidora de gas.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/galeria/manometro-y-tuberias-de-gas-en-ladrillo.webp"
                      alt="Manómetro para prueba neumática de hermeticidad y tuberías de gas en muro de ladrillo"
                      width={600}
                      height={450}
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2.5 bg-slate-50 border-t border-slate-200 text-center">
                    <span className="text-[11px] font-semibold text-[#5B6570]">
                      Prueba neumática de presión estática con manómetro certificado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase: Redes, Tuberías y Medidores */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Registro Técnico en Obra
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-2">
                Instalaciones de Tuberías y Baterías de Medición
              </h2>
              <p className="text-sm text-[#5B6570] mt-1">
                Fichas visuales de componentes reales de redes fijas ejecutadas bajo estándares de Vanti.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group rounded-2xl bg-[#F4F7F8] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/galeria/gran-banco-de-medidores-de-gas.webp"
                    alt="Batería centralizada de medidores de gas natural en gabinete técnico residencial"
                    width={600}
                    height={450}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-100 text-[#0066B3]">
                    Sector Residencial
                  </span>
                  <h3 className="text-base font-bold text-[#263238] mt-2">
                    Bancos Centralizados de Medición
                  </h3>
                  <p className="text-xs text-[#5B6570] mt-1 line-clamp-2">
                    Conjunto de medidores calibrados con reguladores individuales para copropiedades.
                  </p>
                  <Link
                    href="/servicios/gas-residencial"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0066B3] hover:text-[#005291] mt-3"
                  >
                    <span>Ficha técnica residencial</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="group rounded-2xl bg-[#F4F7F8] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/galeria/tres-tuberias-amarillas-en-obra.webp"
                    alt="Líneas de tuberías de gas en acero soldado para distribución industrial"
                    width={600}
                    height={450}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-[#287A1C]">
                    Sector Industrial
                  </span>
                  <h3 className="text-base font-bold text-[#263238] mt-2">
                    Tuberías Matrices en Acero Soldado
                  </h3>
                  <p className="text-xs text-[#5B6570] mt-1 line-clamp-2">
                    Tendido aéreo y canalizaciones con soldadura calificada y riguroso control de calidad.
                  </p>
                  <Link
                    href="/servicios/gas-industrial"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#287A1C] hover:text-[#1E5F15] mt-3"
                  >
                    <span>Ficha técnica industrial</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="group rounded-2xl bg-[#F4F7F8] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/galeria/tecnico-revisando-tuberias-de-gas.webp"
                    alt="Técnico calificado realizando verificación técnica y mantenimiento en tuberías de gas"
                    width={600}
                    height={450}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-100 text-[#0066B3]">
                    Mantenimiento Técnico
                  </span>
                  <h3 className="text-base font-bold text-[#263238] mt-2">
                    Ensayos de Hermeticidad y Ajuste
                  </h3>
                  <p className="text-xs text-[#5B6570] mt-1 line-clamp-2">
                    Revisión preventiva, cambio de valvulería y presurización reglamentaria.
                  </p>
                  <Link
                    href="/servicios/mantenimiento"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0066B3] hover:text-[#005291] mt-3"
                  >
                    <span>Ficha de mantenimiento</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Quality & Safety Section */}
          <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-[#F4F7F8] border border-slate-200">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Calidad y Seguridad
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-1">
                Pilares Técnicos y Garantía de Conformidad
              </h2>
              <p className="mt-2 text-sm text-[#5B6570] leading-relaxed">
                Todas nuestras obras se formulan, ejecutan y prueban bajo rigurosos protocolos de ingeniería para garantizar máxima seguridad y una habilitación rápida ante la empresa distribuidora.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <span className="text-xs font-bold text-[#0066B3] block mb-1">01. Vivienda y Comercio</span>
                <h3 className="font-bold text-sm text-[#263238] mb-1">Redes Seguras</h3>
                <p className="text-xs text-[#5B6570] leading-relaxed">
                  Trazado y tendido de tuberías, dimensionamiento adecuado y ubicación óptima de centros de medición.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <span className="text-xs font-bold text-[#287A1C] block mb-1">02. Control de Flujo</span>
                <h3 className="font-bold text-sm text-[#263238] mb-1">Presión Continua</h3>
                <p className="text-xs text-[#5B6570] leading-relaxed">
                  Parámetros técnicos para distribución eficiente y segura de gas en media y alta presión industrial.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <span className="text-xs font-bold text-[#0066B3] block mb-1">03. Equipos Térmicos</span>
                <h3 className="font-bold text-sm text-[#263238] mb-1">Acople Industrial</h3>
                <p className="text-xs text-[#5B6570] leading-relaxed">
                  Conexión técnica de calderas, hornos y trenes de regulación con sistemas de corte automático.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <span className="text-xs font-bold text-[#287A1C] block mb-1">04. Cero Fugas</span>
                <h3 className="font-bold text-sm text-[#263238] mb-1">Pruebas de Presión</h3>
                <p className="text-xs text-[#5B6570] leading-relaxed">
                  Ensayos de hermeticidad con manómetros certificados para verificar la estanqueidad total de la red.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive FAQ Accordion */}
          <div className="mb-20">
            <FaqAccordion
              items={FAQS_SERVICIOS}
              title="Preguntas Frecuentes sobre Nuestros Servicios"
              description="Respuestas directas a las consultas más comunes de constructoras, empresas y administraciones sobre redes de gas."
            />
          </div>

          {/* Bottom Help CTA con enlaces a Proyectos y Contacto */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#F4F7F8] border border-slate-200 text-[#263238] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#263238]">
                ¿Requieres una propuesta técnica para tu obra o industria?
              </h3>
              <p className="text-[#5B6570] text-sm mt-1 max-w-xl leading-relaxed">
                Revisamos tus planos y requerimientos técnicos sin compromiso. También puedes explorar nuestros registros y tipologías de proyectos ejecutados en obra.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#0066B3] bg-white border border-sky-200 hover:bg-sky-50 transition-colors shadow-sm"
              >
                <span>Ver Proyectos</span>
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]"
              >
                <span>Consultar Servicio / Contacto</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
