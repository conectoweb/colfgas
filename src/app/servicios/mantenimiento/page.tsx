import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBreadcrumbJsonLd } from '@/lib/seo';
import { FaqAccordion, FaqItem } from '@/components/FaqAccordion';
import {
  Wrench,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Gauge,
  Layers,
  FileCheck,
  PhoneCall,
  MessageCircle,
  Building2,
  Factory,
  Search,
  AlertCircle,
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Mantenimiento de Redes de Gas | Vivienda e Industria',
  description:
    'Mantenimiento preventivo y correctivo de redes y sistemas de gas para viviendas e industrias en Colombia. Pruebas de hermeticidad y detección técnica de fugas. Empresa certificada por Vanti.',
  alternates: {
    canonical: '/servicios/mantenimiento',
  },
};

const FAQS_MANTENIMIENTO: FaqItem[] = [
  {
    question: '¿Qué abarca el servicio de mantenimiento de redes de gas de COLFGAS?',
    answer:
      'Nuestro servicio se concentra en la red física de distribución: inspección de tuberías, pruebas neumáticas de hermeticidad, verificación y cambio de válvulas de paso, sustitución de reguladores de presión descalibrados y adecuaciones técnicas exigidas en inspecciones periódicas.',
    category: 'Alcance del Mantenimiento',
  },
  {
    question: '¿COLFGAS realiza mantenimiento a calentadores o gasodomésticos?',
    answer:
      'Nuestro enfoque técnico principal es la infraestructura fija de la red de tuberías, montantes, gabinetes y estaciones de regulación. No incluimos mantenimiento general de gasodomésticos o calentadores de forma estándar; cualquier requerimiento especial sobre artefactos debe ser validado previamente con nuestro equipo técnico [CONFIRMAR CON COLFGAS].',
    category: 'Gasodomésticos',
  },
  {
    question: '¿Cada cuánto tiempo debe realizarse una prueba de hermeticidad en una red?',
    answer:
      'En Colombia, la regulación establece inspecciones periódicas obligatorias cada 5 años para instalaciones residenciales y comerciales. En el sector industrial, se recomienda una revisión preventiva anual para garantizar la estanqueidad y seguridad de las líneas de producción.',
    category: 'Periodicidad',
  },
  {
    question: '¿Qué debo hacer si sospecho de una fuga de gas en mi instalación?',
    answer:
      'Cierra de inmediato la válvula de paso general, ventila ampliamente el área abriendo puertas y ventanas, no enciendas interruptores ni fósforos, y comunícate de inmediato con las líneas de emergencia de la empresa distribuidora de gas o con nuestro servicio técnico al 320 827 1724 para atención especializada.',
    category: 'Seguridad',
  },
];

