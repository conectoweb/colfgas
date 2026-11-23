import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBreadcrumbJsonLd } from '@/lib/seo';
import { FaqAccordion, FaqItem } from '@/components/FaqAccordion';
import {
  Building2,
  CheckCircle2,
  ShieldCheck,
  Flame,
  ArrowRight,
  Gauge,
  Layers,
  FileCheck,
  PhoneCall,
  MessageCircle,
  Home,
  Wrench,
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Gas Residencial y Multifamiliar | Redes Internas y Matrices',
  description:
    'Ingeniería, construcción e instalación de redes de gas natural para conjuntos residenciales y edificios multifamiliares en Colombia. Empresa certificada por Vanti. Cumplimiento de norma NTC 2505.',
  alternates: {
    canonical: '/servicios/gas-residencial',
  },
};

const FAQS_RESIDENCIAL: FaqItem[] = [
  {
    question: '¿En qué etapa de la construcción de un edificio debe coordinarse la red de gas?',
    answer:
      'Lo ideal es iniciar desde la fase de diseño hidrosanitario y arquitectónico. Esto permite reservar los ductos técnicos de ventilación, los nichos de baterías de medidores y las pasadas estructurales en placas, evitando roturas posteriores o reprocesos en obra civil.',
    category: 'Planificación de Obra',
  },
  {
    question: '¿Por qué se prefiere la tubería multicapa PE-AL-PE en vivienda moderna?',
    answer:
      'La tubería multicapa PE-AL-PE combina la resistencia química y flexibilidad del polietileno con la resistencia a la presión y barrera de oxígeno del aluminio. Al suministrarse en rollos continuos, reduce significativamente las uniones mecánicas empotradas, disminuyendo al mínimo cualquier riesgo de fuga.',
    category: 'Materiales',
  },
  {
    question: '¿Qué requerimientos de ventilación exige la norma NTC 2505 para cocinas?',
    answer:
      'Cada recinto donde funcionen gasodomésticos (estufas, calentadores) debe contar con aberturas reglamentarias superiores e inferiores para renovación de aire y dilución de monóxido de carbono, calculadas según la potencia térmica nominal instalada.',
    category: 'Norma NTC 2505',
  },
  {
    question: '¿COLFGAS realiza las pruebas de hermeticidad previas a la entrega?',
    answer:
      'Sí. Efectuamos pruebas de hermeticidad con manómetros certificados y sellos calibrados en el 100% de los puntos hidráulicos y montantes. Entregamos el acta técnica de ensayo requerida para que el Organismo de Inspección acreditado apruebe y la empresa distribuidora habilite el servicio.',
    category: 'Certificación',
  },
];

