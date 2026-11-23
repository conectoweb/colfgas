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
  title: 'Servicios de Redes de Gas Residencial e Industrial',
  description:
    'Portafolio de servicios de COLFGAS CONSTRUCCIONES S.A.S.: redes de gas para edificios multifamiliares, líneas industriales de alta presión, diseño hidráulico y mantenimiento técnico.',
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
    question: '¿Qué normativas técnicas rigen el diseño y construcción de las redes?',
    answer:
      'Nuestras obras cumplen estrictamente las normas técnicas colombianas: NTC 2505 para instalaciones residenciales y comerciales, NTC 3838 y NTC 4282 para redes industriales y presiones de operación, y los códigos internacionales ASME B31.8 para sistemas de transporte de gas por tubería.',
    category: 'Normativa Técnica',
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
      'Puedes contactarnos a través del formulario de cotización, por correo electrónico o directamente por WhatsApp. Revisamos tus planos arquitectónicos o memorias hidráulicas para estructurar una propuesta técnica y económica a la medida.',
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
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#0066B3] border border-sky-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0066B3]" aria-hidden="true" />
                <span>Ingeniería Especializada en Redes Fijas de Gas</span>
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-[#263238] leading-tight">
                Servicios Técnicos en Redes de Gas
              </h1>
              <p className="text-base sm:text-lg text-[#5B6570] leading-relaxed">
                Ofrecemos soluciones integrales de diseño, construcción, canalización y mantenimiento de redes de gas natural y GLP para proyectos residenciales, comerciales e industriales en Colombia.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/servicios/residencial"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]"
                >
                  <Building2 className="w-4 h-4" aria-hidden="true" />
                  <span>Gas Residencial</span>
                </Link>
                <Link
                  href="/servicios/industrial"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#287A1C] hover:bg-[#1E5F15] shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#287A1C]"
                >
                  <Factory className="w-4 h-4" aria-hidden="true" />
                  <span>Gas Industrial</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Technical Graphic */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 bg-white">
                <Image
                  src="/images/servicios/gas-servicios-hero.svg"
                  alt="Esquema técnico general de infraestructura de redes de gas residencial e industrial de COLFGAS"
                  width={800}
                  height={480}
                  priority
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
                  <span className="text-[11px] font-semibold text-[#5B6570]">
                    Esquema representativo de distribución fija • NTC 2505 y NTC 3838
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
                  <Image
                    src="/images/servicios/esquema-pruebas-hermeticidad.svg"
                    alt="Diagrama explicativo del protocolo de prueba de hermeticidad neumática de COLFGAS"
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Technical Standards Section */}
          <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-[#F4F7F8] border border-slate-200">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Marco Regulatorio Colombiano
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-1">
                Normativas Técnicas y Garantía de Conformidad
              </h2>
              <p className="mt-2 text-sm text-[#5B6570] leading-relaxed">
                Todas nuestras obras se formulan, ejecutan y prueban bajo los más exigentes estándares técnicos colombianos emitidos por ICONTEC y las resoluciones de la Comisión de Regulación de Energía y Gas (CREG).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <span className="font-mono text-xs font-bold text-[#0066B3] block mb-1">NTC 2505</span>
                <h3 className="font-bold text-sm text-[#263238] mb-1">Gas Residencial y Comercial</h3>
                <p className="text-xs text-[#5B6570] leading-relaxed">
                  Instalación de tuberías, dimensionamiento, ventilación y ubicación de centros de medición.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <span className="font-mono text-xs font-bold text-[#287A1C] block mb-1">NTC 3838</span>
                <h3 className="font-bold text-sm text-[#263238] mb-1">Presiones de Operación</h3>
                <p className="text-xs text-[#5B6570] leading-relaxed">
                  Parámetros para líneas de distribución en alta y media presión para el sector productivo.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <span className="font-mono text-xs font-bold text-[#0066B3] block mb-1">NTC 4282</span>
                <h3 className="font-bold text-sm text-[#263238] mb-1">Instalaciones Industriales</h3>
                <p className="text-xs text-[#5B6570] leading-relaxed">
                  Conexión segura de quemadores, calderas, hornos y trenes de gas con electroválvulas.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <span className="font-mono text-xs font-bold text-[#287A1C] block mb-1">ASME B31.8</span>
                <h3 className="font-bold text-sm text-[#263238] mb-1">Tuberías Soldadas</h3>
                <p className="text-xs text-[#5B6570] leading-relaxed">
                  Soldadura calificada y ensayos no destructivos en tubería de acero para fluidos inflamables.
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

          {/* Bottom Help CTA */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#F4F7F8] border border-slate-200 text-[#263238] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#263238]">
                ¿Requieres una propuesta técnica para tu obra o industria?
              </h3>
              <p className="text-[#5B6570] text-sm mt-1 max-w-xl">
                Envíanos tus especificaciones técnicas o comunícate con un asesor para coordinar una reunión de ingeniería.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] flex-shrink-0 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]"
            >
              <span>Solicitar Cotización</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
