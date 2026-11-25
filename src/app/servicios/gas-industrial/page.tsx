import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBreadcrumbJsonLd } from '@/lib/seo';
import { FaqAccordion, FaqItem } from '@/components/FaqAccordion';
import {
  Factory,
  CheckCircle2,
  ShieldCheck,
  Flame,
  ArrowRight,
  Gauge,
  Layers,
  FileCheck,
  Building2,
  Wrench,
  AlertTriangle,
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Gas Industrial y Comercial | Redes de Media y Alta Presión',
  description:
    'Ingeniería, montaje y canalización de redes de gas natural y GLP para plantas industriales y comercio en Colombia. Estaciones ERM, líneas en acero soldado y pruebas de hermeticidad. Empresa certificada por Vanti.',
  alternates: {
    canonical: '/servicios/gas-industrial',
  },
};

const FAQS_INDUSTRIAL: FaqItem[] = [
  {
    question: '¿Qué presiones de operación se manejan en redes industriales?',
    answer:
      'Las redes industriales operan típicamente en rangos de media y alta presión (desde 19 mbar hasta 4 bar o 60 psig, según el requerimiento de los equipos térmicos). El dimensionamiento se realiza con base en los requerimientos del proceso y los estándares técnicos de la distribuidora de gas.',
    category: 'Presiones Técnicas',
  },
  {
    question: '¿Qué materiales y métodos de unión se exigen en industria?',
    answer:
      'Se utiliza tubería de acero al carbono cédula 40 o cédula 80 sin costura (ASTM A53 / A106), unida mediante soldadura calificada por arco eléctrico (SMAW / GTAW). En canalizaciones enterradas de media presión se emplea polietileno de alta densidad (PEAD PE100) unido por termofusión o electrofusión.',
    category: 'Materiales y Soldadura',
  },
  {
    question: '¿Qué función cumple una Estación de Regulación y Medición (ERM)?',
    answer:
      'La ERM reduce la presión de la red de transporte a la presión de trabajo segura requerida por los quemadores, calderas u hornos, estabilizando el caudal y registrando el consumo volumétrico con elementos de corte automático por sobrepresión (OPSO) y alivio de presión.',
    category: 'Estaciones ERM',
  },
  {
    question: '¿COLFGAS realiza suministro o conversión para gas vehicular?',
    answer:
      'No. En COLFGAS CONSTRUCCIONES S.A.S. trabajamos exclusivamente con redes estacionarias fijas por tubería para plantas productivas, comercio y vivienda. No atendemos estaciones de servicio vehicular (GNCV) ni realizamos conversiones de motores.',
    category: 'Enfoque Técnico',
  },
];