export default function GasResidencialPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Servicios', url: '/servicios' },
    { name: 'Gas Residencial', url: '/servicios/gas-residencial' },
  ]);

  const stages = [
    {
      title: '1. Factibilidad y Cálculo Hidráulico',
      desc: 'Dimensionamiento de diámetros por pérdida de presión admitida, selección de materiales según trazado y coordinación con planos arquitectónicos e hidrosanitarios.',
      icon: Layers,
    },
    {
      title: '2. Montaje de Red Matriz y Montantes',
      desc: 'Tendido de líneas principales en tubería certificada (cobre tipo L, acero soldado o PE-AL-PE) con sujeción antisísmica y protección anticorrosiva.',
      icon: Building2,
    },
    {
      title: '3. Centros de Medición y Gabinetes',
      desc: 'Instalación de baterías unificadas de medidores, reguladores de primera y segunda etapa, válvulas de corte general e individual con ventilación reglamentaria.',
      icon: Gauge,
    },
    {
      title: '4. Redes Internas y Puntos de Consumo',
      desc: 'Canalización interna hasta estufas, calentadores de paso y secadoras, asegurando distancias a conductores eléctricos y ventilación adecuada de recintos.',
      icon: Flame,
    },
    {
      title: '5. Pruebas de Hermeticidad y Entrega',
      desc: 'Presurización neumática con manómetro certificado según NTC 2505 para verificar cero caídas de presión antes de la inspección y habilitación del servicio.',
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
                  <li className="font-semibold text-[#0066B3]">Gas Residencial</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#0066B3] border border-sky-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0066B3]" aria-hidden="true" />
                <span>Especialistas en Copropiedades y Multifamiliares</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-[#263238] leading-tight">
                Redes de Gas Residencial y Multifamiliar
              </h1>

              <p className="text-base sm:text-lg text-[#5B6570] leading-relaxed">
                Ingeniería, construcción e instalación de redes matrices, montantes verticales y centros de medición para edificios de propiedad horizontal, torres de apartamentos y conjuntos residenciales bajo la norma NTC 2505.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0066B3] hover:bg-[#005291] shadow-sm transition-all"
                >
                  <span>Cotizar Red Residencial</span>
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

            {/* Right Column: Visual Technical Graphic */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 bg-white">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/galeria/gran-banco-de-medidores-de-gas.webp"
                    alt="Batería centralizada de medidores de gas natural en gabinete técnico para edificio residencial multifamiliar"
                    width={800}
                    height={500}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-[#0066B3] shadow-md border border-sky-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#287A1C]" aria-hidden="true" />
                      <span>Norma NTC 2505</span>
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
                  <span className="text-[11px] font-semibold text-[#5B6570]">
                    Batería de medidores de gas centralizada con reguladores individuales
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
              <Home className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="text-sm">
              <h2 className="text-base font-bold text-[#263238] mb-1">
                Especialistas en Edificaciones de Vivienda y Copropiedades
              </h2>
              <p className="text-[#5B6570] leading-relaxed">
                Nuestras soluciones residenciales abarcan el diseño, canalización y montaje de redes fijas para suministro doméstico. <strong>No realizamos conversión automotriz ni prestamos servicios relacionados con gas vehicular.</strong>
              </p>
            </div>
          </div>

          {/* Scope Grid */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Alcance Confirmado
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-2">
                Componentes de la Red Residencial de Gas
              </h2>
              <p className="text-sm sm:text-base text-[#5B6570] mt-2">
                Cada elemento de la instalación es planificado conforme a la norma NTC 2505 y las directrices de Vanti.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#F4F7F8] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0066B3] flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#263238] mb-2">Acometidas y Red Matriz</h3>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Conexión desde la red de distribución urbana hasta el armario o gabinete principal del edificio, canalizada en zanja con señalización reglamentaria.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F7F8] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0066B3] flex items-center justify-center mb-4">
                  <Gauge className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#263238] mb-2">Centros de Medición</h3>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Baterías unificadas de medidores de gas con reguladores de presión, válvulas de corte rápido por usuario y ventilación reglamentaria.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F7F8] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0066B3] flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#263238] mb-2">Montantes Verticales</h3>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Tuberías verticales canalizadas por ductos técnicos no habitables, protegidas contra vibraciones y con juntas de dilatación según altura.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F7F8] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0066B3] flex items-center justify-center mb-4">
                  <Flame className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#263238] mb-2">Redes Internas</h3>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Trazados interiores en tubería multicapa PE-AL-PE o cobre tipo L hasta los puntos de conexión de estufas, calentadores y secadoras.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F7F8] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0066B3] flex items-center justify-center mb-4">
                  <FileCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#263238] mb-2">Pruebas de Hermeticidad</h3>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Ensayo de presión neumática con manómetro calibrado en el 100% de la instalación para constatar cero fugas previo a la habilitación.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F7F8] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#287A1C] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#263238] mb-2">Certificación por Vanti</h3>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Toda la obra se ejecuta cumpliendo los requerimientos de la distribuidora para facilitar la inspección y habilitación sin contratiempos.
                </p>
              </div>
            </div>
          </div>

          {/* Photographic Evidence: Centros de Medición y Redes Residenciales */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Evidencia de Instalaciones Residenciales
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-2">
                Medidores y Redes en Copropiedades
              </h2>
              <p className="text-sm text-[#5B6570] mt-1">
                Fichas fotográficas de baterías de medidores, nichos y gabinetes instalados bajo norma NTC 2505.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group rounded-2xl bg-[#F4F7F8] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/galeria/medidores-de-gas-en-azotea.webp"
                    alt="Instalación de centros de medición y reguladores de gas en cubierta y azotea ventilada"
                    width={600}
                    height={450}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-100 text-[#0066B3]">
                    Azotea Técnica
                  </span>
                  <h3 className="text-sm font-bold text-[#263238] mt-2 leading-snug">
                    Medición en Cubierta
                  </h3>
                  <p className="text-xs text-[#5B6570] mt-1 line-clamp-2">
                    Ventilación natural permanente y libre acceso para revisiones periódicas.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl bg-[#F4F7F8] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/galeria/garaje-iluminado-con-medidores-de-gas.webp"
                    alt="Instalación de gabinetes y centros de medición de gas en área técnica de parqueadero subterráneo"
                    width={600}
                    height={450}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-[#287A1C]">
                    Área de Parqueadero
                  </span>
                  <h3 className="text-sm font-bold text-[#263238] mt-2 leading-snug">
                    Gabinete en Sótano
                  </h3>
                  <p className="text-xs text-[#5B6570] mt-1 line-clamp-2">
                    Diseño modular protegido y señalizado según especificaciones técnicas de Vanti.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl bg-[#F4F7F8] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/galeria/medidor-de-gas-en-nicho-de-concreto.webp"
                    alt="Medidor de gas natural instalado en nicho empotrado de concreto con regulador de segunda etapa"
                    width={600}
                    height={450}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                    Nicho Empotrado
                  </span>
                  <h3 className="text-sm font-bold text-[#263238] mt-2 leading-snug">
                    Medición Individual
                  </h3>
                  <p className="text-xs text-[#5B6570] mt-1 line-clamp-2">
                    Acometida con regulador de segunda etapa y llave de paso general.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl bg-[#F4F7F8] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/galeria/gabinete-blanco-con-tuberias-de-gas.webp"
                    alt="Gabinete blanco interior con tuberías y válvulas de paso para suministro residencial"
                    width={600}
                    height={450}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-100 text-[#0066B3]">
                    Montante Interior
                  </span>
                  <h3 className="text-sm font-bold text-[#263238] mt-2 leading-snug">
                    Gabinete y Válvulas
                  </h3>
                  <p className="text-xs text-[#5B6570] mt-1 line-clamp-2">
                    Válvulas esféricas de corte con tubería esmaltada y accesorios certificados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Process Stages */}
          <div className="mb-20 bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mb-8 text-center">
              Fases de Ejecución en Proyectos Residenciales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stages.map((st, i) => {
                const Icon = st.icon;
                return (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0066B3] flex items-center justify-center mb-3">
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
                  ¿Necesitas soluciones para la industria o mantenimiento de redes?
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6570] mt-1">
                  Descubre nuestras líneas técnicas complementarias para el sector productivo y redes en operación.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/servicios/gas-industrial"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] transition-all"
                >
                  <span>Gas Industrial</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Dudas Frecuentes
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-2">
                Preguntas sobre Redes de Gas Residencial
              </h2>
            </div>
            <FaqAccordion items={FAQS_RESIDENCIAL} />
          </div>

          {/* Final CTA Box */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0066B3] to-[#005291] text-white text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              ¿Vas a iniciar una obra residencial o multifamiliar?
            </h2>
            <p className="text-sm sm:text-base text-sky-100 max-w-2xl mx-auto">
              Contáctanos para revisar planos hidráulicos y cotizar la red de gas con el respaldo de una empresa certificada por Vanti.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={COMPANY_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#263238]" aria-hidden="true" />
                <span>Hablar por WhatsApp (320 827 1724)</span>
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/30 transition-all"
              >
                <span>Ver Canales de Contacto</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
