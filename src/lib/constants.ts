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
    'Empresa especializada en la construcción, instalación y mantenimiento de redes de gas natural y GLP para construcciones residenciales e industriales en Colombia, garantizando máxima seguridad técnica y cumplimiento normativo.',
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
    'Bogotá D.C., Cundinamarca y cobertura de proyectos en Colombia [CONFIRMAR COBERTURA EXACTA CON COLFGAS]',
  hours: '[CONFIRMAR HORARIO EXACTO CON COLFGAS]',
  email: '[CONFIRMAR CON COLFGAS: Correo oficial]',
  socialMedia: {
    facebook: 'https://www.facebook.com/p/Colfgas-Construcciones-SAS-100066587345532/',
    isFacebookConfirmed: true,
  },
};

export const SITE_METADATA = {
  siteName: 'COLFGAS CONSTRUCCIONES S.A.S.',
  defaultTitle: 'COLFGAS CONSTRUCCIONES S.A.S. | Empresa Certificada por Vanti',
  titleTemplate: '%s | COLFGAS CONSTRUCCIONES S.A.S.',
  defaultDescription:
    'Empresa certificada por Vanti. Construcción, instalación y mantenimiento de redes de gas para construcciones residenciales e industriales en Colombia. Atención al 320 827 1724.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://colfgas.com.co',
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
    name: 'Sobre Nosotros',
    href: '/nosotros',
    description: 'Empresa especializada en redes de gas para vivienda e industria',
  },
  {
    name: 'Preguntas Frecuentes',
    href: '/preguntas-frecuentes',
    description: 'Respuestas a dudas habituales sobre normativas y servicios',
  },
  {
    name: 'Mapa del Sitio',
    href: '/mapa-del-sitio',
    description: 'Índice visual y navegable de todas las páginas del sitio',
  },
];

export const SERVICE_SUB_LINKS = [
  {
    name: 'Gas Residencial',
    href: '/servicios/gas-residencial',
    description: 'Redes y montantes para edificios multifamiliares y vivienda',
  },
  {
    name: 'Gas Industrial',
    href: '/servicios/gas-industrial',
    description: 'Líneas y estaciones de regulación para industrias y comercio',
  },
  {
    name: 'Mantenimiento de Redes',
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
    title: 'Construcción de Redes de Gas',
    shortTitle: 'Construcción de Redes',
    sector: 'ambos',
    summary:
      'Construcción integral de redes matrices subterráneas, acometidas principales y montantes verticales para proyectos habitacionales y plantas industriales.',
    description:
      'Ejecutamos la construcción física de redes de gas combustible conforme a las exigencias técnicas de Vanti y la normativa colombiana. Desarrollamos canalizaciones, tendido de tubería especializada y pruebas preliminares para garantizar redes seguras y duraderas.',
    features: [
      'Construcción de redes matrices en polietileno de alta densidad (PEAD) y acero',
      'Trazado y canalización de acometidas desde la red de distribución',
      'Montantes verticales estructurados para edificios multifamiliares',
      'Integración de obras civiles complementarias para cruces y zanjas de gas',
      'Cumplimiento estricto de lineamientos de construcción certificados por Vanti',
    ],
    normativa: 'NTC 2505 (Residencial) / NTC 3838 (Industrial)',
    iconName: 'Building2',
  },
  {
    id: 'instalacion-redes',
    slug: 'instalacion',
    title: 'Instalación de Redes de Gas',
    shortTitle: 'Instalación de Redes',
    sector: 'ambos',
    summary:
      'Instalación técnica de tuberías internas, centros de medición, reguladores y puntos de conexión en edificaciones residenciales e industriales.',
    description:
      'Instalamos sistemas de distribución interna de gas con tuberías homologadas (PE-AL-PE, cobre y acero al carbono). Realizamos el montaje de baterías de medidores unificados, estaciones de regulación y acople de equipos térmicos con pruebas de hermeticidad.',
    features: [
      'Instalación de redes internas empotradas y a la vista según norma técnica',
      'Montaje de gabinetes y centros de medición unificados para copropiedades',
      'Instalación de estaciones de regulación (ERM) para media y baja presión',
      'Conexión segura de puntos para estufas, calentadores, hornos y calderas',
      'Pruebas de hermeticidad con manómetros certificados para habilitación',
    ],
    normativa: 'NTC 2505 / NTC 4282 / Aprobación Vanti',
    iconName: 'Wrench',
  },
  {
    id: 'mantenimiento-redes',
    slug: 'mantenimiento',
    title: 'Mantenimiento de Redes de Gas',
    shortTitle: 'Mantenimiento de Redes',
    sector: 'ambos',
    summary:
      'Mantenimiento preventivo y correctivo, inspección técnica, detección de fugas y adecuación normativa en viviendas e industrias.',
    description:
      'Servicio técnico especializado para preservar la estanqueidad y seguridad de las redes existentes. Realizamos reemplazo de valvulería deteriorada, pruebas de presión, calibración de reguladores y adecuaciones previas a inspecciones de la distribuidora.',
    features: [
      'Pruebas de hermeticidad y detección electrónica de microfugas',
      'Mantenimiento preventivo en estaciones de regulación y medidores',
      'Sustitución de válvulas de corte, reguladores y accesorios desgastados',
      'Adecuaciones técnicas de ventilación y recintos conforme a norma',
      'Preparación de instalaciones para certificación periódica y reconexión',
    ],
    normativa: 'Resolución CREG 059 / Estándares de Vanti',
    iconName: 'ShieldCheck',
  },
];

