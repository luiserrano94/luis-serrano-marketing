# Luis Serrano Marketing Services — Sitio Web

Sitio web profesional bilingüe (ES/EN) construido con **Next.js 14**, **Tailwind CSS** y **next-intl**.

---

## Instalación local

```bash
# 1. Entrar al directorio
cd luis-serranos-website

# 2. Instalar dependencias
npm install

# 3. Editar variables de entorno
# Abre .env.local y reemplaza los placeholders

# 4. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) — redirige automáticamente a `/es/`.

---

## Configuración requerida

### 1. Web3Forms (formulario de contacto)

El formulario de contacto usa [Web3Forms](https://web3forms.com) — gratuito, sin backend.

1. Ve a [web3forms.com](https://web3forms.com)
2. Ingresa tu email: `serranoluis94.ls@gmail.com`
3. Copia el **Access Key** que te llega por email
4. Abre `.env.local` y reemplaza:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=tu_access_key_aqui
   ```

### 2. Google Analytics 4

1. Crea una propiedad GA4 en [analytics.google.com](https://analytics.google.com)
2. Copia el **Measurement ID** (formato `G-XXXXXXXXXX`)
3. En `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

### 3. Meta Pixel

1. En Business Manager → Events Manager → Pixels
2. Copia el **Pixel ID** (número de 15-16 dígitos)
3. En `.env.local`: `NEXT_PUBLIC_META_PIXEL_ID=tu_pixel_id`

---

## Cómo editar el contenido

Todo el contenido está en:

- **`/messages/es.json`** — Español
- **`/messages/en.json`** — Inglés

Nunca hay texto hardcoded en los componentes. Busca la clave en el JSON y edítala.

---

## Cómo subir la foto de perfil

1. Guarda tu foto como: `/public/images/luis-serrano.jpg`
2. Recomendado: vertical, mínimo 800×1000px, formato JPG
3. La foto aparece automáticamente en la página "Sobre mí"

### Protecciones de imagen implementadas

Las protecciones disuaden a usuarios casuales pero **no son infalibles**:

- ✅ Previene "Guardar imagen como..." en la mayoría de navegadores
- ✅ Deshabilita click derecho y arrastre
- ✅ Agrega marca de agua sutil "LS"
- ✅ Sirve la imagen en calidad web optimizada
- ❌ Un usuario técnico puede ver la URL en DevTools → Network
- ❌ Cualquiera puede tomar un screenshot

**Recomendación:** Sube solo una versión de resolución web (máx. 800px), no la foto original de alta resolución.

---

## Cómo cambiar las URLs de redes sociales

Busca `// TODO: Replace with actual URL` en `/components/Footer.tsx` y reemplaza el `href="#"` con tus URLs reales de Instagram y Facebook.

---

## Deploy en Vercel

1. Sube el proyecto a GitHub
2. En [vercel.com](https://vercel.com) → New Project → importa tu repo
3. Agrega las variables de entorno en Vercel Dashboard:
   - `NEXT_PUBLIC_WEB3FORMS_KEY`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_META_PIXEL_ID`
4. Click en **Deploy**
5. Agrega tu dominio en Settings → Domains

---

## Estructura del proyecto

```
/app/[locale]/       — Páginas (home, services, about, contact, privacy)
/components/         — Componentes React
/components/sections/ — Secciones de la página de inicio
/messages/           — Contenido ES y EN (es.json, en.json)
/lib/countries.ts    — Lista de países con códigos telefónicos
/public/images/      — Imágenes (sube luis-serrano.jpg aquí)
```

## Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Producción local
npm run lint     # Lint
```
