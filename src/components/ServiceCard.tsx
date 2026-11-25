import React from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/lib/constants';
import { Home, Factory, DraftingCompass, Wrench, HardHat, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { ClientConfirmationBadge } from './ClientConfirmationBadge';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home className="w-7 h-7 text-[#007afd]" aria-hidden="true" />;
      case 'Factory':
        return <Factory className="w-7 h-7 text-[#287A1C]" aria-hidden="true" />;
      case 'DraftingCompass':
        return <DraftingCompass className="w-7 h-7 text-[#007afd]" aria-hidden="true" />;
      case 'Wrench':
        return <Wrench className="w-7 h-7 text-[#007afd]" aria-hidden="true" />;
      case 'HardHat':
        return <HardHat className="w-7 h-7 text-[#D97706]" aria-hidden="true" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-[#007afd]" aria-hidden="true" />;
    }
  };

  return (
    <article
      id={service.id}
      className={`group rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none ${
        featured
          ? 'border-[#0066B3]/30 shadow-md ring-1 ring-[#0066B3]/15'
          : 'border-slate-200/90 shadow-sm hover:border-slate-300'
      }`}
    >
      <div className="p-6 sm:p-8">
        {/* Top Header: Icon & Sector Badge */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center border flex-shrink-0 transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none ${
              service.sector === 'industrial'
                ? 'bg-emerald-50 border-emerald-100'
                : 'bg-sky-50 border-sky-100'
            }`}
          >
            {getIcon(service.iconName)}
          </div>
          <span
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
              service.sector === 'residencial'
                ? 'bg-sky-100 text-[#0066B3]'
                : service.sector === 'industrial'
                ? 'bg-emerald-100 text-[#287A1C]'
                : 'bg-slate-100 text-[#263238]'
            }`}
          >
            {service.sector === 'residencial'
              ? 'Sector Residencial'
              : service.sector === 'industrial'
              ? 'Sector Industrial'
              : 'Residencial / Industrial'}
          </span>
        </div>

        {/* Title & Summary */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#263238] group-hover:text-[#0066B3] transition-colors mb-3">
          {service.title}
        </h3>
        <p className="text-sm text-[#5B6570] leading-relaxed mb-5">
          {service.summary}
        </p>

        {/* Normative pill */}
        <div className="mb-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-[#263238]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#287A1C]" aria-hidden="true" />
          <span>{service.normativa}</span>
        </div>

        {/* Features bullet list */}
        <ul className="space-y-2.5 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#263238]">
              <span className="w-4 h-4 rounded-full bg-emerald-50 text-[#287A1C] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#287A1C] stroke-[3]" aria-hidden="true" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Client Confirmation Note if applicable */}
        {service.needsConfirmation && service.confirmationNote && (
          <div className="mt-4 pt-3 border-t border-slate-100">
            <ClientConfirmationBadge
              label="Alcance pendiente de confirmación formal con el cliente"
              tooltip={service.confirmationNote}
              variant="banner"
            />
          </div>
        )}
      </div>

      {/* Card Action Footer */}
      <div className="px-6 sm:px-8 py-4 bg-slate-50/90 border-t border-slate-100 rounded-b-2xl flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/contacto"
          className="min-h-[44px] inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0066B3] hover:text-[#005291] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] rounded-lg px-2"
          aria-label={`Consultar o cotizar servicio de ${service.title}`}
        >
          <span>Consultar servicio</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform motion-reduce:transform-none" aria-hidden="true" />
        </Link>
        {(service.slug === 'residencial' || service.id === 'construccion-redes') && (
          <Link
            href="/servicios/gas-residencial"
            className="min-h-[44px] inline-flex items-center text-xs font-bold text-[#263238] hover:text-[#0066B3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] rounded-lg px-2"
          >
            Gas residencial →
          </Link>
        )}
        {(service.slug === 'industrial' || service.id === 'instalacion-redes') && (
          <Link
            href="/servicios/gas-industrial"
            className="min-h-[44px] inline-flex items-center text-xs font-bold text-[#263238] hover:text-[#287A1C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#287A1C] rounded-lg px-2"
          >
            Gas industrial →
          </Link>
        )}
        {(service.slug === 'mantenimiento' || service.id === 'mantenimiento-redes') && (
          <Link
            href="/servicios/mantenimiento"
            className="min-h-[44px] inline-flex items-center text-xs font-bold text-[#263238] hover:text-[#0066B3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] rounded-lg px-2"
          >
            Mantenimiento →
          </Link>
        )}
      </div>
    </article>
  );
}