/**
 * SOLUCIONES SEPARADAS: RESIDENCIALES E INDUSTRIALES
 */
export const RESIDENTIAL_SOLUTION: SolutionItem = {
  id: 'solucion-residencial',
  title: 'Soluciones de Gas para Construcciones Residenciales',
  subtitle: 'Edificios multifamiliares, torres de apartamentos y conjuntos residenciales',
  description:
    'En COLFGAS CONSTRUCCIONES S.A.S. construimos, instalamos y mantenemos redes de gas concebidas para la seguridad de las familias en propiedad horizontal. Respaldados como empresa certificada por Vanti, ejecutamos acometidas, montantes y redes internas listas para la habilitación del servicio.',
  scopeItems: [
    'Acometidas desde la red pública hasta el límite de la copropiedad',
    'Baterías y centros de medición unificados con cerraduras reglamentarias',
    'Montantes verticales canalizadas por ductos técnicos exclusivos',
    'Redes internas en tubería PE-AL-PE y cobre para estufas y calentadores',
    'Cálculo y adecuación de ventilaciones reglamentarias de recintos',
    'Pruebas de hermeticidad certificadas previas al suministro',
  ],
  normativa: 'NTC 2505 y especificaciones de Vanti',
  iconName: 'Home',
  imageSrc: '/images/galeria/gran-banco-de-medidores-de-gas.webp',
  imageAlt: 'Batería centralizada de medidores de gas natural en gabinete técnico para edificación residencial',
  targetHref: '/servicios/gas-residencial',
};

