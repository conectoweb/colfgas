'use client';

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

interface WhatsAppButtonProps {
  customMessage?: string;
  className?: string;
}

export function WhatsAppButton({ customMessage, className = '' }: WhatsAppButtonProps) {
  const message = customMessage || COMPANY_INFO.whatsapp.defaultMessage;
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(message)}`;
  const phoneCallUrl = `tel:${COMPANY_INFO.phones[0].value}`;

  return (
    <aside
      aria-label="Acciones de contacto directo"
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none ${className}`}
    >
      {/* Secondary Quick Dial Button (Mobile & Desktop) */}
      <a
        href={phoneCallUrl}
        className="pointer-events-auto inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#0066B3] hover:text-[#005291] hover:bg-slate-50 shadow-md border border-slate-200 transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] focus-visible:ring-offset-2 motion-reduce:transform-none"
        aria-label={`Llamar directamente a ${COMPANY_INFO.phones[0].display}`}
        title={`Llamar a ${COMPANY_INFO.phones[0].display}`}
      >
        <Phone className="w-5 h-5" aria-hidden="true" />
      </a>

      {/* Primary WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group inline-flex items-center gap-2.5 bg-[#43BE24] hover:bg-[#37A51D] text-[#263238] font-bold py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-full shadow-xl transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-emerald-400 border-2 border-white motion-reduce:transform-none min-h-[44px] min-w-[44px]"
        aria-label="Contactar a un asesor de COLFGAS por WhatsApp para cotización"
      >
        <span className="relative flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center flex-shrink-0">
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#263238] fill-current" aria-hidden="true" />
        </span>
        <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider text-[#263238]">
          Asesoría WhatsApp
        </span>
      </a>
    </aside>
  );
}