export default function GasIndustrialPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Servicios', url: '/servicios' },
    { name: 'Gas Industrial', url: '/servicios/gas-industrial' },
  ]);

  const industrialStages = [
    {
      title: '1. Análisis Térmico y Caudal Requerido',
      desc: 'Cálculo del consumo pico simultáneo en m³/h para calderas, hornos o secadores industriales, determinando presiones de entrada y entrega.',
      icon: Gauge,
    },
    {
      title: '2. Trazado y Canalización Técnica',
      desc: 'Trazado de líneas aéreas y subterráneas cumpliendo distancias de seguridad contra fuentes eléctricas, calor y estructuras civiles.',
      icon: Layers,
    },
    {
      title: '3. Soldadura Calificada e Inspección',
      desc: 'Unión de tuberías de acero al carbón mediante soldadores certificados, asegurando penetración y resistencia mecánica.',
      icon: Flame,
    },
    {
      title: '4. Montaje de Estaciones ERM',
      desc: 'Armado de puentes de regulación simple o doble etapa con válvulas de bloqueo rápido, filtros coalescentes y manómetros glicerina.',
      icon: Factory,
    },
    {
      title: '5. Pruebas de Resistencia y Estanqueidad',
      desc: 'Ensayos neumáticos y de hermeticidad con presiones de prueba certificadas para asegurar total estanqueidad y emisión de informe técnico.',
      icon: FileCheck,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Banner with Visual Header Image */}
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
                  <li>
                    <Link href="/servicios" className="hover:text-[#0066B3] transition-colors">
                      Servicios
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="font-semibold text-[#287A1C]">Gas Industrial</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#0066B3] border border-sky-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0066B3]" aria-hidden="true" />
                <span>Especialistas en Media y Alta Demanda</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-[#263238] leading-tight">
                Redes de Gas Industrial y Comercial
              </h1>

              <p className="text-base sm:text-lg text-[#5B6570] leading-relaxed">
                Ingeniería, montaje y canalización de líneas de suministro de gas en media y alta presión para plantas de manufactura, calderas, hornos continuos y centros comerciales, con los más altos estándares de seguridad y especificaciones de Vanti.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0066B3] hover:bg-[#005291] shadow-sm transition-all"
                >
                  <span>Cotizar Red Industrial</span>
                  <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
                </Link>

                <Link
                  href="/proyectos"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#263238] bg-slate-100 hover:bg-slate-200 transition-all border border-slate-300"
                >
                  <span>Ver Galería de Obras</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Technical Graphic */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 bg-white">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/galeria/corredor-de-obra-con-tuberias-amarillas.webp"
                    alt="Líneas de tuberías de gas en corredor técnico de edificación para sector productivo e industrial"
                    width={800}
                    height={500}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-[#287A1C] shadow-md border border-emerald-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#287A1C]" aria-hidden="true" />
                      <span>Seguridad Industrial</span>
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
                  <span className="text-[11px] font-semibold text-[#5B6570]">
                    Trazado de tuberías en acero al carbón para alta y media presión
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
          <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 flex flex-col sm:flex-row items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="text-sm">
              <h2 className="text-base font-bold text-amber-950 mb-1">
                Aclaración Operativa Importante
              </h2>
              <p className="text-amber-900/90 leading-relaxed">
                COLFGAS CONSTRUCCIONES S.A.S. atiende exclusivamente instalaciones fijas por tubería para plantas industriales, procesos térmicos y comercio. <strong>No realizamos conversión automotriz, transporte de combustible vehicular ni operación de estaciones de servicio (GNCV).</strong>
              </p>
            </div>
          </div>

          {/* Scope Grid */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#287A1C]">
                Soluciones Industriales
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-2">
                Capacidades Técnicas para la Industria
              </h2>
              <p className="text-sm sm:text-base text-[#5B6570] mt-2">
                Instalaciones robustas diseñadas para operar con seguridad bajo altas exigencias térmicas y operativas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#F4F7F8] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#287A1C] flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#263238] mb-2">Tuberías de Acero Soldado</h3>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Líneas aéreas y en trinchera en acero al carbón ASTM A53 / A106 cédula 40 y 80, con uniones soldadas y protección anticorrosiva epóxica.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F7F8] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#287A1C] flex items-center justify-center mb-4">
                  <Factory className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#263238] mb-2">Estaciones de Regulación ERM</h3>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Diseño y ensamblaje de estaciones primarias y secundarias con reguladores pilotados, filtros de gas y sistemas de corte automático por sobrepresión.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F7F8] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#287A1C] flex items-center justify-center mb-4">
                  <Gauge className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#263238] mb-2">Trenes de Gas y Quemadores</h3>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Instalación de trenes de válvulas modulantes, presóstatos de mínima y máxima presión, y electroválvulas de corte para calderas y hornos.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F7F8] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#287A1C] flex items-center justify-center mb-4">
                  <FileCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#263238] mb-2">Pruebas Neumáticas y Hermeticidad</h3>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Ensayos de resistencia y hermeticidad con presiones de prueba certificadas para asegurar total confiabilidad mecánica antes de la puesta en marcha.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F7F8] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#287A1C] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#263238] mb-2">Certificación por Vanti</h3>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Coordinación técnica con las especificaciones de la distribuidora para la conexión a red matriz y la entrega formal de la instalación.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F7F8] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#287A1C] flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#263238] mb-2">Redes Comerciales</h3>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Instalaciones técnicas para centros comerciales, patios de comida, panaderías industriales y hoteles con altos estándares de seguridad y confiabilidad.
                </p>
              </div>
            </div>
          </div>

          {/* Photographic Evidence: Tuberías y Montantes Industriales */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#287A1C]">
                Evidencia de Instalaciones Industriales
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-2">
                Tuberías Matrices, Colectores y Manómetros
              </h2>
              <p className="text-sm text-[#5B6570] mt-1">
                Fichas fotográficas de líneas de suministro en acero soldado y estaciones de distribución para procesos productivos continuos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group rounded-2xl bg-[#F4F7F8] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/galeria/tres-tuberias-amarillas-en-obra.webp"
                    alt="Tendido de tres tuberías de gas en acero soldadas y pintadas en amarillo reglamentario en obra civil"
                    width={600}
                    height={450}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-[#287A1C]">
                    Líneas Matrices
                  </span>
                  <h3 className="text-sm font-bold text-[#263238] mt-2 leading-snug">
                    Tuberías en Acero Soldado
                  </h3>
                  <p className="text-xs text-[#5B6570] mt-1 line-clamp-2">
                    Líneas paralelas de suministro con soporte antisísmico para media presión.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl bg-[#F4F7F8] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/galeria/colectores-de-gas-en-obra.webp"
                    alt="Colectores y tuberías de gas en proceso de montaje en estructura de construcción"
                    width={600}
                    height={450}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-100 text-[#0066B3]">
                    Puentes de Distribución
                  </span>
                  <h3 className="text-sm font-bold text-[#263238] mt-2 leading-snug">
                    Colectores en Obra
                  </h3>
                  <p className="text-xs text-[#5B6570] mt-1 line-clamp-2">
                    Armado de colectores múltiples para alimentación de calderas y hornos.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl bg-[#F4F7F8] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/galeria/tuberias-expuestas-en-muro-de-concreto.webp"
                    alt="Montante vertical de gas con abrazaderas sobre muro de concreto a la vista"
                    width={600}
                    height={450}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                    Montantes Verticales
                  </span>
                  <h3 className="text-sm font-bold text-[#263238] mt-2 leading-snug">
                    Fijación en Concreto
                  </h3>
                  <p className="text-xs text-[#5B6570] mt-1 line-clamp-2">
                    Trazados verticales con abrazaderas isofónicas de alta resistencia.
                  </p>
                </div>
              </div>

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
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-[#287A1C]">
                    Control Neumático
                  </span>
                  <h3 className="text-sm font-bold text-[#263238] mt-2 leading-snug">
                    Ensayos de Presión y Estanqueidad
                  </h3>
                  <p className="text-xs text-[#5B6570] mt-1 line-clamp-2">
                    Verificación de cero caídas de presión antes de la puesta en servicio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Process Stages */}
          <div className="mb-20 bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mb-8 text-center">
              Fases de Ejecución en Instalaciones Industriales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industrialStages.map((st, i) => {
                const Icon = st.icon;
                return (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#287A1C] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-[#263238] mb-2">{st.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">{st.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Related Services Links */}
          <div className="mb-20 p-8 rounded-3xl bg-[#F4F7F8] border border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                  Otros Servicios Especializados
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#263238] mt-1">
                  ¿Requieres redes residenciales o mantenimiento técnico?
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6570] mt-1">
                  Conoce nuestras soluciones para vivienda y los programas de mantenimiento de redes existentes.
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
                  href="/servicios/mantenimiento"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#263238] bg-white hover:bg-slate-100 border border-slate-300 transition-all"
                >
                  <Wrench className="w-4 h-4 text-[#287A1C]" aria-hidden="true" />
                  <span>Mantenimiento</span>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#287A1C]">
                Consultas Técnicas
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-2">
                Preguntas Frecuentes sobre Gas Industrial
              </h2>
            </div>
            <FaqAccordion items={FAQS_INDUSTRIAL} />
          </div>

          {/* Final CTA Box */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#263238] text-white text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              ¿Planeas una ampliación o nueva línea de gas para tu industria?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Comunícate con nuestros ingenieros para revisar tu memoria de cálculo y programar una visita técnica a tu planta.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold text-white bg-[#0066B3] hover:bg-[#005291] shadow-md transition-all"
              >
                <span>Ir a Contáctanos / Cotizar</span>
                <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
