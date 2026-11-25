/**
 * Constantes y Datos Oficiales del Sitio Web
 * COLFGAS CONSTRUCCIONES S.A.S.
 *
 * DATOS CONFIRMADOS:
 * - Empresa certificada por Vanti.
 * - Enfoque exclusivo: Redes de gas para construcciones residenciales e industriales.
 *   (NO ofrece gas para vehículos, estaciones de servicio, conversión ni automotores).
 * - Servicios: Construcción, instalación y mantenimiento de redes de gas.
 * - WhatsApp y teléfono: 320 827 1724 (https://wa.me/573208271724 / tel:+573208271724).
 * - Dirección: Calle 90 Sur # 4F-33 Este, Bogotá, Colombia.
 * - Cualquier dato no confirmado formalmente se señala como [CONFIRMAR CON COLFGAS].
 */

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  sector: 'residencial' | 'industrial' | 'ambos';
  summary: string;
  description: string;
  features: string[];
  normativa: string;
  needsConfirmation?: boolean;
  confirmationNote?: string;
  iconName: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  scopeItems: string[];
  normativa: string;
  iconName: string;
  imageSrc: string;
  imageAlt: string;
  targetHref: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residencial' | 'Industrial' | 'Obra Civil';
  sectorLabel: string;
  location: string;
  scope: string;
  description: string;
  isPlaceholder: boolean;
  confirmationDetails: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface DifferentialItem {
  title: string;
  description: string;
  badge?: string;
  iconName: string;
}

export const COMPANY_INFO = {
  legalName: 'COLFGAS CONSTRUCCIONES S.A.S.',
  tradeName: 'COLFGAS',
  vantiCertification: 'Empresa certificada por Vanti',
  vantiShortBadge: 'Certificado por Vanti',
  slogan: 'Ingeniería, Construcción e Instalación de Redes de Gas Residencial e Industrial',
  missionStatement:
    'Empresa especializada en la construcción, instalación y mantenimiento de redes de gas natural y GLP para construcciones residenciales e industriales en Colombia, garantizando máxima seguridad técnica, calidad y respaldo profesional.',
  focusDisclaimer:
    'Especialistas en redes e instalaciones fijas de gas para construcciones residenciales e industriales. No ofrecemos servicios para gas vehicular, conversión de motores ni estaciones de servicio (GNCV).',
  phoneDisplay: '320 827 1724',
  phoneValue: '+573208271724',
  phoneCallUrl: 'tel:+573208271724',
  phones: [
    {
      display: '320 827 1724',
      value: '+573208271724',
      label: 'Línea Directa y WhatsApp',
      isConfirmed: true,
    },
  ],
  whatsapp: {
    number: '573208271724',
    display: '320 827 1724',
    url: 'https://wa.me/573208271724',
    defaultMessage:
      'Hola, me comunico desde el sitio web de COLFGAS CONSTRUCCIONES S.A.S. Deseo solicitar asesoría o cotización para un proyecto de gas.',
    isConfirmed: true,
  },
  address: 'Calle 90 Sur # 4F-33 Este, Bogotá, Colombia',
  isAddressConfirmed: true,
  addressDetails: 'Sede Principal: Calle 90 Sur # 4F-33 Este, Bogotá, Colombia',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Calle+90+Sur+%23+4F-33+Este%2C+Bogot%C3%A1%2C+Colombia',
  coverageArea:
    '',
  hours: '[CONFIRMAR HORARIO EXACTO CON COLFGAS]',
  email: '[CONFIRMAR CON COLFGAS: Correo oficial]',
  socialMedia: {
    facebook: 'https://www.facebook.com/p/Colfgas-Construcciones-SAS-100066587345532/',
    isFacebookConfirmed: true,
  },
};

export const SITE_METADATA = {
  siteName: 'COLFGAS CONSTRUCCIONES S.A.S.',
  defaultTitle:
    'Instalaciones y Reparaciones de Gas Natural en Bogotá | Técnicos Certificados Vanti',
  titleTemplate: '%s | COLFGAS CONSTRUCCIONES S.A.S.',
  defaultDescription:
    '¿Necesitas una red de gas para una vivienda o una industria? En COLFGAS ofrecemos instalaciones de gas natural, reparaciones de gas y mantenimiento en Bogotá y alrededores con técnicos certificados por Vanti.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL &&
    !process.env.NEXT_PUBLIC_SITE_URL.includes('localhost')
      ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
      : 'https://colfgas.com',
  locale: 'es_CO',
};

