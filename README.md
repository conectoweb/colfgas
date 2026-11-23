# COLFGAS CONSTRUCCIONES S.A.S. - Sitio Web Oficial

Sitio web corporativo y comercial desarrollado para **COLFGAS CONSTRUCCIONES S.A.S.**, enfocado en el diseño, ingeniería, construcción y mantenimiento de redes de gas natural y GLP para los sectores **residencial**, **comercial** e **industrial** en Colombia.

---

## 1. Enfoque de la Empresa y Delimitación Comercial

> **IMPORTANTE:**  
> COLFGAS trabaja exclusivamente con **soluciones estacionarias de gas para viviendas e industrias**.  
> El sitio web **NO** incluye servicios automotores, gas vehicular (GNCV), estaciones de servicio de combustible ni conversión de motores.

- **Sector Residencial:** Edificaciones multifamiliares, torres de apartamentos, conjuntos residenciales, redes matrices, montantes verticales, baterías de medidores e instalaciones internas (NTC 2505).
- **Sector Industrial y Comercial:** Líneas de distribución en media y alta presión, estaciones de regulación y medición (ERM), calderas, hornos, trenes de combustión y redes soldadas en acero o termofusión en polietileno (NTC 3838 / NTC 4282).
- **Obras Civiles Complementarias:** Zanjado, canalización subterránea, cruces viales y reposición de acabados y pavimentos.

---

## 2. Identidad Visual, Paleta de Colores y Tipografía

La interfaz cuenta con una identidad propia, profesional y sobria orientada a la ingeniería, construida con la tipografía **Manrope** (pesos 400, 500, 600, 700) y la paleta de colores de COLFGAS verificada bajo **WCAG 2.2 AA**:

| Variable | Color Hex | Uso Principal | Razón de Contraste vs Blanco |
| :--- | :--- | :--- | :--- |
| **Grafito Principal** | `#263238` | Encabezados, títulos y texto principal de alto contraste | **12.8:1** (Supera nivel AAA) |
| **Texto Muted** | `#5B6570` | Párrafos, descripciones y jerarquía secundaria | **5.8:1** (Supera nivel AA) |
| **Azul Accesible** | `#0066B3` | Botones principales con texto blanco y enlaces activos | **5.0:1** (Supera nivel AA) |
| **Verde Oscuro** | `#287A1C` | Textos verdes sobre fondo blanco e indicadores de conformidad | **4.8:1** (Supera nivel AA) |
| **Azul de Marca** | `#007afd` | Elementos gráficos, iconos y acentos visuales | Acentos destacados |
| **Verde de Marca** | `#43BE24` | Botón de WhatsApp, insignias y llamadas a la acción | Acentos secundarios |
| **Gris Muy Claro** | `#F4F7F8` | Fondos de secciones alternas, banners y cabeceras | Fondo accesible |
| **Blanco** | `#FFFFFF` | Fondos principales y tarjetas | Base |

---

## 3. Arquitectura del Sitio y Páginas Creadas

1. **Inicio (`/`):**
   - Propuesta de valor clara en el Hero.
   - Enfoque residencial vs. industrial con tarjetas diferenciadas.
   - Servicios destacados y llamada a la acción hacia WhatsApp y cotización formal.
   - Garantías de calidad y normativa técnica colombiana.
   - Galería preliminar de obras con aviso de fotos provisionales.
2. **Servicios (`/servicios`):**
   - Catálogo de los 5 servicios técnicos con ficha de normativa asociada.
   - Subpáginas especializadas con detalle constructivo:
     - **Gas Residencial (`/servicios/residencial`):** 5 fases de obra, materiales y gabinetes.
     - **Gas Industrial (`/servicios/industrial`):** Estaciones ERM, soldadura y calderas.
3. **Nosotros (`/nosotros`):**
   - Descripción institucional, misión, visión y pilares de seguridad.
   - Ficha técnica corporativa y lista de validación con el cliente.
4. **Proyectos (`/proyectos`):**
   - Galería estructurada por categoría con filtro interactivo en cliente (Residencial, Industrial, Comercial, Obra Civil).
   - Fichas técnicas con **insignia visible de sustitución fotográfica** para preservar la transparencia y no exhibir obras de terceros.
5. **Contacto (`/contacto`):**
   - Formulario accesible con validación en tiempo real y soporte dual:
     - **Generador de cotización para WhatsApp:** Redacta y envía el requerimiento formateado en un clic.
     - **Envío por correo/webhook:** Compatible con Formspree, Web3Forms o endpoint REST.
   - Canales directos (teléfonos, correo corporativo, horarios y sede en Bogotá).
6. **Política de Privacidad y Tratamiento de Datos (`/politica-de-privacidad`):**
   - Basada en la Ley Estatutaria 1581 de 2012 y Decreto 1377 de 2013 de Colombia (Habeas Data).
7. **Términos y Condiciones (`/terminos-y-condiciones`):**
   - Parámetros de ofertas comerciales, visitas técnicas y propiedad intelectual.
8. **Página de Error 404 Accesible (`/_not-found`):**
   - Navegación asistida para evitar enlaces rotos.
