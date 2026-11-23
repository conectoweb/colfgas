import React from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Building2,
  Factory,
  CheckCircle2,
  Phone,
  MessageCircle,
  Wrench,
  AlertTriangle,
  ExternalLink,
  MapPin,
  Check,
  FileCheck2,
  ArrowDown,
  Layers,
  ChevronRight,
} from 'lucide-react';
import {
  COMPANY_INFO,
  SERVICES_CATALOG,
  RESIDENTIAL_SOLUTION,
  INDUSTRIAL_SOLUTION,
  PROJECTS_GALLERY,
  WHY_CHOOSE_US,
  FAQS_LANDING,
} from '@/lib/constants';
import { FaqAccordion } from '@/components/FaqAccordion';

export default function LandingPage() {
  return (
    <>
      {/* =========================================================================
          SECCIÓN 1: INICIO (HERO)
          ========================================================================= */}
      <section
        id="inicio"
        className="relative bg-gradient-to-b from-[#F4F7F8] via-white to-[#F4F7F8] border-b border-slate-200/80 text-[#263238] pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden"
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25px 25px, #0066B3 1.5%, transparent 0%), radial-gradient(circle at 75px 75px, #43BE24 1.5%, transparent 0%)',
            backgroundSize: '80px 80px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Value Proposition & Vanti Badge */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              {/* Sello Certificada por Vanti */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-bold text-[#287A1C] shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#287A1C]" aria-hidden="true" />
                <span>{COMPANY_INFO.vantiCertification}</span>
              </div>

              {/* H1 Semántico Principal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal text-[#263238] leading-tight">
                Redes de Gas para Construcciones{' '}
                <span className="text-[#0066B3]">Residenciales</span> e{' '}
                <span className="text-[#287A1C]">Industriales</span>
              </h1>

              {/* Propuesta de Valor */}
              <p className="text-base sm:text-lg md:text-xl text-[#5B6570] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Soluciones integrales de <strong>construcción</strong>, <strong>instalación</strong> y{' '}
                <strong>mantenimiento</strong> de redes de gas natural y GLP en Colombia. Calidad
                técnica respaldada con certificación de Vanti y estricta normativa de seguridad.
              </p>

              {/* Exclusion Note: No Gas Vehicular */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-[#5B6570] shadow-sm flex items-start gap-2.5 max-w-2xl mx-auto lg:mx-0 text-left">
                <ShieldCheck className="w-5 h-5 text-[#287A1C] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="leading-relaxed">
                  <strong className="text-[#263238]">Especialidad en Edificaciones:</strong> Trabajamos
                  exclusivamente con redes de gas fijas para construcciones residenciales e industriales.{' '}
                  <em>No ofrecemos gas para vehículos ni estaciones de servicio (GNCV).</em>
                </p>
              </div>

              {/* Botones Visibles: WhatsApp y Llamar */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a
                  href={COMPANY_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] shadow-md hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-emerald-400 min-h-[48px]"
                  aria-label="Escribir por WhatsApp a COLFGAS al 320 827 1724"
                >
                  <MessageCircle className="w-5 h-5 text-[#263238]" aria-hidden="true" />
                  <span>Escribir por WhatsApp</span>
                </a>

                <a
                  href={COMPANY_INFO.phoneCallUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-[#0066B3] bg-white hover:bg-slate-50 border-2 border-[#0066B3] shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sky-300 min-h-[48px]"
                  aria-label={`Llamar a COLFGAS al ${COMPANY_INFO.phoneDisplay}`}
                >
                  <Phone className="w-5 h-5 text-[#0066B3]" aria-hidden="true" />
                  <span>Llamar: {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div className="p-2.5 rounded-lg bg-white/70 border border-slate-200/80">
                  <div className="text-base sm:text-lg font-bold text-[#287A1C] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#287A1C]" aria-hidden="true" />
                    <span>Certificado Vanti</span>
                  </div>
                  <div className="text-xs text-[#5B6570]">Distribuidora Oficial</div>
                </div>

                <div className="p-2.5 rounded-lg bg-white/70 border border-slate-200/80">
                  <div className="text-base sm:text-lg font-bold text-[#0066B3]">NTC 2505 / 3838</div>
                  <div className="text-xs text-[#5B6570]">Normas Técnicas Colombia</div>
                </div>

                <div className="col-span-2 sm:col-span-1 p-2.5 rounded-lg bg-white/70 border border-slate-200/80">
                  <div className="text-base sm:text-lg font-bold text-[#263238]">100% Hermético</div>
                  <div className="text-xs text-[#5B6570]">Seguridad y Cero Fugas</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Technical Illustration */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <div className="relative">
                  <Image
                    src="/images/servicios/gas-servicios-hero.svg"
                    alt="Esquema técnico de infraestructura de redes de gas residencial e industrial de COLFGAS CONSTRUCCIONES"
                    width={800}
                    height={480}
                    priority
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-[#287A1C] shadow-md border border-emerald-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#287A1C]" aria-hidden="true" />
                      <span>Certificado por Vanti</span>
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
                  <p className="text-xs font-semibold text-[#263238]">
                    Construcción, instalación y mantenimiento de redes de gas
                  </p>
                  <p className="text-[11px] text-[#5B6570] mt-0.5">
                    Bogotá D.C. • Sede: {COMPANY_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 2: SERVICIOS
          ========================================================================= */}
      <section id="servicios" className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#0066B3] border border-sky-200 mb-3">
              Portafolio Técnico Confirmado
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#263238]">
              Nuestros Servicios de Redes de Gas
            </h2>
            <p className="mt-3 text-base text-[#5B6570] leading-relaxed">
              En COLFGAS CONSTRUCCIONES S.A.S. cubrimos las tres etapas esenciales de la red de gas
              para edificaciones de vivienda y plantas industriales con respaldo de Vanti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_CATALOG.map((service) => (
              <article
                key={service.id}
                className="group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#0066B3]/40 transition-all duration-200 flex flex-col justify-between p-6 sm:p-7"
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 w-12 h-12 rounded-xl bg-sky-50 text-[#0066B3] flex items-center justify-center border border-sky-100">
                      {service.id === 'construccion-redes' && (
                        <Building2 className="w-6 h-6 text-[#0066B3]" aria-hidden="true" />
                      )}
                      {service.id === 'instalacion-redes' && (
                        <Wrench className="w-6 h-6 text-[#287A1C]" aria-hidden="true" />
                      )}
                      {service.id === 'mantenimiento-redes' && (
                        <ShieldCheck className="w-6 h-6 text-[#007afd]" aria-hidden="true" />
                      )}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-[#263238]">
                      Vivienda e Industria
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#263238] group-hover:text-[#0066B3] transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#5B6570] leading-relaxed mb-5">
                    {service.summary}
                  </p>

                  <div className="mb-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-semibold text-[#263238]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#287A1C]" aria-hidden="true" />
                    <span>{service.normativa}</span>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#263238]">
                        <Check className="w-4 h-4 text-[#287A1C] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
                  <a
                    href={COMPANY_INFO.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#263238]" aria-hidden="true" />
                    <span>Cotizar por WhatsApp</span>
                  </a>
                  <a
                    href={COMPANY_INFO.phoneCallUrl}
                    className="inline-flex items-center justify-center py-2.5 px-3 rounded-lg text-xs font-semibold text-[#0066B3] bg-sky-50 hover:bg-sky-100 transition-colors"
                    aria-label={`Llamar para cotizar ${service.title}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0066B3]" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 3: SOLUCIONES RESIDENCIALES E INDUSTRIALES
          ========================================================================= */}
      <section id="soluciones" className="py-20 bg-[#F4F7F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-[#287A1C] border border-emerald-200 mb-3">
              Atención Técnica Especializada
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#263238]">
              Soluciones Residenciales e Industriales
            </h2>
            <p className="mt-3 text-base text-[#5B6570] leading-relaxed">
              Comprende el alcance de nuestras soluciones para cada sector. Tratamos cada edificación
              con la ingeniería correspondiente y sin involucrarnos en gas automotor.
            </p>
          </div>

          <div className="space-y-16">
            {/* Solución 1: Residencial */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0066B3] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                    <Building2 className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />
                    <span>Sector Construcción Habitacional</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#263238]">
                    {RESIDENTIAL_SOLUTION.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#0066B3]">
                    {RESIDENTIAL_SOLUTION.subtitle}
                  </p>

                  <p className="text-sm text-[#5B6570] leading-relaxed">
                    {RESIDENTIAL_SOLUTION.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#263238] mb-3">
                      Alcance del Servicio Residencial:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {RESIDENTIAL_SOLUTION.scopeItems.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#263238]">
                          <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={COMPANY_INFO.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-[#263238]" aria-hidden="true" />
                      <span>Escribir por WhatsApp</span>
                    </a>

                    <a
                      href={COMPANY_INFO.phoneCallUrl}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#0066B3] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all"
                    >
                      <Phone className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />
                      <span>Llamar: {COMPANY_INFO.phoneDisplay}</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
                    <Image
                      src={RESIDENTIAL_SOLUTION.imageSrc}
                      alt={RESIDENTIAL_SOLUTION.imageAlt}
                      width={800}
                      height={480}
                      loading="lazy"
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
                      <span className="text-[11px] font-semibold text-[#5B6570]">
                        Esquema técnico representativo residencial • NTC 2505
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solución 2: Industrial */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#287A1C] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <Factory className="w-4 h-4 text-[#287A1C]" aria-hidden="true" />
                    <span>Sector Construcción Industrial y Productivo</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#263238]">
                    {INDUSTRIAL_SOLUTION.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#287A1C]">
                    {INDUSTRIAL_SOLUTION.subtitle}
                  </p>

                  <p className="text-sm text-[#5B6570] leading-relaxed">
                    {INDUSTRIAL_SOLUTION.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#263238] mb-3">
                      Alcance del Servicio Industrial:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {INDUSTRIAL_SOLUTION.scopeItems.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#263238]">
                          <CheckCircle2 className="w-4 h-4 text-[#287A1C] flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={COMPANY_INFO.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-[#263238]" aria-hidden="true" />
                      <span>Escribir por WhatsApp</span>
                    </a>

                    <a
                      href={COMPANY_INFO.phoneCallUrl}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#0066B3] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all"
                    >
                      <Phone className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />
                      <span>Llamar: {COMPANY_INFO.phoneDisplay}</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
                    <Image
                      src={INDUSTRIAL_SOLUTION.imageSrc}
                      alt={INDUSTRIAL_SOLUTION.imageAlt}
                      width={800}
                      height={480}
                      loading="lazy"
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
                      <span className="text-[11px] font-semibold text-[#5B6570]">
                        Esquema técnico representativo industrial • NTC 3838
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 4: PROYECTOS (ESQUEMAS TÉCNICOS TRANSPARENTES)
          ========================================================================= */}
      <section id="proyectos" className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-[#263238] border border-slate-200 mb-3">
              Registros y Esquemas de Obra
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#263238]">
              Proyectos Representativos
            </h2>
            <p className="mt-3 text-base text-[#5B6570] leading-relaxed">
              Presentamos esquemas técnicos y el alcance de nuestras obras en los sectores residencial
              e industrial, respetando la transparencia con el cliente.
            </p>
          </div>

          {/* Transparent Notice about Client Photos */}
          <div className="mb-12 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 max-w-4xl mx-auto flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm">
              <strong className="font-bold text-amber-900">Política de Transparencia de Imágenes:</strong>{' '}
              COLFGAS CONSTRUCCIONES S.A.S. muestra únicamente trabajos reales autorizados. En tanto el
              cliente formalice la entrega o autorización de sus registros fotográficos de obra, las
              fichas a continuación presentan esquemas técnicos provisionales claramente identificados,
              sin usar fotos de archivo de terceros haciéndolas pasar por proyectos propios.
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS_GALLERY.map((project) => (
              <article
                key={project.id}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Visual Blueprint Schema Header */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-[#263238] via-[#1E293B] to-[#334155] p-5 flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white border border-white/30">
                        {project.category}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-400 text-slate-900">
                        Esquema Provisional
                      </span>
                    </div>

                    <div className="text-center my-auto py-2">
                      <div className="w-10 h-10 mx-auto mb-1.5 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        <Layers className="w-5 h-5 text-[#43BE24]" aria-hidden="true" />
                      </div>
                      <p className="text-xs uppercase tracking-wider text-slate-200 font-bold">
                        Esquema Técnico
                      </p>
                    </div>

                    <div className="text-xs text-slate-300 font-medium">
                      {project.sectorLabel}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#263238] mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#0066B3] font-semibold mb-3">
                      <MapPin className="w-3.5 h-3.5 text-[#0066B3]" aria-hidden="true" />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-[#5B6570]">
                      <span className="font-bold text-[#263238] block mb-0.5">Alcance Técnico:</span>
                      <span>{project.scope}</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-[11px] text-[#5B6570] text-center">
                  {project.confirmationDetails}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 5: POR QUÉ ELEGIRNOS
          ========================================================================= */}
      <section id="por-que-elegirnos" className="py-20 bg-[#F4F7F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-[#287A1C] border border-emerald-200 mb-3">
              Confianza y Respaldo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#263238]">
              ¿Por Qué Elegir a COLFGAS CONSTRUCCIONES?
            </h2>
            <p className="mt-3 text-base text-[#5B6570] leading-relaxed">
              Basamos nuestra reputación en hechos comprobados: certificación oficial de Vanti,
              dedicación exclusiva a construcciones residenciales e industriales y rigurosa seguridad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                    {item.iconName === 'ShieldCheck' && (
                      <ShieldCheck className="w-6 h-6 text-[#287A1C]" aria-hidden="true" />
                    )}
                    {item.iconName === 'Building2' && (
                      <Building2 className="w-6 h-6 text-[#0066B3]" aria-hidden="true" />
                    )}
                    {item.iconName === 'Wrench' && (
                      <Wrench className="w-6 h-6 text-[#007afd]" aria-hidden="true" />
                    )}
                    {item.iconName === 'CheckCircle2' && (
                      <CheckCircle2 className="w-6 h-6 text-[#287A1C]" aria-hidden="true" />
                    )}
                  </div>

                  {item.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-[#287A1C] border border-emerald-200 mb-2 inline-block">
                      {item.badge}
                    </span>
                  )}

                  <h3 className="text-lg font-bold text-[#263238] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 6: PREGUNTAS FRECUENTES
          ========================================================================= */}
      <section id="preguntas-frecuentes" className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            items={FAQS_LANDING}
            title="Preguntas Frecuentes sobre COLFGAS"
            description="Respuestas claras formuladas exclusivamente con información confirmada sobre nuestros servicios, certificación y canales de atención."
          />
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 7: CONTACTO (SIN CORREO NI FORMULARIO)
          ========================================================================= */}
      <section id="contacto" className="py-20 bg-[#F4F7F8] text-[#263238]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-[#287A1C] border border-emerald-200 mb-3">
              Atención Directa al Cliente
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#263238] leading-tight">
              Comunícate con COLFGAS CONSTRUCCIONES S.A.S.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#5B6570] max-w-2xl mx-auto leading-relaxed">
              Empresa certificada por Vanti. Habla directamente con nuestro equipo para asesorarte
              en la construcción, instalación o mantenimiento de tus redes de gas.
            </p>
          </div>

          {/* Direct Contact Cards (WhatsApp, Llamada, Dirección) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#287A1C] flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#287A1C]">
                  Atención Inmediata
                </span>
                <h3 className="text-lg font-bold text-[#263238] mt-1">Escribir por WhatsApp</h3>
                <p className="text-xs text-[#5B6570] mt-1.5 leading-relaxed">
                  Envíanos tu consulta técnica o solicitud de cotización al número oficial.
                </p>
                <div className="mt-3 text-sm font-bold text-[#263238]">
                  {COMPANY_INFO.phoneDisplay}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={COMPANY_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] shadow-sm transition-all"
                  aria-label="Abrir chat de WhatsApp con COLFGAS al 320 827 1724"
                >
                  <MessageCircle className="w-4 h-4 text-[#263238]" aria-hidden="true" />
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Llamada Telefónica Card */}
            <div className="p-6 rounded-2xl bg-white border border-sky-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0066B3] flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                  Línea Telefónica
                </span>
                <h3 className="text-lg font-bold text-[#263238] mt-1">Llamada Directa</h3>
                <p className="text-xs text-[#5B6570] mt-1.5 leading-relaxed">
                  Comunícate directamente por voz con nuestros asesores para atención de obra.
                </p>
                <div className="mt-3 text-sm font-bold text-[#263238]">
                  {COMPANY_INFO.phoneDisplay}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={COMPANY_INFO.phoneCallUrl}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#0066B3] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all"
                  aria-label={`Llamar por teléfono al ${COMPANY_INFO.phoneDisplay}`}
                >
                  <Phone className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />
                  <span>Llamar: {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Dirección Física Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#263238] flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#0066B3]" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5B6570]">
                  Sede Principal
                </span>
                <h3 className="text-lg font-bold text-[#263238] mt-1">Dirección Confirmada</h3>
                <p className="text-xs text-[#5B6570] mt-1.5 leading-relaxed">
                  Sede oficial de operaciones en la ciudad de Bogotá, Colombia.
                </p>
                <div className="mt-3 text-sm font-bold text-[#263238]">
                  {COMPANY_INFO.address}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#263238] bg-slate-100 hover:bg-slate-200 transition-all"
                  aria-label="Ver ubicación de COLFGAS en Google Maps con dirección exacta"
                >
                  <span>Ver en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Banner de Cierre con Vanti y Botones de Acción */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-bold text-[#287A1C]">
              <CheckCircle2 className="w-4 h-4 text-[#287A1C]" aria-hidden="true" />
              <span>{COMPANY_INFO.vantiCertification}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#263238]">
              ¿Tienes una Obra Residencial o Proyecto Industrial?
            </h3>

            <p className="text-sm sm:text-base text-[#5B6570] max-w-2xl mx-auto leading-relaxed">
              Comunícate hoy mismo al <strong>{COMPANY_INFO.phoneDisplay}</strong> para recibir
              asesoría especializada de una empresa certificada por Vanti.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={COMPANY_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] shadow-sm transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-emerald-400 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 text-[#263238]" aria-hidden="true" />
                <span>Escribir por WhatsApp</span>
              </a>

              <a
                href={COMPANY_INFO.phoneCallUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-semibold text-[#0066B3] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sky-300 min-h-[48px]"
              >
                <Phone className="w-5 h-5 text-[#0066B3]" aria-hidden="true" />
                <span>Llamar al {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            <div className="pt-4 text-xs text-[#5B6570]">
              Dirección: {COMPANY_INFO.address} • [CONFIRMAR CON COLFGAS: Horarios de atención y NIT]
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