export const NAV_LINKS = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Nosotros', href: '/nosotros' },
];

export const ABOUT_SUB_LINKS = [
  {
    name: 'Sobre nosotros',
    href: '/nosotros',
    description: 'Empresa especializada en redes de gas para vivienda e industria',
  },
  {
    name: 'Preguntas frecuentes',
    href: '/preguntas-frecuentes',
    description: 'Respuestas a dudas habituales sobre procesos y servicios',
  },
  {
    name: 'Mapa del sitio',
    href: '/mapa-del-sitio',
    description: 'Índice visual y navegable de todas las páginas del sitio',
  },
];

export const SERVICE_SUB_LINKS = [
  {
    name: 'Todos los servicios',
    href: '/servicios',
    description: 'Portafolio integral de redes e ingeniería de gas',
  },
  {
    name: 'Gas residencial',
    href: '/servicios/gas-residencial',
    description: 'Redes y montantes para edificios multifamiliares y vivienda',
  },
  {
    name: 'Gas industrial',
    href: '/servicios/gas-industrial',
    description: 'Líneas y estaciones de regulación para industrias y comercio',
  },
  {
    name: 'Mantenimiento de redes',
    href: '/servicios/mantenimiento',
    description: 'Mantenimiento de sistemas de gas y pruebas de hermeticidad',
  },
];

/**
 * SERVICIOS CONFIRMADOS:
 * Construcción, instalación y mantenimiento de redes de gas para viviendas e industria.
 */
export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: 'construccion-redes',
    slug: 'construccion',
    title: 'Construcción de Redes de Gas Natural',
    shortTitle: 'Construcción de Redes',
    sector: 'ambos',
    summary:
      'Construcción especializada de redes matrices subterráneas, acometidas principales y montantes verticales en Bogotá y alrededores para proyectos habitacionales y plantas industriales.',
    description:
      '¿Inicias un proyecto de construcción en Bogotá o la Sabana? Diseñamos y construimos redes matrices de gas natural con materiales de máxima resistencia (PEAD y acero). Coordinamos acometidas principales y montantes para que tu obra reciba la aprobación y conexión de Vanti a tiempo y sin demoras.',
    features: [
      'Construcción de redes matrices en polietileno (PEAD) y acero certificado',
      'Trazado y canalización ágil de acometidas desde la red pública de distribución',
      'Montantes verticales estructurados para edificios residenciales e industriales',
      'Obras civiles complementarias: zanjado técnico, cruces y reposición de acabados',
      'Aprobación garantizada y cumplimiento estricto de lineamientos Vanti',
    ],
    normativa: 'Residencial e Industrial',
    iconName: 'Building2',
  },
  {
    id: 'instalacion-redes',
    slug: 'instalacion',
    title: 'Instalaciones de Gas Natural Certificadas',
    shortTitle: 'Instalaciones Gas Natural',
    sector: 'ambos',
    summary:
      'Instaladores de gas certificados para redes internas, centros de medición y conexión técnica de gasodomésticos en viviendas, comercios e industrias en Bogotá.',
    description:
      'Pon la instalación de gas natural de tu inmueble en manos de instaladores certificados. Realizamos el tendido de tuberías homologadas (PE-AL-PE, cobre y acero al carbono), montaje de baterías de medidores unificados y puntos seguros para estufas, calentadores, hornos y calderas con pruebas de hermeticidad certificadas para garantizar cero fugas.',
    features: [
      'Instalación de redes internas empotradas y a la vista con materiales certificados',
      'Montaje de gabinetes y centros de medición unificados para copropiedades',
      'Instalación de estaciones de regulación (ERM) para media y baja presión',
      'Conexión y servicio técnico para puntos de gasodomésticos en Bogotá',
      'Pruebas de hermeticidad con manómetros certificados para habilitación inmediata',
    ],
    normativa: 'Vivienda y Comercio',
    iconName: 'Wrench',
  },
  {
    id: 'mantenimiento-redes',
    slug: 'mantenimiento',
    title: 'Reparaciones y Mantenimiento de Gas Natural',
    shortTitle: 'Reparaciones de Gas',
    sector: 'ambos',
    summary:
      'Servicio técnico y reparaciones de gas en Bogotá y municipios aledaños. Detección rápida de fugas, adecuación técnica y pruebas de hermeticidad con técnicos de gas certificados.',
    description:
      '¿Problemas de fuga, olor a gas, baja presión o suspensión del servicio? Nuestro equipo de técnicos en gas natural atiende reparaciones de gas urgentes y mantenimiento preventivo en Bogotá y municipios vecinos. Diagnosticamos con equipos de alta precisión y dejamos tu red 100% segura y lista para inspección.',
    features: [
      'Reparación urgente de fugas y pruebas de hermeticidad manométricas',
      'Mantenimiento preventivo en estaciones de regulación, medidores y tuberías',
      'Sustitución inmediata de válvulas de corte, reguladores y accesorios desgastados',
      'Servicio técnico para revisión y adecuación de puntos de gasodomésticos en Bogotá',
      'Preparación integral de instalaciones para certificación y reconexión ante Vanti',
    ],
    normativa: 'Inspección y Mantenimiento',
    iconName: 'ShieldCheck',
  },
];

