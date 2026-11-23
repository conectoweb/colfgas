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
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Gas Residencial y Multifamiliar | Redes Internas y Matrices',
  description:
    'Ingeniería e instalación de redes de gas natural para conjuntos residenciales y edificios multifamiliares en Colombia. Cumplimiento de norma NTC 2505.',
  alternates: {
    canonical: '/servicios/residencial',
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
      'Cada recinto donde funcionen gasodomésticos (estufas, calentadores) debe contar con aberturas reglamentarias superiores e inferiores para renovación de aire y dilución de monóxido de carbono, calculadas según la potencia térmica nominal instalada (kW o BTU/h).',
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
    { name: 'Gas Residencial', url: '/servicios/residencial' },
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
            <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#0066B3] border border-sky-200">
                <Building2 className="w-3.5 h-3.5 text-[#0066B3]" aria-hidden="true" />
                <span>Soluciones Habitacionales Seguras</span>
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-[#263238] leading-tight">
                Redes e Instalaciones de Gas Residencial
              </h1>
              <p className="text-base sm:text-lg text-[#5B6570] leading-relaxed">
                Ingeniería, montaje y pruebas de hermeticidad en redes matrices, acometidas y tuberías internas para edificios de vivienda, conjuntos multifamiliares y urbanizaciones bajo norma <strong>NTC 2505</strong>.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/contacto?servicio=residencial"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]"
                >
                  <span>Cotizar Proyecto Residencial</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(
                    'Hola COLFGAS, requiero cotización para una red de gas residencial / edificio multifamiliar.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <span>WhatsApp Asesor</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Technical Graphic */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 bg-white">
                <Image
                  src="/images/servicios/gas-residencial-hero.svg"
                  alt="Esquema técnico de corte arquitectónico para distribución de gas residencial y gabinetes según NTC 2505"
                  width={800}
                  height={480}
                  priority
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
                  <span className="text-[11px] font-semibold text-[#5B6570]">
                    Esquema técnico de distribución interna y gabinetes • NTC 2505
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
          {/* Overview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Garantía y Confiabilidad en el Hogar
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238]">
                Infraestructura Segura para la Conducción de Gas en Propiedad Horizontal
              </h2>
              <p className="text-sm sm:text-base text-[#5B6570] leading-relaxed">
                En proyectos de vivienda, la seguridad de las familias es el factor prioritario. En <strong>COLFGAS CONSTRUCCIONES S.A.S.</strong> instalamos sistemas de tuberías de gas diseñados para durar la vida útil de la edificación, previniendo fugas, sobrepresiones y pérdidas de suministro.
              </p>
              <p className="text-sm sm:text-base text-[#5B6570] leading-relaxed">
                Trabajamos de la mano con directores de obra, ingenieros residentes y administraciones de copropiedades para entregar redes limpias, ensayadas y listas para su conexión a la red de distribución urbana.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="font-bold text-sm text-[#263238] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#287A1C]" aria-hidden="true" />
                  <span>Materiales Técnicos Empleados:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                  Tubería multicapa PE-AL-PE con accesorios certificados de prensado (press-fitting), tubería de cobre rígido y flexible tipo L/K con uniones soldadas en aleación de plata, y tubería de acero al carbono cédula 40 protegida contra corrosión.
                </p>
              </div>
            </div>

            {/* Side Card: Key Features */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#263238] mb-4">
                Alcance en Proyectos Residenciales
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#263238]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Acometidas desde la red pública exterior hasta el límite de propiedad.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Gabinetes para baterías de medidores residenciales con cerraduras reglamentarias.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Montantes verticales por ductos de instalaciones exclusivos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Instalaciones internas para estufas, hornos empotrados y calentadores de agua.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Dimensionamiento de ventilaciones inferiores y superiores para recintos de gas.</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link
                  href="/contacto?servicio=residencial"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]"
                >
                  <span>Cotizar Proyecto Residencial</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Explanatory Diagram: Montante Vertical y Batería de Medidores */}
          <div className="mb-20 rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                  Esquema Constructivo NTC 2505
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#263238]">
                  Montantes Verticales y Centros de Medición
                </h2>
                <p className="text-sm text-[#5B6570] leading-relaxed">
                  Las montantes verticales conducen el gas combustible a lo largo de los pisos del edificio. En COLFGAS diseñamos las trayectorias respetando las distancias de separación con redes eléctricas y sanitarias, e instalando válvulas de corte accesibles por cada unidad de vivienda.
                </p>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-[#5B6570] space-y-1.5">
                  <p className="font-bold text-[#263238]">Puntos Clave del Montaje Residencial:</p>
                  <p>• Soportería antisísmica con abrazaderas acolchadas cada 2 metros.</p>
                  <p>• Aislamiento dieléctrico entre metales disímiles para evitar par galvánico.</p>
                  <p>• Reguladores de presión de segunda etapa calibrados para presión doméstica (18 a 23 mbar).</p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <Image
                    src="/images/servicios/esquema-montante-residencial.svg"
                    alt="Diagrama técnico del montaje de montante vertical y batería de medidores según NTC 2505"
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 5-Step Process */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Metodología Constructiva
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-1">
                Fases de Ejecución en Obra Residencial
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {stages.map((stage, idx) => {
                const Icon = stage.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#007afd] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-sm text-[#263238] mb-2">{stage.title}</h3>
                      <p className="text-xs text-[#5B6570] leading-relaxed">{stage.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive FAQ Accordion */}
          <div className="mb-20">
            <FaqAccordion
              items={FAQS_RESIDENCIAL}
              title="Preguntas Frecuentes sobre Gas Residencial"
              description="Aclaraciones técnicas sobre acometidas, materiales de tubería y certificaciones de gas en conjuntos y edificios."
            />
          </div>

          {/* Bottom Help */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#F4F7F8] border border-slate-200 text-[#263238] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#263238]">
                ¿Construyes o administras un conjunto residencial?
              </h3>
              <p className="text-[#5B6570] text-sm mt-1 max-w-xl">
                Contáctanos para revisar planos, memorias de cálculo o programar una visita técnica a tu obra.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] flex-shrink-0 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]"
            >
              <span>Hablar con un Ingeniero</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