export default function MantenimientoPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Servicios', url: '/servicios' },
    { name: 'Mantenimiento', url: '/servicios/mantenimiento' },
  ]);

  const maintenanceServices = [
    {
      title: 'Pruebas de Hermeticidad Neumática',
      desc: 'Ensayos estandarizados con manómetros certificados para diagnosticar y certificar la estanqueidad total de la red fija.',
      icon: Gauge,
    },
    {
      title: 'Detección Técnica de Fugas',
      desc: 'Inspección de juntas, uniones roscadas y accesorios con solución formadora de burbujas no corrosiva y detectores calibrados.',
      icon: Search,
    },
    {
      title: 'Reemplazo de Válvulas y Accesorios',
      desc: 'Sustitución de llaves de corte rápido, terminales y tuberías deterioradas o con desgaste mecánico.',
      icon: Wrench,
    },
    {
      title: 'Revisión y Calibración de Reguladores',
      desc: 'Ajuste de presiones de entrega en reguladores de primera y segunda etapa para estabilizar el suministro.',
      icon: Layers,
    },
    {
      title: 'Adecuaciones para Inspección Periódica',
      desc: 'Corrección de observaciones técnicas emitidas por organismos de inspección o la distribuidora para reconexión de servicio.',
      icon: FileCheck,
    },
    {
      title: 'Mantenimiento en Plantas Industriales',
      desc: 'Revisión técnica de puentes de regulación ERM, trenes de gas y líneas de alta/media presión para continuidad operativa.',
      icon: Factory,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#F4F7F8] via-white to-[#F4F7F8] border-b border-slate-200 py-12 sm:py-16 text-[#263238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 text-center lg:text-left space-y-4">
              <nav aria-label="Breadcrumb" className="mb-2">
                <ol className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#5B6570]">
                  <li>
                    <Link href="/" className="hover:text-[#0066B3] transition-colors">
                      Inicio
                    </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link href="/servicios" className="hover:text-[#0066B3] transition-colors">
                      Servicios
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="font-semibold text-[#0066B3]">Mantenimiento de Redes</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#0066B3] border border-sky-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0066B3]" aria-hidden="true" />
                <span>Inspección Técnica y Pruebas de Hermeticidad</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-[#263238] leading-tight">
                Mantenimiento de Redes y Sistemas de Gas
              </h1>

              <p className="text-base sm:text-lg text-[#5B6570] leading-relaxed">
                Mantenimiento preventivo y correctivo, pruebas de hermeticidad y adecuación técnica para sistemas de gas natural y GLP en edificaciones residenciales, comerciales e industriales en Colombia.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0066B3] hover:bg-[#005291] shadow-sm transition-all"
                >
                  <span>Solicitar Mantenimiento</span>
                  <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
                </Link>

                <a
                  href={COMPANY_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#263238]" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 bg-white">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/galeria/tecnico-revisando-tuberias-de-gas.webp"
                    alt="Técnico instalador calificado realizando verificación y mantenimiento técnico de tuberías de gas"
                    width={800}
                    height={500}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-[#0066B3] shadow-md border border-sky-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#287A1C]" aria-hidden="true" />
                      <span>Empresa Certificada por Vanti</span>
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
                  <span className="text-[11px] font-semibold text-[#5B6570]">
                    Inspección técnica de tuberías, valvulería y hermeticidad
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
          {/* Transparency & Scope Clarification Box */}
          <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-sky-50 border border-sky-200 text-[#263238] flex flex-col sm:flex-row items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#0066B3] text-white flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="text-sm">
              <h2 className="text-base font-bold text-[#263238] mb-1">
                Alcance Confirmado del Mantenimiento
              </h2>
              <p className="text-[#5B6570] leading-relaxed">
                El servicio de mantenimiento de <strong>COLFGAS CONSTRUCCIONES S.A.S.</strong> está centrado en la <strong>red física de gas (tuberías, acometidas, montantes, estaciones de regulación y válvulas)</strong> para viviendas e industria. <em>No incluye mantenimiento de calentadores, gasodomésticos u otros artefactos de consumo sin previa confirmación [CONFIRMAR CON COLFGAS]. Tampoco prestamos servicios para gas vehicular.</em>
              </p>
            </div>
          </div>

          {/* Maintenance Grid */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Servicios Técnicos
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-2">
                Operaciones de Mantenimiento de Redes
              </h2>
              <p className="text-sm sm:text-base text-[#5B6570] mt-2">
                Trabajos técnicos orientados a garantizar la estanqueidad, seguridad y continuidad del suministro de gas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {maintenanceServices.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-[#F4F7F8] border border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0066B3] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-[#263238] mb-2">{srv.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">{srv.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Photographic Evidence: Mantenimiento e Inspección */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Evidencia de Ensayos Técnicos
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-2">
                Pruebas de Hermeticidad, Manómetros y Válvulas
              </h2>
              <p className="text-sm text-[#5B6570] mt-1">
                Fichas fotográficas de operaciones de mantenimiento y adecuación normativa en redes existentes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group rounded-2xl bg-[#F4F7F8] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/galeria/manometro-y-tuberias-de-gas-en-ladrillo.webp"
                    alt="Manómetro calibrado instalado en tramo de tubería para ensayo de hermeticidad y presión"
                    width={600}
                    height={450}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-100 text-[#0066B3]">
                    Prueba Neumática
                  </span>
                  <h3 className="text-sm font-bold text-[#263238] mt-2 leading-snug">
                    Manómetro Calibrado
                  </h3>
                  <p className="text-xs text-[#5B6570] mt-1 line-clamp-2">
                    Ensayo estático para verificar total ausencia de fugas en la instalación.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl bg-[#F4F7F8] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/galeria/restauracion-de-medidores-de-gas.webp"
                    alt="Trabajos de mantenimiento y adecuación técnica en batería de medidores existente"
                    width={600}
                    height={450}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-[#287A1C]">
                    Adecuación Técnica
                  </span>
                  <h3 className="text-sm font-bold text-[#263238] mt-2 leading-snug">
                    Mantenimiento de Medidores
                  </h3>
                  <p className="text-xs text-[#5B6570] mt-1 line-clamp-2">
                    Sustitución de accesorios desgastados y preparación para certificación de Vanti.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl bg-[#F4F7F8] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/galeria/tuberias-y-valvulas-de-gas.webp"
                    alt="Detalle de válvulas de corte y uniones mecánicas roscadas en tubería de gas"
                    width={600}
                    height={450}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                    Valvulería
                  </span>
                  <h3 className="text-sm font-bold text-[#263238] mt-2 leading-snug">
                    Válvulas y Uniones
                  </h3>
                  <p className="text-xs text-[#5B6570] mt-1 line-clamp-2">
                    Revisión de llaves de corte rápido esféricas de un cuarto de vuelta.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl bg-[#F4F7F8] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/galeria/suministros-de-gas-sobre-suelo-embaldosado.webp"
                    alt="Accesorios de tubería, válvulas y reguladores certificados para montaje de red de gas"
                    width={600}
                    height={450}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-100 text-[#0066B3]">
                    Repuestos Certificados
                  </span>
                  <h3 className="text-sm font-bold text-[#263238] mt-2 leading-snug">
                    Materiales Homologados
                  </h3>
                  <p className="text-xs text-[#5B6570] mt-1 line-clamp-2">
                    Insumos normalizados con sello de conformidad para redes combustibles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* When to Request Maintenance Section */}
          <div className="mb-20 bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#287A1C]">
                Diagnóstico Oportuno
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-2">
                ¿Cuándo programar un mantenimiento de red?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#287A1C] flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h3 className="font-bold text-[#263238]">Revisión Periódica de Vanti</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Si tu instalación residencial o comercial tiene pendiente la inspección quinquenal obligatoria o recibió observaciones de la distribuidora para habilitación.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#287A1C] flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h3 className="font-bold text-[#263238]">Olor a Gas o Sospecha de Fuga</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Percepción de olor característico del odorizante (mercaptano) en gabinetes de medición, montantes o recintos de tubería fija.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#287A1C] flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h3 className="font-bold text-[#263238]">Caída de Presión en Procesos</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Variaciones en la presión de suministro en quemadores industriales, hornos o calderas atribuibles a desgaste o descalibración del regulador.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#287A1C] flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <h3 className="font-bold text-[#263238]">Reformas u Obras en Edificación</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Modificaciones arquitectónicas que requieran relocalización de tuberías, recambio de montantes o adición de nuevos puntos de suministro.
                </p>
              </div>
            </div>
          </div>

          {/* Related Services Links */}
          <div className="mb-20 p-8 rounded-3xl bg-[#F4F7F8] border border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                  Construcción e Instalación de Redes
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#263238] mt-1">
                  ¿Vas a construir una nueva red de gas?
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6570] mt-1">
                  Conoce nuestros servicios de construcción e instalación para proyectos de vivienda e industria.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/servicios/gas-residencial"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] transition-all"
                >
                  <Building2 className="w-4 h-4" aria-hidden="true" />
                  <span>Gas Residencial</span>
                </Link>

                <Link
                  href="/servicios/gas-industrial"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#287A1C] hover:bg-[#1E5F15] transition-all"
                >
                  <Factory className="w-4 h-4" aria-hidden="true" />
                  <span>Gas Industrial</span>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Dudas Frecuentes
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-2">
                Preguntas sobre Mantenimiento de Redes de Gas
              </h2>
            </div>
            <FaqAccordion items={FAQS_MANTENIMIENTO} />
          </div>

          {/* Final CTA Box */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0066B3] to-[#005291] text-white text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              ¿Requieres mantenimiento preventivo o prueba de hermeticidad?
            </h2>
            <p className="text-sm sm:text-base text-sky-100 max-w-2xl mx-auto">
              Comunícate con COLFGAS CONSTRUCCIONES S.A.S. Empresa certificada por Vanti.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={COMPANY_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#263238]" aria-hidden="true" />
                <span>Escribir por WhatsApp (320 827 1724)</span>
              </a>
              <a
                href={COMPANY_INFO.phoneCallUrl}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/30 transition-all"
              >
                <PhoneCall className="w-4 h-4" aria-hidden="true" />
                <span>Llamar al {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