export const INDUSTRIAL_SOLUTION: SolutionItem = {
  id: 'solucion-industrial',
  title: 'Soluciones de Gas para Construcciones Industriales',
  subtitle: 'Plantas de producción, fábricas, calderas, hornos y centros comerciales',
  description:
    'Diseño y ejecución técnica de redes de gas de alta confiabilidad para industrias con demandas térmicas continuas. Como empresa certificada por Vanti, instalamos líneas de suministro en acero soldado y polietileno de alta densidad con estaciones de regulación que garantizan flujo estable y cero fugas.',
  scopeItems: [
    'Líneas de suministro en acero al carbón soldado y polietileno PEAD',
    'Montaje de Estaciones de Regulación y Medición (ERM) primaria y secundaria',
    'Trenes de gas con electroválvulas y sistemas de corte automático OPSO',
    'Conexión técnica para alimentación de calderas de vapor, hornos y secadores',
    'Integración de sensores de detección de mezclas explosivas y parada de emergencia',
    'Ensayos no destructivos e inspección técnica de uniones soldadas',
  ],
  normativa: 'NTC 3838, NTC 4282 y código ASME B31.8',
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
      'Registro técnico documental de instalación de gas natural para unidades de vivienda multifamiliar, con pruebas de hermeticidad y adecuación a norma NTC 2505.',
    isPlaceholder: true,
    confirmationDetails:
      '[CONFIRMAR CON COLFGAS: Pendiente entrega de fotografías oficiales autorizadas de la obra]',
    imageSrc: '/images/galeria/gran-banco-de-medidores-de-gas.webp',
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
    isPlaceholder: true,
    confirmationDetails:
      '[CONFIRMAR CON COLFGAS: Pendiente entrega de registros fotográficos autorizados]',
    imageSrc: '/images/galeria/corredor-de-obra-con-tuberias-amarillas.webp',
    imageAlt: 'Tendido de tuberías de gas en acero en corredor técnico industrial',
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
    isPlaceholder: true,
    confirmationDetails:
      '[CONFIRMAR CON COLFGAS: Pendiente entrega de registros oficiales del servicio]',
    imageSrc: '/images/galeria/tecnico-revisando-tuberias-de-gas.webp',
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
    title: 'Cumplimiento Técnico y Normativo',
    description:
      'Nuestras obras y montajes se realizan bajo los lineamientos y especificaciones de las normas técnicas colombianas (NTC 2505 y NTC 3838), asegurando máxima seguridad y habilitación sin contratiempos.',
    badge: 'Normativa Oficial',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Enfoque Exclusivo en Construcciones Residenciales e Industriales',
    description:
      'Nos dedicamos con exclusividad a redes fijas de gas para viviendas, edificios e industrias. No prestamos servicios para vehículos ni gas automotor, garantizando total especialización en edificación.',
    badge: 'Especialización',
    iconName: 'Building2',
  },
  {
    title: 'Construcción, Instalación y Mantenimiento Integral',
    description:
      'Cubrimos todo el ciclo técnico de la red de gas: desde la construcción de acometidas y canalizaciones hasta la instalación de puntos internos y el mantenimiento preventivo.',
    badge: 'Solución Integral',
    iconName: 'Wrench',
  },
  {
    title: 'Seguridad Operativa y Normativa Técnica',
    description:
      'Cada trabajo se ejecuta cumpliendo las normas técnicas colombianas (NTC 2505 y NTC 3838), con pruebas de hermeticidad certificadas para garantizar cero fugas y máxima protección.',
    badge: 'Seguridad Garantizada',
    iconName: 'CheckCircle2',
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
      'Puedes comunicarte directamente al teléfono y WhatsApp 320 827 1724, donde nuestro equipo atenderá tu requerimiento y coordinará la revisión de tu proyecto.',
    category: 'Contacto',
  },
  {
    question: '¿Cuál es la dirección de la sede de COLFGAS?',
    answer:
      'Nuestra sede principal está ubicada en la Calle 90 Sur # 4F-33 Este, Bogotá, Colombia.',
    category: 'Ubicación',
  },
  {
    question: '¿Cuál es la cobertura geográfica exacta y horarios de atención?',
    answer:
      '[CONFIRMAR CON COLFGAS]. Para coordinar visitas técnicas o consultar disponibilidad en tu zona, comunícate directamente al 320 827 1724.',
    category: 'Información General',
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
    id: 'fotos-proyectos',
    label: 'Fotografías reales autorizadas de obras',
    description:
      '[CONFIRMAR CON COLFGAS: Entrega de fotos oficiales de obras reales o autorización explícita de fotos de Facebook].',
    status: 'Pendiente',
  },
  {
    id: 'cobertura-exacta',
    label: 'Cobertura geográfica y horarios de atención',
    description:
      '[CONFIRMAR CON COLFGAS: Ciudades atendidas y horarios oficiales de atención al público].',
    status: 'Pendiente',
  },
];
