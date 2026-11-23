import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ClientConfirmationBadgeProps {
  label?: string;
  tooltip?: string;
  variant?: 'inline' | 'banner' | 'card';
  className?: string;
}

export function ClientConfirmationBadge({
  label = 'Confirmar con el cliente',
  tooltip,
  variant = 'inline',
  className = '',
}: ClientConfirmationBadgeProps) {
  if (variant === 'banner') {
    return (
      <div
        role="note"
        aria-label="Nota de validación pendiente"
        className={`bg-amber-50 border border-amber-200 text-amber-900 rounded-lg p-3 text-xs flex items-start gap-2.5 ${className}`}
      >
        <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div className="flex-1">
          <span className="font-semibold uppercase tracking-wider text-[11px] text-amber-800 block">
            [Dato por Validar con COLFGAS]
          </span>
          <p className="mt-0.5 text-amber-900/90 leading-relaxed">{label}</p>
          {tooltip && <p className="mt-1 text-amber-700/80 text-[11px]">{tooltip}</p>}
        </div>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-medium border border-amber-300 ${className}`}
        title={tooltip || label}
      >
        <AlertCircle className="w-3.5 h-3.5 text-amber-700" aria-hidden="true" />
        <span>{label}</span>
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-100/90 text-amber-900 border border-amber-200 ${className}`}
      title={tooltip || 'Información sujeta a validación final con el cliente'}
    >
      <AlertCircle className="w-3 h-3 text-amber-700 flex-shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}