/**
 * SOLUCIONES SEPARADAS: RESIDENCIALES E INDUSTRIALES
 */
export const RESIDENTIAL_SOLUTION: SolutionItem = {
  id: 'solucion-residencial',
  title: 'Instalaciones de Gas Residencial en Bogotá y Alrededores',
  subtitle: 'Edificios multifamiliares, torres de apartamentos y conjuntos residenciales en Bogotá y la Sabana',
  description:
    '¿Estás desarrollando un proyecto de vivienda o necesitas adecuar la red de gas de una copropiedad? En COLFGAS construimos e instalamos redes de gas seguras, montantes verticales y centros de medición con aprobación asegurada ante Vanti. Te garantizamos cero fugas, entregas a tiempo y tranquilidad absoluta para cada hogar.',
  scopeItems: [
    'Acometidas desde la red pública hasta el límite de la copropiedad',
    'Baterías y centros de medición unificados con cerraduras reglamentarias',
    'Montantes verticales canalizadas por ductos técnicos exclusivos',
    'Redes internas en tubería PE-AL-PE y cobre para estufas y calentadores',
    'Cálculo y adecuación de ventilaciones reglamentarias de recintos',
    'Pruebas de hermeticidad certificadas previas al suministro',
  ],
  normativa: 'Estándares Técnicos Vanti',
  iconName: 'Home',
  imageSrc: '/images/galeria/gran-banco-de-medidores-de-gas.webp',
  imageAlt: 'Batería centralizada de medidores de gas natural en gabinete técnico para edificación residencial',
  targetHref: '/servicios/gas-residencial',
};

export const INDUSTRIAL_SOLUTION: SolutionItem = {
  id: 'solucion-industrial',
  title: 'Redes de Gas e Instalaciones Industriales en Bogotá y Sabana',
  subtitle: 'Plantas de producción, fábricas, calderas, hornos y centros comerciales',
  description:
    'Mantén tu operación industrial produciendo sin interrupciones ni riesgos. Diseñamos e instalamos líneas de suministro de gas de alto flujo en acero soldado y polietileno PEAD con estaciones de regulación ERM. Instaladores de gas certificados para garantizar potencia constante, máxima eficiencia y seguridad en Bogotá y parques industriales aledaños.',
  scopeItems: [
    'Líneas de suministro en acero al carbón soldado y polietileno PEAD',
    'Montaje de Estaciones de Regulación y Medición (ERM) primaria y secundaria',
    'Trenes de gas con electroválvulas y sistemas de corte automático OPSO',
    'Conexión técnica para alimentación de calderas de vapor, hornos y secadores',
    'Integración de sensores de detección de mezclas explosivas y parada de emergencia',
    'Ensayos no destructivos e inspección técnica de uniones soldadas',
  ],
  normativa: 'Ingeniería y Seguridad Industrial',
  iconName: 'Factory',
  imageSrc: '/images/galeria/corredor-de-obra-con-tuberias-amarillas.webp',
  imageAlt: 'Tendido de tuberías de gas en corredor técnico de obra para sector industrial y comercial',
  targetHref: '/servicios/gas-industrial',
};

