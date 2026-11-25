/**
 * Catálogo Fotográfico Oficial de Instalaciones y Redes de Gas
 * COLFGAS CONSTRUCCIONES S.A.S.
 *
 * AVISO ÉTICO Y DE TRANSPARENCIA:
 * Las imágenes corresponden al registro fotográfico documental de instalaciones técnicas,
 * baterías de medición, montantes y redes de tubería fija. No se presentan como
 * proyectos concluidos atribuibles a terceros ni se inventan datos de clientes.
 */

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'medidores' | 'tuberias' | 'mantenimiento' | 'equipos' | 'general';
  categoryLabel: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  featuredIn: ('inicio' | 'residencial' | 'industrial' | 'mantenimiento')[];
}

export const CATEGORY_LABELS: Record<GalleryPhoto['category'], string> = {
  medidores: 'Medidores y Gabinetes',
  tuberias: 'Tuberías y Colectores',
  mantenimiento: 'Mantenimiento e Inspección',
  equipos: 'Puntos y Equipos a Gas',
  general: 'Obras e Infraestructura',
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    "id": "gal-gran-banco-medidores",
    "title": "Gran Banco de Medidores de Gas",
    "category": "medidores",
    "src": "/images/galeria/gran-banco-de-medidores-de-gas.webp",
    "width": 1448,
    "height": 1086,
    "alt": "Batería centralizada de medidores de gas natural en gabinete técnico para edificio multifamiliar",
    "caption": "Batería de medición centralizada con reguladores individuales y válvulas de corte reglamentarias.",
    "featuredIn": [
      "inicio",
      "residencial"
    ],
    "categoryLabel": "Medidores y Gabinetes"
  },
  {
    "id": "gal-garaje-medidores",
    "title": "Batería de Medidores en Parqueadero",
    "category": "medidores",
    "src": "/images/galeria/garaje-iluminado-con-medidores-de-gas.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Instalación de gabinetes y centros de medición de gas en área técnica de parqueadero subterráneo",
    "caption": "Ubicación técnica en zona de acceso controlado con protección ante impactos.",
    "featuredIn": [
      "inicio",
      "residencial"
    ],
    "categoryLabel": "Medidores y Gabinetes"
  },
  {
    "id": "gal-medidores-azotea",
    "title": "Batería de Medidores en Azotea Técnica",
    "category": "medidores",
    "src": "/images/galeria/medidores-de-gas-en-azotea.webp",
    "width": 1448,
    "height": 1086,
    "alt": "Instalación de centros de medición y reguladores de gas en cubierta y azotea ventilada",
    "caption": "Distribución en azotea con ventilación natural permanente y altos estándares de seguridad.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Medidores y Gabinetes"
  },
  {
    "id": "gal-medidor-nicho-concreto",
    "title": "Medidor Individual en Nicho de Concreto",
    "category": "medidores",
    "src": "/images/galeria/medidor-de-gas-en-nicho-de-concreto.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Medidor de gas natural instalado en nicho empotrado de concreto con regulador de segunda etapa",
    "caption": "Acometida individual empotrada con regulador y llave de corte de un cuarto de vuelta.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Medidores y Gabinetes"
  },
  {
    "id": "gal-seis-medidores-abierto",
    "title": "Gabinete con Seis Medidores de Gas",
    "category": "medidores",
    "src": "/images/galeria/seis-medidores-de-gas-en-gabinete-abierto.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Conjunto de seis medidores volumétricos de gas en armario metálico ventilado",
    "caption": "Configuración compacta para pequeños conjuntos residenciales y locales comerciales.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Medidores y Gabinetes"
  },
  {
    "id": "gal-medidores-gabinete-abierto",
    "title": "Montaje de Medidores en Gabinete Abierto",
    "category": "medidores",
    "src": "/images/galeria/medidores-de-gas-en-gabinete-abierto.webp",
    "width": 1448,
    "height": 1086,
    "alt": "Estructura modular de medidores de gas en gabinete ventilado en fase de conexionado",
    "caption": "Montaje alineado con uniones mecánicas roscadas y sellante homologado para gas.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Medidores y Gabinetes"
  },
  {
    "id": "gal-medidores-gabinete-estrecho",
    "title": "Distribución Vertical de Medidores",
    "category": "medidores",
    "src": "/images/galeria/medidores-de-gas-en-gabinete-estrecho.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Banco de medidores de gas en ducto o nicho vertical estrecho para optimización de espacio",
    "caption": "Optimización de trazado en ductos técnicos de edificaciones de vivienda.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Medidores y Gabinetes"
  },
  {
    "id": "gal-medidores-gabinete",
    "title": "Medidores en Gabinete Metálico",
    "category": "medidores",
    "src": "/images/galeria/medidores-de-gas-en-gabinete.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Batería de medidores protegida en gabinete metálico con rejillas de aireación",
    "caption": "Gabinete con puerta metálica y ventilaciones reglamentarias de seguridad.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Medidores y Gabinetes"
  },
  {
    "id": "gal-gabinete-exterior-medidor",
    "title": "Gabinete Exterior de Medición",
    "category": "medidores",
    "src": "/images/galeria/gabinete-exterior-con-medidor-de-gas.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Gabinete de gas exterior sobre muro perimetral con medidor y regulador",
    "caption": "Protección frente a la intemperie con cerradura y mirilla transparente.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Medidores y Gabinetes"
  },
  {
    "id": "gal-gabinete-muro-piedra",
    "title": "Gabinete Integrado en Muro de Piedra",
    "category": "medidores",
    "src": "/images/galeria/gabinete-de-gas-en-muro-de-piedra.webp",
    "width": 1448,
    "height": 1086,
    "alt": "Acometida y gabinete de gas integrado en fachada de mampostería de piedra",
    "caption": "Integración arquitectónica en fachada con fácil acceso para lectura e inspección.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Medidores y Gabinetes"
  },
  {
    "id": "gal-gabinete-blanco-tuberias",
    "title": "Gabinete Blanco con Tuberías de Gas",
    "category": "medidores",
    "src": "/images/galeria/gabinete-blanco-con-tuberias-de-gas.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Gabinete blanco interior con tuberías y válvulas de paso para suministro residencial",
    "caption": "Válvula de corte general y montantes con acabado esmaltado.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Medidores y Gabinetes"
  },
  {
    "id": "gal-tuberias-gas-gabinete",
    "title": "Tuberías de Gas y Gabinete de Control",
    "category": "medidores",
    "src": "/images/galeria/tuberias-de-gas-y-gabinete.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Montaje de tuberías de gas con llaves de paso conectadas a gabinete de distribución",
    "caption": "Conexión entre red vertical montante y gabinete de corte.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Medidores y Gabinetes"
  },
  {
    "id": "gal-gabinete-colectores",
    "title": "Gabinete Abierto con Colectores de Gas",
    "category": "medidores",
    "src": "/images/galeria/gabinete-abierto-con-colectores-de-gas.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Colector distribuidor de gas en gabinete para alimentación de múltiples ramales",
    "caption": "Distribuidor múltiple para ramales internos con sellado estanco.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Medidores y Gabinetes"
  },
  {
    "id": "gal-colfgas-medidores-opt",
    "title": "Instalación Centralizada de Medición COLFGAS",
    "category": "medidores",
    "src": "/images/galeria/colfgas-medidores-instalacion.webp",
    "width": 1800,
    "height": 1350,
    "alt": "Centro de medición unificado de gas natural ejecutado según especificaciones de Vanti",
    "caption": "Conjunto de medidores calibrados listos para habilitación del servicio.",
    "featuredIn": [
      "inicio",
      "residencial"
    ],
    "categoryLabel": "Medidores y Gabinetes"
  },
  {
    "id": "gal-corredor-tuberias-amarillas",
    "title": "Corredor de Obra con Tuberías de Gas",
    "category": "tuberias",
    "src": "/images/galeria/corredor-de-obra-con-tuberias-amarillas.webp",
    "width": 1600,
    "height": 719,
    "alt": "Tendido de tuberías de gas amarillas aéreas en corredor técnico de edificación en obra",
    "caption": "Trazado aéreo canalizado por zonas comunes no habitables cumpliendo distancias de seguridad.",
    "featuredIn": [
      "inicio",
      "industrial"
    ],
    "categoryLabel": "Tuberías y Colectores"
  },
  {
    "id": "gal-tres-tuberias-amarillas",
    "title": "Líneas Matrices de Tuberías Amarillas",
    "category": "tuberias",
    "src": "/images/galeria/tres-tuberias-amarillas-en-obra.webp",
    "width": 1088,
    "height": 1445,
    "alt": "Tendido de tres tuberías de gas en acero soldadas y pintadas en amarillo reglamentario en obra civil",
    "caption": "Líneas paralelas de suministro con soporte estructural antisísmico.",
    "featuredIn": [
      "industrial"
    ],
    "categoryLabel": "Tuberías y Colectores"
  },
  {
    "id": "gal-colectores-gas-obra",
    "title": "Montaje de Colectores de Gas en Obra",
    "category": "tuberias",
    "src": "/images/galeria/colectores-de-gas-en-obra.webp",
    "width": 1448,
    "height": 1086,
    "alt": "Colectores y tuberías de gas en proceso de montaje en estructura de construcción",
    "caption": "Armado de puentes distribuidores de gas para distribución por sectores.",
    "featuredIn": [
      "industrial"
    ],
    "categoryLabel": "Tuberías y Colectores"
  },
  {
    "id": "gal-azotea-tuberias-montanas",
    "title": "Tendido de Tuberías en Azotea Panorámica",
    "category": "tuberias",
    "src": "/images/galeria/azotea-con-tuberias-y-montanas.webp",
    "width": 1448,
    "height": 1086,
    "alt": "Red de tuberías de gas ancladas sobre la cubierta de un edificio con paisaje de montañas",
    "caption": "Tendido exterior en cubierta con recubrimiento de protección solar y anticorrosión.",
    "featuredIn": [
      "inicio",
      "industrial",
      "residencial"
    ],
    "categoryLabel": "Tuberías y Colectores"
  },
  {
    "id": "gal-manifold-pared-blanca",
    "title": "Manifold de Distribución de Gas",
    "category": "tuberias",
    "src": "/images/galeria/manifold-de-gas-en-pared-blanca.webp",
    "width": 1088,
    "height": 1445,
    "alt": "Manifold de gas con derivaciones individuales y válvulas de esfera en muro técnico",
    "caption": "Manifold compacto para control sectorizado del flujo de gas.",
    "featuredIn": [
      "industrial",
      "residencial"
    ],
    "categoryLabel": "Tuberías y Colectores"
  },
  {
    "id": "gal-tuberias-expuestas-muro",
    "title": "Tuberías Expuestas en Muro de Concreto",
    "category": "tuberias",
    "src": "/images/galeria/tuberias-expuestas-en-muro-de-concreto.webp",
    "width": 900,
    "height": 1600,
    "alt": "Montante vertical de gas con abrazaderas sobre muro de concreto a la vista",
    "caption": "Tendido vertical superficial con abrazaderas isofónicas de sujeción.",
    "featuredIn": [
      "industrial"
    ],
    "categoryLabel": "Tuberías y Colectores"
  },
  {
    "id": "gal-tuberias-expuestas-obra",
    "title": "Tuberías de Gas en Estructura en Obra",
    "category": "tuberias",
    "src": "/images/galeria/tuberias-expuestas-en-obra.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Trazado de tuberías de gas metálicas instaladas en fase de obra gris",
    "caption": "Instalación de redes preliminares previa al vaciado y acabados.",
    "featuredIn": [
      "industrial"
    ],
    "categoryLabel": "Tuberías y Colectores"
  },
  {
    "id": "gal-tuberias-ductos-interior",
    "title": "Tuberías y Ductos en Obra Interior",
    "category": "tuberias",
    "src": "/images/galeria/tuberias-y-ductos-en-obra-interior.webp",
    "width": 1088,
    "height": 1445,
    "alt": "Instalación de tuberías de gas y ductos de evacuación técnica en interior de edificación",
    "caption": "Convivencia reglamentaria de tuberías de fluido con conductos de ventilación.",
    "featuredIn": [
      "industrial",
      "residencial"
    ],
    "categoryLabel": "Tuberías y Colectores"
  },
  {
    "id": "gal-tuberias-valvulas-gas",
    "title": "Tuberías y Válvulas de Gas en Detalle",
    "category": "tuberias",
    "src": "/images/galeria/tuberias-y-valvulas-de-gas.webp",
    "width": 900,
    "height": 1600,
    "alt": "Detalle de válvulas de corte y uniones mecánicas roscadas en tubería de gas",
    "caption": "Válvulas esféricas de accionamiento rápido certificadas para 600 WOG.",
    "featuredIn": [
      "mantenimiento",
      "industrial"
    ],
    "categoryLabel": "Tuberías y Colectores"
  },
  {
    "id": "gal-conductos-blancos-concreto",
    "title": "Conductos de Gas sobre Muro de Concreto",
    "category": "tuberias",
    "src": "/images/galeria/conductos-blancos-en-muro-de-concreto.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Conductos blancos técnicos de gas fijados en muro estructural de concreto",
    "caption": "Canalizaciones técnicas con soportes de fijación estructural.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Tuberías y Colectores"
  },
  {
    "id": "gal-interior-obra-conductos",
    "title": "Espacio Interior de Obra con Conductos",
    "category": "tuberias",
    "src": "/images/galeria/interior-de-obra-con-conductos-blancos.webp",
    "width": 1600,
    "height": 900,
    "alt": "Salón en obra civil con canalizaciones y conductos de gas e instalaciones técnicas",
    "caption": "Coordinación espacial de redes de fluidos en etapas tempranas de edificación.",
    "featuredIn": [
      "inicio"
    ],
    "categoryLabel": "Tuberías y Colectores"
  },
  {
    "id": "gal-obra-crudo-tuberias",
    "title": "Obra en Crudo con Tuberías y Muros de Ladrillo",
    "category": "tuberias",
    "src": "/images/galeria/obra-en-crudo-con-tuberias-y-ladrillos.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Canalización de tubería de gas empotrada en muro de mampostería en ladrillo a la vista",
    "caption": "Ranurado y protección de tuberías embebidas en muros de mampostería.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Tuberías y Colectores"
  },
  {
    "id": "gal-tecnico-revisando-tuberias",
    "title": "Técnico Realizando Inspección de Red",
    "category": "mantenimiento",
    "src": "/images/galeria/tecnico-revisando-tuberias-de-gas.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Técnico instalador realizando verificación y ajuste técnico de tuberías de gas en obra",
    "caption": "Verificación de estanqueidad, apriete de uniones y estado general de la red.",
    "featuredIn": [
      "inicio",
      "mantenimiento"
    ],
    "categoryLabel": "Mantenimiento e Inspección"
  },
  {
    "id": "gal-manometro-tuberias-ladrillo",
    "title": "Manómetro para Prueba de Hermeticidad",
    "category": "mantenimiento",
    "src": "/images/galeria/manometro-y-tuberias-de-gas-en-ladrillo.webp",
    "width": 719,
    "height": 1600,
    "alt": "Manómetro calibrado instalado en tramo de tubería para ensayo de hermeticidad y presión",
    "caption": "Monitoreo de presión estática para descartar microfugas antes de la entrega.",
    "featuredIn": [
      "mantenimiento",
      "industrial"
    ],
    "categoryLabel": "Mantenimiento e Inspección"
  },
  {
    "id": "gal-restauracion-medidores",
    "title": "Mantenimiento y Restauración de Medidores",
    "category": "mantenimiento",
    "src": "/images/galeria/restauracion-de-medidores-de-gas.webp",
    "width": 1448,
    "height": 1086,
    "alt": "Trabajos de mantenimiento y adecuación técnica en batería de medidores existente",
    "caption": "Recambio de sellos, recodificación y adecuación de gabinete de medición.",
    "featuredIn": [
      "mantenimiento"
    ],
    "categoryLabel": "Mantenimiento e Inspección"
  },
  {
    "id": "gal-reguladores-electrodomestico",
    "title": "Reguladores de Gas en Área de Servicio",
    "category": "mantenimiento",
    "src": "/images/galeria/reguladores-de-gas-entre-electrodomestico-y-azulejos.webp",
    "width": 900,
    "height": 1600,
    "alt": "Reguladores de presión de gas y llaves de corte instalados en zona de servicios",
    "caption": "Inspección de reguladores de segunda etapa para equipos térmicos.",
    "featuredIn": [
      "mantenimiento"
    ],
    "categoryLabel": "Mantenimiento e Inspección"
  },
  {
    "id": "gal-obrero-escalera-conductos",
    "title": "Montaje Técnico en Altura",
    "category": "mantenimiento",
    "src": "/images/galeria/obrero-en-escalera-entre-conductos-blancos.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Operario técnico en escalera realizando fijación y tendido de conductos en obra",
    "caption": "Trabajo en altura con elementos de protección personal y sujeción reglamentaria.",
    "featuredIn": [
      "mantenimiento"
    ],
    "categoryLabel": "Mantenimiento e Inspección"
  },
  {
    "id": "gal-trabajador-conductos-obra",
    "title": "Personal Técnico en Instalaciones",
    "category": "mantenimiento",
    "src": "/images/galeria/trabajador-entre-conductos-en-obra.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Trabajador técnico supervisando alineación de conductos e instalaciones de gas",
    "caption": "Supervisión de alineación y nivelación en trazados técnicos.",
    "featuredIn": [
      "mantenimiento"
    ],
    "categoryLabel": "Mantenimiento e Inspección"
  },
  {
    "id": "gal-fachada-trabajador",
    "title": "Obra Civil de Acometida en Fachada",
    "category": "mantenimiento",
    "src": "/images/galeria/fachada-en-construccion-con-trabajador.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Obra civil de acometida exterior en fachada de edificio con trabajador calificado",
    "caption": "Construcción de acometida exterior con integración a la estructura del edificio.",
    "featuredIn": [
      "inicio"
    ],
    "categoryLabel": "Mantenimiento e Inspección"
  },
  {
    "id": "gal-suministros-gas-embaldosado",
    "title": "Materiales y Accesorios Homologados de Gas",
    "category": "mantenimiento",
    "src": "/images/galeria/suministros-de-gas-sobre-suelo-embaldosado.webp",
    "width": 1445,
    "height": 1088,
    "alt": "Accesorios de tubería, válvulas y reguladores certificados para montaje de red de gas",
    "caption": "Insumos y accesorios con certificado de conformidad de producto.",
    "featuredIn": [
      "mantenimiento"
    ],
    "categoryLabel": "Mantenimiento e Inspección"
  },
  {
    "id": "gal-calentador-haceb-lavadero",
    "title": "Punto de Gas para Calentador de Paso",
    "category": "equipos",
    "src": "/images/galeria/calentador-haceb-en-lavadero-embaldosado.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Conexión técnica de gas para calentador de paso en zona de ropas con ventilación",
    "caption": "Punto terminal de gas con válvula de paso y ducto de evacuación de tiro natural.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Puntos y Equipos a Gas"
  },
  {
    "id": "gal-calentador-rheem-lavadero",
    "title": "Instalación de Calentador Rheem",
    "category": "equipos",
    "src": "/images/galeria/calentador-rheem-en-lavadero-domestico.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Calentador de agua a gas instalado en lavadero doméstico con llave de corte",
    "caption": "Instalación de artefacto con flexibles certificados y válvula de seguridad.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Puntos y Equipos a Gas"
  },
  {
    "id": "gal-calentador-mabe-azulejos",
    "title": "Calentador Mabe en Pared Embaldosada",
    "category": "equipos",
    "src": "/images/galeria/calentador-mabe-en-pared-de-azulejos.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Calentador de gas Mabe montado sobre pared de azulejos con conexiones hidráulicas y de gas",
    "caption": "Conexión de suministro de gas en tubería rígida y verificación de hermeticidad.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Puntos y Equipos a Gas"
  },
  {
    "id": "gal-calentador-bomba-circulacion",
    "title": "Calentador de Gas con Bomba de Recirculación",
    "category": "equipos",
    "src": "/images/galeria/calentador-de-gas-y-bomba-de-circulacion.webp",
    "width": 1088,
    "height": 1445,
    "alt": "Sistema hidráulico y térmico con calentador de gas y bomba para agua caliente constante",
    "caption": "Sistema hidrotérmico para suministro continuo de agua caliente en vivienda.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Puntos y Equipos a Gas"
  },
  {
    "id": "gal-dos-calentadores-lavadero",
    "title": "Batería de Calentadores en Lavadero",
    "category": "equipos",
    "src": "/images/galeria/lavadero-con-dos-calentadores-de-gas.webp",
    "width": 1088,
    "height": 1445,
    "alt": "Instalación de dos calentadores de paso a gas con derivaciones individuales",
    "caption": "Instalación doble para alta demanda habitacional con ductos independientes.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Puntos y Equipos a Gas"
  },
  {
    "id": "gal-chimenea-gas-moderna",
    "title": "Chimenea a Gas en Espacio Habitacional",
    "category": "equipos",
    "src": "/images/galeria/chimenea-de-gas-moderna-en-habitacion-sencilla.webp",
    "width": 1448,
    "height": 1086,
    "alt": "Punto de conexión e instalación de chimenea decorativa a gas natural en estancia moderna",
    "caption": "Punto decorativo con válvula de seguridad y quemador de llama modulante.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Puntos y Equipos a Gas"
  },
  {
    "id": "gal-chimenea-blanca-esquina",
    "title": "Chimenea Blanca de Gas en Esquina",
    "category": "equipos",
    "src": "/images/galeria/chimenea-blanca-moderna-en-esquina.webp",
    "width": 1087,
    "height": 1447,
    "alt": "Chimenea moderna a gas empotrada en esquina de sala de vivienda",
    "caption": "Integración arquitectónica en vivienda con red interna oculta.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Puntos y Equipos a Gas"
  },
  {
    "id": "gal-chimenea-angular-gas",
    "title": "Chimenea Angular de Gas en Remodelación",
    "category": "equipos",
    "src": "/images/galeria/chimenea-angular-de-gas-en-remodelacion.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Montaje y prueba de quemador de chimenea a gas en ángulo durante remodelación",
    "caption": "Adecuación de línea de gas durante reforma arquitectónica residencial.",
    "featuredIn": [
      "residencial"
    ],
    "categoryLabel": "Puntos y Equipos a Gas"
  },
  {
    "id": "gal-acera-piedra-restaurada",
    "title": "Restauración de Espacio Público y Acera",
    "category": "general",
    "src": "/images/galeria/acera-de-piedra-restaurada-sin-texto.webp",
    "width": 1448,
    "height": 1086,
    "alt": "Acera urbana restaurada tras la canalización de acometida subterránea de gas",
    "caption": "Obra civil complementaria: reposición completa de espacio público tras zanjado de gas.",
    "featuredIn": [
      "inicio",
      "industrial"
    ],
    "categoryLabel": "Obras e Infraestructura"
  },
  {
    "id": "gal-colfgas-instalacion-opt",
    "title": "Instalación de Red de Gas COLFGAS",
    "category": "general",
    "src": "/images/galeria/colfgas-instalacion-optimizada.webp",
    "width": 1000,
    "height": 750,
    "alt": "Detalle técnico de instalación de red de gas con accesorios certificados",
    "caption": "Ensamblaje técnico con materiales normalizados y control de calidad.",
    "featuredIn": [
      "inicio",
      "residencial"
    ],
    "categoryLabel": "Obras e Infraestructura"
  }
];

export function getPhotosByContext(context: 'inicio' | 'residencial' | 'industrial' | 'mantenimiento'): GalleryPhoto[] {
  return GALLERY_PHOTOS.filter((p) => p.featuredIn.includes(context));
}

export function getPhotosByCategory(category: GalleryPhoto['category']): GalleryPhoto[] {
  return GALLERY_PHOTOS.filter((p) => p.category === category);
}

