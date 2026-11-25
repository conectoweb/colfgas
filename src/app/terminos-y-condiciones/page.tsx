import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';
import { getBreadcrumbJsonLd } from '@/lib/seo';
import { FileCheck, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | COLFGAS CONSTRUCCIONES S.A.S.',
  description:
    'Términos y condiciones de uso del sitio web y alcance preliminar de cotizaciones de COLFGAS CONSTRUCCIONES S.A.S.',
  alternates: {
    canonical: '/terminos-y-condiciones',
  },
};

export default function TerminosCondicionesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Términos y Condiciones', url: '/terminos-y-condiciones' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-[#F4F7F8] border-b border-slate-200 py-12 sm:py-16 text-[#263238]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-2 text-xs text-[#5B6570]">
              <li>
                <Link href="/" className="hover:text-[#0066B3] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#0066B3]">Términos y Condiciones</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#0066B3] border border-sky-200 mb-3">
            <FileCheck className="w-3.5 h-3.5 text-[#0066B3]" aria-hidden="true" />
            <span>Condiciones Comerciales y de Uso</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#263238] tracking-normal">
            Términos y Condiciones
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#5B6570] leading-relaxed">
            Parámetros de uso de este sitio web y directrices para cotizaciones técnicas de COLFGAS CONSTRUCCIONES S.A.S.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="font-bold text-amber-900">Aviso para el Cliente:</strong> Este texto debe ser revisado y ajustado por el equipo directivo y legal de COLFGAS para reflejar las políticas exactas de validez de cotizaciones, garantías de obra y condiciones de pago.
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-[#263238] leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-[#263238] mb-3">1. Objeto y Alcance del Sitio Web</h2>
              <p className="text-[#5B6570]">
                El presente sitio web tiene como finalidad brindar información sobre los servicios de diseño, ingeniería, construcción, instalación y mantenimiento de redes de gas residencial, comercial e industrial ofrecidos por <strong className="text-[#263238]">COLFGAS CONSTRUCCIONES S.A.S.</strong> en el territorio colombiano.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#263238] mb-3">2. Alcance Preliminar de las Cotizaciones</h2>
              <p className="text-[#5B6570]">
                Los presupuestos, estimaciones o cotizaciones suministradas a través del formulario de contacto o canales de mensajería (WhatsApp) constituyen ofertas preliminares no vinculantes. Toda propuesta técnica definitiva estará sujeta a:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[#5B6570]">
                <li>Inspección técnica o verificación física de condiciones en sitio de la obra.</li>
                <li>Revisión formal de planos arquitectónicos e hidromecánicos aprobados.</li>
                <li>Validación de viabilidad y punto de conexión ante la empresa distribuidora de gas correspondiente.</li>
                <li>Emisión de propuesta económica formal firmada por el representante legal de COLFGAS.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#263238] mb-3">3. Enfoque Exclusivo en Redes Fijas de Gas</h2>
              <p className="text-[#5B6570]">
                COLFGAS CONSTRUCCIONES S.A.S. no presta servicios para automotores, gas vehicular (GNCV), estaciones de servicio de combustible líquido o gaseoso vehicular, ni conversión de motores. Toda solicitud remitida respecto a vehículos no hace parte del objeto comercial de la empresa.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#263238] mb-3">4. Propiedad Intelectual</h2>
              <p className="text-[#5B6570]">
                Todos los contenidos, textos, diagramas, logotipos, marcas comerciales y código fuente presentes en este portal web son propiedad de COLFGAS CONSTRUCCIONES S.A.S. o se utilizan bajo licencia. Queda prohibida su reproducción total o parcial sin autorización previa y por escrito.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#263238] mb-3">5. Ley Aplicable y Jurisdicción</h2>
              <p className="text-[#5B6570]">
                Los presentes términos y condiciones se rigen e interpretan conforme a las leyes de la República de Colombia. Cualquier controversia será dirimida ante las autoridades judiciales competentes de la ciudad de Bogotá D.C.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