/**
 * PROYECTOS: Esquemas representativos provisionales
 * (No se presentan fotografías de archivo como obras reales de COLFGAS)
 */
export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: 'proyecto-1',
    title: 'Red Matriz y Centros de Medición para Edificio Residencial Multifamiliar',
    category: 'Residencial',
    sectorLabel: 'Sector Residencial Multifamiliar',
    location: 'Bogotá D.C. [CONFIRMAR CON COLFGAS]',
    scope: 'Construcción de acometida, montantes verticales y batería centralizada de medidores',
    description:
      'Registro técnico documental de instalación de gas natural para unidades de vivienda multifamiliar, con pruebas de hermeticidad y máxima seguridad operativa.',
    isPlaceholder: false,
    confirmationDetails:
      'Ilustración técnica: Batería centralizada de medidores y red matriz residencial',
    imageSrc: '/images/proyectos/proyecto-residencial-multifamiliar.jpg',
    imageAlt: 'Batería centralizada de medidores de gas natural en gabinete técnico residencial',
  },
  {
    id: 'proyecto-2',
    title: 'Línea de Suministro y Estación ERM para Planta Industrial',
    category: 'Industrial',
    sectorLabel: 'Sector Industrial de Manufactura',
    location: 'Cundinamarca [CONFIRMAR CON COLFGAS]',
    scope: 'Tendido de tubería de acero soldado, estación de regulación ERM y tren de gas para calderas',
    description:
      'Registro técnico de suministro de gas en media presión para procesos térmicos industriales continuos con sistemas automáticos de seguridad.',
    isPlaceholder: false,
    confirmationDetails:
      'Ilustración técnica: Estación ERM y tren de regulación para planta industrial',
    imageSrc: '/images/proyectos/proyecto-industrial-erm.jpg',
    imageAlt: 'Estación de regulación y medición ERM para planta industrial de manufactura',
  },
  {
    id: 'proyecto-3',
    title: 'Mantenimiento Preventivo y Pruebas de Hermeticidad en Red de Gas',
    category: 'Residencial',
    sectorLabel: 'Sector Habitacional / Mantenimiento',
    location: 'Bogotá D.C. [CONFIRMAR CON COLFGAS]',
    scope: 'Inspección de estanqueidad, recambio de reguladores y adecuación técnica',
    description:
      'Protocolo técnico de verificación de presión estática con manómetro certificado para garantizar cero fugas y habilitación del servicio.',
    isPlaceholder: false,
    confirmationDetails:
      'Ilustración técnica: Verificación con manómetro certificado y pruebas de estanqueidad',
    imageSrc: '/images/proyectos/proyecto-mantenimiento-hermeticidad.jpg',
    imageAlt: 'Técnico calificado realizando inspección y prueba de hermeticidad en tuberías de gas',
  },
];

/**
 * POR QUÉ ELEGIRNOS:
 * Basado estrictamente en datos confirmados.
 * No inventar años de experiencia, clientes ni garantías ficticias.
 */
export const WHY_CHOOSE_US: DifferentialItem[] = [
  {
    title: 'Empresa Certificada por Vanti',
    description:
      'Tu proyecto respaldado por instaladores de gas certificados. Garantizamos cumplimiento técnico y aprobación ágil ante la distribuidora de gas, sin trámites engorrosos ni retrasos en tu obra.',
    badge: 'Respaldo Oficial',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Cobertura Rápida en Bogotá y Alrededores',
    description:
      'Atención prioritaria y oportuna en todas las localidades de Bogotá y municipios aledaños de la Sabana (Soacha, Chía, Cajicá, Funza, Mosquera, Madrid). Técnicos de gas disponibles para asesorarte en obra.',
    badge: 'Bogotá y Sabana',
    iconName: 'Building2',
  },
  {
    title: 'Instalaciones y Reparaciones 100% Seguras',
    description:
      'Cero fugas, cero riesgos. Cada instalación de gas natural y reparación se entrega con pruebas de hermeticidad con manómetros certificados para garantizar máxima tranquilidad y habilitación inmediata.',
    badge: 'Cero Fugas',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Cotización Clara y Asesoría Técnica Directa',
    description:
      'Habla directamente con técnicos en gas natural e ingenieros. Te entregamos presupuestos claros, detallados y sin sobrecostos para proyectos de vivienda e industria.',
    badge: 'Sin Intermediarios',
    iconName: 'Wrench',
  },
];

