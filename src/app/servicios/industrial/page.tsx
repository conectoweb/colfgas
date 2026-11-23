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
  Activity,
  Layers,
  AlertTriangle,
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Gas Industrial y Comercial | Alta y Media Presión',
  description:
    'Ingeniería, montaje de tuberías soldadas, estaciones de regulación (ERM) y líneas de suministro de gas para industrias en Colombia. Normas NTC 3838 y NTC 4282.',
  alternates: {
    canonical: '/servicios/industrial',
  },
};

const FAQS_INDUSTRIAL: FaqItem[] = [
  {
    question: '¿Qué es una estación ERM y por qué es indispensable en industrias?',
    answer:
      'Una Estación de Regulación y Medición (ERM) acondiciona el gas combustible de la red de transporte (suministrado en media o alta presión) reduciéndolo a la presión exacta requerida por calderas, hornos o quemadores, mientras filtra partículas sólidas, mide el consumo volumétrico y protege la planta con válvulas de corte por sobrepresión (OPSO).',
    category: 'Equipos y Skids ERM',
  },
  {
    question: '¿Qué calificación poseen los soldadores para tuberías de acero de gas?',
    answer:
      'Nuestras uniones soldadas se ejecutan con personal calificado según el código ASME Sección IX y procedimientos de soldadura aprobados (WPS/PQR) para procesos SMAW y GTAW, sometidas a inspección visual y ensayos no destructivos (tintas penetrantes o radiografías industriales).',
    category: 'Soldadura Calificada',
  },
  {
    question: '¿Cómo garantizan la continuidad operativa sin paradas imprevistas?',
    answer:
      'Diseñamos estaciones ERM con configuración de doble línea (una rama activa y una rama de reserva o standby con bypass regulado). Esto permite realizar mantenimiento de filtros o calibración de instrumentos sin detener la producción de vapor ni apagar quemadores.',
    category: 'Operación Continua',
  },
  {
    question: '¿Prestan servicios para montacargas a gas o flotas vehiculares?',
    answer:
      'No. Reiteramos que en COLFGAS nos dedicamos exclusivamente a tuberías e instalaciones fijas para procesos térmicos e industriales estacionarios. No realizamos conversión vehicular, recarga ni mantenimiento de cilindros móviles para automotores.',
    category: 'Alcance Técnico',
  },
];