9. **Archivos Técnicos de Indexación SEO:**
   - `sitemap.xml` dinámico.
   - `robots.txt` configurado.
   - `.htaccess` optimizado para servidores Apache/LiteSpeed en Hostinger.

---

## 4. Ejecución Local en Desarrollo

### Requisitos
- **Node.js**: v18.17.0 o superior (probado y verificado en Node v24).
- **npm**: v9 o superior.

### Pasos
1. Clona o abre el repositorio en la terminal:
   ```bash
   cd "/Users/nallivetrujillo/Desktop/Proyectos Conectoweb/Colfgas"
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre en tu navegador:
   ```
   http://localhost:3000
   ```

---

## 5. Guía de Despliegue en Hostinger

Hostinger ofrece dos modalidades principales de alojamiento. Esta aplicación está **configurada y testeada para funcionar al 100% en ambas**:

### Opción A: Hosting Compartido Web de Hostinger (hPanel / Apache / LiteSpeed)
*Esta es la modalidad más común de hosting web en Hostinger (no requiere servidor Node.js en ejecución).*

1. **Generar la exportación estática:**
   ```bash
   npm run build:export
   ```
   Este comando compilará el sitio y generará la carpeta `out/` con todos los archivos HTML, CSS, JavaScript, `.htaccess`, `sitemap.xml` y `robots.txt`.
2. **Ingresar a Hostinger hPanel:**
   - Ve a **Sitios Web** → Administrar tu dominio.
   - Abre el **Administrador de Archivos** (File Manager).
   - Ingresa a la carpeta raíz pública: `public_html/`.
3. **Subir los archivos:**
   - Comprime el contenido interno de la carpeta `out/` en un archivo `.zip`.
   - Sube el `.zip` a `public_html/` y extrae su contenido.
   - Asegúrate de que `index.html` y `.htaccess` queden directamente dentro de `public_html/` (no en una subcarpeta `out/`).
4. **Verificación:**
   - El archivo `.htaccess` incluido redirigirá automáticamente el tráfico a `https://`, resolverá rutas limpias sin extensión `.html` y configurará la página `404.html`.

### Opción B: Hostinger Cloud o VPS con Node.js
*Si tu plan en Hostinger incluye entorno Node.js o VPS gestionado:*

1. **Configurar el dominio de producción en `.env`:**
   ```bash
   NEXT_PUBLIC_SITE_URL=https://colfgas.com.co
   ```
2. **Compilar la aplicación para servidor Node.js:**
   ```bash
   npm run build
   ```
3. **Iniciar la aplicación con gestor de procesos (ej. PM2):**
   ```bash
   pm2 start npm --name "colfgas" -- start
   ```

---

## 6. Lista de Datos por Confirmar con el Cliente (`[CONFIRMAR CON EL CLIENTE]`)

Para culminar la entrega formal, el cliente debe validar o proporcionar los siguientes ítems:

| Ítem | Estado Actual | Qué debe validarse |
| :--- | :---: | :--- |
| **NIT Oficial** | `[CONFIRMAR]` | Confirmar número oficial con dígito de verificación (ej. 901.XXX.XXX-X). |
| **Líneas Telefónicas** | `[CONFIRMAR]` | Validar si los números de registro (+57 320 827 1724 / +57 318 419 1099) son los oficiales para atención comercial y técnica. |
| **Línea WhatsApp** | `[CONFIRMAR]` | Definir el número móvil exacto que atenderá el canal de WhatsApp Business. |
| **Correo Corporativo** | `[CONFIRMAR]` | Confirmar si se usará `contacto@colfgas.com.co` u otra cuenta para recepción de cotizaciones. |
| **Dirección de Sede** | **Confirmado** | Sede principal: Calle 90 Sur # 4F-33 Este, Bogotá, Colombia (con enlace a Google Maps). |
| **Cobertura Geográfica** | `[CONFIRMAR]` | Alcance exacto de atención (Bogotá, Sabana, Cundinamarca y/o proyectos a nivel nacional). |
| **Fotografías Reales** | `[CONFIRMAR]` | Entregar fotografías autorizadas de proyectos ejecutados o autorizar el uso de las publicadas en Facebook. |
| **Política de Datos** | `[CONFIRMAR]` | Aprobación legal del texto de la Política de Tratamiento de Datos Personales (Ley 1581 de 2012). |

---

## 7. Buenas Prácticas Técnicas y Accesibilidad (WCAG 2.2 AA)

- **Semántica HTML5:** Uso riguroso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` y un único `<h1>` por página.
- **Navegación por Teclado:** Enlace accesible "Saltar al contenido principal" (`.skip-link`) y anillos de foco visibles (`focus-visible:ring-2 focus-visible:ring-[#0878D1]`).
- **Preferencia de Movimiento:** `prefers-reduced-motion` integrado en CSS global para usuarios con sensibilidad vestibular.
- **SEO Técnico:** Metadatos Open Graph, Twitter Cards, `canonical` en cada ruta y datos estructurados JSON-LD (`GeneralContractor`, `BreadcrumbList`).
