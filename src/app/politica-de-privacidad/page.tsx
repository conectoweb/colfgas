import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import { getBreadcrumbJsonLd } from '@/lib/seo';
import { ShieldCheck, AlertCircle } from 'lucide-react';
import { ClientConfirmationBadge } from '@/components/ClientConfirmationBadge';

export const metadata: Metadata = {
  title: 'Política de Tratamiento de Datos Personales | COLFGAS',
  description:
    'Política de Tratamiento y Protección de Datos Personales de COLFGAS CONSTRUCCIONES S.A.S., en cumplimiento de la Ley 1581 de 2012 de Colombia.',
  alternates: {
    canonical: '/politica-de-privacidad',
  },
};

export default function PoliticaPrivacidadPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Política de Privacidad', url: '/politica-de-privacidad' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-[#F4F7F8] border-b border-slate-200 py-12 sm:py-16 text-[#263238]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#0066B3] border border-sky-200 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0066B3]" aria-hidden="true" />
            <span>Marco Legal Colombiano</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#263238] tracking-normal">
            Política de Tratamiento de Datos Personales
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#5B6570] leading-relaxed">
            En cumplimiento de la Ley 1581 de 2012 y el Decreto Reglamentario 1377 de 2013 de la República de Colombia.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Client review notice */}
          <div className="mb-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="font-bold text-amber-900">Aviso para el Cliente:</strong> El presente texto constituye un modelo técnico-jurídico estándar para la captación de información a través del formulario de contacto y cotización. Se recomienda que el asesor jurídico de <strong>COLFGAS CONSTRUCCIONES S.A.S.</strong> revise y emita su aprobación final.
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-[#263238] leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-[#263238] mb-3">1. Identificación del Responsable del Tratamiento</h2>
              <p className="text-[#5B6570]">
                <strong className="text-[#263238]">Razón Social:</strong> {COMPANY_INFO.legalName}<br />
                <strong className="text-[#263238]">Nombre Comercial:</strong> {COMPANY_INFO.tradeName}<br />
                <strong className="text-[#263238]">NIT:</strong> {COMPANY_INFO.nit} <ClientConfirmationBadge label="Confirmar NIT" /><br />
                <strong className="text-[#263238]">Domicilio:</strong> {COMPANY_INFO.address}<br />
                <strong className="text-[#263238]">Correo Electrónico de Contacto:</strong> {COMPANY_INFO.email} <ClientConfirmationBadge label="Confirmar Correo" /><br />
                <strong className="text-[#263238]">Línea de Atención:</strong> {COMPANY_INFO.phones[0].display}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#263238] mb-3">2. Marco Normativo y Principios Rectores</h2>
              <p className="text-[#5B6570]">
                Esta política se rige por los principios consagrados en el artículo 4 de la Ley 1581 de 2012: principio de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad en el manejo de bases de datos de personas naturales y jurídicas.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#263238] mb-3">3. Finalidades de la Recolección de Datos</h2>
              <p className="text-[#5B6570]">
                Los datos personales suministrados voluntariamente por los usuarios a través del formulario de contacto, llamadas telefónicas o mensajes de WhatsApp serán utilizados exclusivamente para los siguientes propósitos:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[#5B6570]">
                <li>Responder a requerimientos comerciales, preguntas y solicitudes de cotización de proyectos de gas residencial, comercial o industrial.</li>
                <li>Elaborar propuestas técnicas, memorias de dimensionamiento y presupuestos de obra civil y redes de tuberías.</li>
                <li>Contactar al interesado por vía telefónica, correo electrónico o mensajería instantánea para coordinar visitas técnicas en sitio.</li>
                <li>Cumplir con las obligaciones legales, tributarias y contractuales derivadas de la prestación de los servicios contratados.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#263238] mb-3">4. Derechos de los Titulares (Habeas Data)</h2>
              <p className="text-[#5B6570]">
                De conformidad con el artículo 8 de la Ley 1581 de 2012, el titular de los datos personales tiene derecho a:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[#5B6570]">
                <li>Conocer, actualizar y rectificar sus datos personales frente a COLFGAS CONSTRUCCIONES S.A.S.</li>
                <li>Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.</li>
                <li>Ser informado por COLFGAS, previa solicitud, respecto del uso que se le ha dado a sus datos personales.</li>
                <li>Revocar la autorización y/o solicitar la supresión del dato cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales.</li>
                <li>Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#263238] mb-3">5. Procedimiento para Consultas y Reclamos</h2>
              <p className="text-[#5B6570]">
                Para ejercer sus derechos de consulta, actualización o supresión de datos, el titular puede remitir una comunicación escrita al correo electrónico{' '}
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#0066B3] font-semibold underline hover:text-[#005291]">
                  {COMPANY_INFO.email}
                </a>{' '}
                indicando en el asunto "Habeas Data - Solicitud de Titular", adjuntando fotocopia de su documento de identidad y la descripción clara de la solicitud. Las consultas serán atendidas en un término máximo de diez (10) días hábiles y los reclamos en quince (15) días hábiles.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#263238] mb-3">6. Vigencia de la Base de Datos</h2>
              <p className="text-[#5B6570]">
                Los datos personales se conservarán durante el tiempo que sea razonable y necesario para cumplir con las finalidades del tratamiento y las exigencias de conservación legal, fiscal y comercial establecidas por la legislación colombiana.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