export default function GasIndustrialPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Servicios', url: '/servicios' },
    { name: 'Gas Industrial y Comercial', url: '/servicios/industrial' },
  ]);

  const industrialCapabilities = [
    {
      title: 'Estaciones de Regulación y Medición (ERM)',
      desc: 'Montaje de skids compactos de filtrado, medición por turbina o diafragma y regulación multietapa con válvulas de corte por sobrepresión (slam-shut / OPSO).',
      icon: Gauge,
    },
    {
      title: 'Tuberías de Acero Soldado Cédula 40 / 80',
      desc: 'Líneas de conducción aérea y en trinchera en acero al carbono ASTM A53 / A106 Grado B, uniones con soldadura calificada según código ASME Sección IX.',
      icon: Factory,
    },
    {
      title: 'Redes de Polietileno Enterradas (PEAD)',
      desc: 'Tendido subterráneo en polietileno PE80 / PE100 de alta densidad unido mediante termofusión o electrofusión con trazabilidad de parámetros de soldadura.',
      icon: Layers,
    },
    {
      title: 'Alimentación de Calderas, Hornos y Secadores',
      desc: 'Cálculo de caudal pico horario, trenes de gas con doble válvula solenoide de bloqueo y despresurización de seguridad para procesos térmicos.',
      icon: Flame,
    },
    {
      title: 'Detección de Fugas y Parada de Emergencia',
      desc: 'Integración de sensores catalíticos e infrarrojos de gas combustible en cuartos de máquinas vinculados a pulsadores de parada de emergencia.',
      icon: Activity,
    },
    {
      title: 'Ensayos No Destructivos (END) y Calificación',
      desc: 'Inspección visual de soldaduras, ensayos de tintas penetrantes y pruebas hidrostáticas/neumáticas de resistencia mecánica y hermeticidad.',
      icon: ShieldCheck,
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
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-[#287A1C] border border-emerald-200">
                <Factory className="w-3.5 h-3.5 text-[#287A1C]" aria-hidden="true" />
                <span>Ingeniería Térmica e Industrial</span>
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-[#263238] leading-tight">
                Redes de Gas Industrial y Comercial
              </h1>
              <p className="text-base sm:text-lg text-[#5B6570] leading-relaxed">
                Soluciones de alta confiabilidad para plantas de producción, factorías, centros comerciales y procesos de combustión con alta demanda térmica en Colombia bajo normas <strong>NTC 3838</strong> y <strong>NTC 4282</strong>.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/contacto?servicio=industrial"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]"
                >
                  <span>Cotizar Proyecto Industrial</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(
                    'Hola COLFGAS, requiero asesoría técnica para una red de gas industrial / estación ERM.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <span>WhatsApp Industrial</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Technical Graphic */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 bg-white">
                <Image
                  src="/images/servicios/gas-industrial-hero.svg"
                  alt="Esquema técnico de estación de regulación ERM y tren de gas para calderas industriales según NTC 3838"
                  width={800}
                  height={480}
                  priority
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
                  <span className="text-[11px] font-semibold text-[#5B6570]">
                    Esquema técnico de estación ERM y tren de válvulas • NTC 3838
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
              <span className="text-xs font-bold uppercase tracking-wider text-[#287A1C]">
                Continuidad Operacional y Cero Fugas
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238]">
                Suministro Seguro de Gas Natural para la Industria Colombiana
              </h2>
              <p className="text-sm sm:text-base text-[#5B6570] leading-relaxed">
                En el entorno industrial, una parada imprevista o una fluctuación en la presión de gas representa pérdidas productivas considerables. En <strong>COLFGAS CONSTRUCCIONES S.A.S.</strong> diseñamos y construimos redes industriales con dimensionamiento redundante, filtrado de partículas y estaciones de regulación que garantizan flujo continuo y presión estable.
              </p>
              <p className="text-sm sm:text-base text-[#5B6570] leading-relaxed">
                Nuestras cuadrillas técnicas están capacitadas para trabajar bajo los estándares de seguridad industrial más estrictos (trabajo en caliente, alturas, espacios confinados) y en estricto cumplimiento de la <strong>NTC 3838</strong>, <strong>NTC 4282</strong> y el código <strong>ASME B31.8</strong>.
              </p>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="leading-relaxed">
                  <strong>Aviso de Enfoque Operativo:</strong> Las soluciones industriales de COLFGAS se aplican exclusivamente a tuberías estacionarias de suministro a quemadores, hornos, calderas y plantas. No instalamos tanques vehiculares, surtidores para vehículos ni servicios automotores.
                </p>
              </div>
            </div>

            {/* Side Card */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#263238] mb-4">
                Especificaciones y Parámetros Técnicos
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#263238]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0 mt-0.5" />
                  <span><strong>Presiones de trabajo:</strong> Media presión (hasta 60 psig) y baja presión regulada según requerimiento del quemador.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0 mt-0.5" />
                  <span><strong>Materiales de red:</strong> Tubería de acero ASTM A53 Gr. B cédula 40 / 80 y polietileno PEAD SDR 11 / SDR 17.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0 mt-0.5" />
                  <span><strong>Uniones certificadas:</strong> Soldadura SMAW / GTAW con calificación de procedimiento (WPS/PQR).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0 mt-0.5" />
                  <span><strong>Protección pasiva:</strong> Recubrimiento epóxico, pintura de seguridad según código de colores (amarillo ocre).</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link
                  href="/contacto?servicio=industrial"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]"
                >
                  <span>Cotizar Proyecto Industrial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Explanatory Diagram: Estación ERM y Doble Línea */}
          <div className="mb-20 rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#287A1C]">
                  Ingeniería de Regulación Continua
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#263238]">
                  Skid ERM con Doble Tren de Regulación
                </h2>
                <p className="text-sm text-[#5B6570] leading-relaxed">
                  Para plantas donde un apagón térmico resulta inaceptable, implementamos estaciones ERM con doble tren en paralelo. Mientras un ramal opera, el ramal alterno permanece en reserva activa, permitiendo cambiar cartuchos de filtro y calibrar diafragmas en caliente.
                </p>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-[#5B6570] space-y-1.5">
                  <p className="font-bold text-[#263238]">Dispositivos de Seguridad Integrados:</p>
                  <p>• Válvula OPSO (Over Pressure Shut-Off) de disparo ultrarrápido ante sobrepresiones de red.</p>
                  <p>• Válvula de alivio por venteo controlado hacia zona segura exterior.</p>
                  <p>• Doble electroválvula clase A con prueba de estanqueidad previa al encendido del quemador.</p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <Image
                    src="/images/servicios/esquema-estacion-erm.svg"
                    alt="Diagrama de flujo técnico de una estación de regulación y medición ERM industrial de doble línea"
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Capacidades Industriales
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-1">
                Ingeniería de Combustión y Transporte
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industrialCapabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#287A1C] flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-base text-[#263238] mb-2">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive FAQ Accordion */}
          <div className="mb-20">
            <FaqAccordion
              items={FAQS_INDUSTRIAL}
              title="Preguntas Frecuentes sobre Gas Industrial"
              description="Detalles sobre presiones de operación, estaciones ERM, calderas y mantenimiento en plantas de manufactura."
            />
          </div>

          {/* Bottom Help */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#F4F7F8] border border-slate-200 text-[#263238] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#263238]">
                ¿Planeas una ampliación de caldera o una nueva línea de gas en tu planta?
              </h3>
              <p className="text-[#5B6570] text-sm mt-1 max-w-xl">
                Evaluamos tu consumo térmico en BTU/h o m³/h y estructuramos la red óptima para optimizar costos de combustible.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] flex-shrink-0 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]"
            >
              <span>Solicitar Asesoría Industrial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