export const DIFFERENTIALS = WHY_CHOOSE_US;

/**
 * PREGUNTAS FRECUENTES:
 * Basadas únicamente en datos confirmados.
 */
export const FAQS_LANDING = [
  {
    question: '¿COLFGAS cuenta con certificación oficial para trabajar con gas?',
    answer:
      'Sí. COLFGAS CONSTRUCCIONES S.A.S. es una Empresa certificada por Vanti, lo que avala nuestra competencia técnica para la construcción, instalación y mantenimiento de redes de gas natural conforme a las directrices de la distribuidora.',
    category: 'Certificación Vanti',
  },
  {
    question: '¿Qué servicios ofrece COLFGAS?',
    answer:
      'Ofrecemos tres líneas principales de servicio: Construcción de redes de gas (matrices y acometidas), Instalación de redes de gas (montantes, centros de medición y redes internas) y Mantenimiento técnico de redes (detección de fugas, adecuaciones y pruebas de hermeticidad).',
    category: 'Servicios',
  },
  {
    question: '¿Prestan servicios para gas vehicular o conversión de motores?',
    answer:
      'No. COLFGAS trabaja exclusivamente con redes de gas para construcciones residenciales e industriales. No prestamos servicios relacionados con gas vehicular (GNCV), conversión de automotores ni estaciones de servicio.',
    category: 'Alcance Operativo',
  },
  {
    question: '¿En qué sectores aplican sus soluciones?',
    answer:
      'Atendemos el sector residencial (edificios de vivienda, conjuntos multifamiliares y proyectos habitacionales) y el sector industrial (plantas de producción, calderas, hornos y centros comerciales).',
    category: 'Sectores',
  },
  {
    question: '¿Cómo puedo solicitar una cotización o asesoría técnica?',
    answer:
      'Puedes comunicarte directamente a través de nuestra página de contacto oficial, donde nuestro equipo atenderá tu requerimiento y coordinará la revisión de tu proyecto.',
    category: 'Contacto',
  },
  {
    question: '¿Cuál es la dirección de la sede de COLFGAS?',
    answer:
      'Nuestra sede principal está ubicada en la Calle 90 Sur # 4F-33 Este, Bogotá, Colombia.',
    category: 'Ubicación',
  },
  {
    question: '¿Cuál es la cobertura para instalaciones y reparaciones de gas?',
    answer:
      'Nuestra sede principal está en Bogotá y cubrimos proyectos residenciales e industriales en toda la capital y municipios aledaños de la Sabana (como Soacha, Chía, Cajicá, Funza, Mosquera, Madrid, entre otros). [CONFIRMAR CON COLFGAS alcance detallado de horarios y municipios adicionales].',
    category: 'Cobertura',
  },
];

/**
 * CHECKLIST DE VALIDACIÓN CON EL CLIENTE
 */
export const CLIENT_VALIDATION_CHECKLIST = [
  {
    id: 'certificacion-vanti',
    label: 'Certificación por Vanti',
    description: 'Confirmado por el cliente: Empresa certificada por Vanti.',
    status: 'Confirmado',
  },
  {
    id: 'enfoque-sin-vehiculos',
    label: 'Enfoque exclusivo sin gas vehicular',
    description:
      'Confirmado: Trabaja con gas para construcciones residenciales e industriales. No ofrece gas para vehículos.',
    status: 'Confirmado',
  },
  {
    id: 'servicios-principales',
    label: 'Servicios ofrecidos',
    description:
      'Confirmado: Construcción e instalación de redes de gas y mantenimiento.',
    status: 'Confirmado',
  },
  {
    id: 'telefono-whatsapp',
    label: 'WhatsApp y teléfono de contacto',
    description: 'Confirmado: 320 827 1724.',
    status: 'Confirmado',
  },
  {
    id: 'direccion-oficial',
    label: 'Dirección física oficial',
    description: 'Confirmado: Calle 90 Sur # 4F-33 Este, Bogotá, Colombia.',
    status: 'Confirmado',
  },
  {
    id: 'cobertura-exacta',
    label: 'Cobertura geográfica y horarios de atención',
    description:
      'Comunícate con COLFGAS para confirmar la cobertura y disponibilidad de atención para tu proyecto.',
    status: 'Confirmado',
  },
];
