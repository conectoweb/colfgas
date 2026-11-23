import Link from 'next/link';
import { Home } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F4F7F8] px-4 py-16">
      <div className="max-w-xl w-full text-center bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 mb-4">
          Error 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#263238] tracking-normal">
          Página No Encontrada
        </h1>

        <p className="mt-3 text-sm sm:text-base text-[#5B6570] leading-relaxed">
          Lo sentimos, la ruta a la que intentas acceder no existe o fue trasladada. Puedes regresar a la página principal o consultar nuestros servicios de redes de gas.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>

          <Link
            href="/servicios"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#263238] bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <span>Ver Servicios</span>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-[#5B6570]">
          ¿Necesitas asistencia técnica inmediata? Llámanos al{' '}
          <a
            href={`tel:${COMPANY_INFO.phones[0].value}`}
            className="font-bold text-[#0066B3] hover:underline"
          >
            {COMPANY_INFO.phones[0].display}
          </a>
        </div>
      </div>
    </div>
  );
}
