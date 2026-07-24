# 🇵🇪 Bajar de Peso con Comida Peruana

Landing page de ventas + guía completa (PDF/DOCX) para bajar de peso con comida peruana tradicional, económica y saludable.

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38B2AC) ![MercadoPago](https://img.shields.io/badge/MercadoPago-Checkout_Pro-00B1EA)

---

## 📦 Qué incluye este repositorio

| Componente | Descripción |
|---|---|
| 🚀 **Landing page** | Next.js 16 + Tailwind 4 + shadcn/ui. Optimizada para conversión con todos los elementos de venta: oferta flash, contador regresivo, testimonios, prueba social, FAQ, garantía y CTA persistente. |
| 💳 **Checkout Pro** | Integración con MercadoPago Checkout Pro (API `/api/checkout`) que crea la preferencia y redirige al usuario al flujo seguro de pago. Funciona en **modo DEMO** si no hay token configurado. |
| 📖 **Guía completa** | Documento de 40 páginas en PDF y DOCX (editable en Canva) con 11 secciones: mentalidad, lista de compras, plan 21 días, recetas hackeadas, estilo de vida, antojos, bonus de tracking, calculadora IMC y conclusión. |
| 🛠️ **Scripts de generación** | Scripts en JavaScript (usando `docx`) que generan la guía desde cero. Útil para regenerar el documento si se edita el contenido. |

---

## 💰 Modelo de negocio

- **Producto digital**: Guía "Saber Peruano, Cuerpo Saludable" (PDF + DOCX)
- **Precio regular**: S/300 PEN
- **Precio oferta flash**: S/30 PEN (90% descuento)
- **Conversión**: Checkout Pro de MercadoPago (Yape/Plin/Tarjetas)
- **Entrega**: Descarga inmediata tras pago aprobado

---

## 🎨 Identidad visual

Paleta inspirada en los colores tierra peruanos:

| Token | Color | Uso |
|---|---|---|
| `--terracota` | `#7A2E1F` | Color primario, títulos |
| `--amber` | `#D9822B` | Acentos, CTAs, highlights |
| `--cream` | `#FFF4E6` | Fondos cálidos |
| `--verde` | `#4A7C3A` | Salud, beneficios |
| `--rojo-soft` | `#C0392B` | Urgencia, alertas |

Tipografías: **Inter** (UI) + **Playfair Display** (titulares editoriales).

---

## 🚀 Instalación y uso

### 1. Clonar e instalar dependencias

```bash
git clone https://github.com/profastpage/bajar-de-peso.git
cd bajar-de-peso
bun install   # o: npm install / pnpm install
```

### 2. Configurar variables de entorno

```bash
cp .env.example .env
# Editar .env y poner tu MERCADO_PAGO_ACCESS_TOKEN real
```

### 3. Modo desarrollo

```bash
bun run dev
# Abrir http://localhost:3000
```

### 4. Build de producción

```bash
bun run build
bun run start
```

---

## 🧩 Estructura del proyecto

```
.
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Landing page completa (~1400 líneas)
│   │   ├── layout.tsx               # Layout raíz con fuentes y metadatos
│   │   ├── globals.css              # Estilos globales + paleta peruana
│   │   └── api/
│   │       ├── checkout/route.ts    # Endpoint MercadoPago Checkout Pro
│   │       └── route.ts             # Health check
│   ├── components/ui/               # Componentes shadcn/ui
│   ├── hooks/
│   │   ├── use-countdown.ts         # Hook contador regresivo
│   │   ├── use-toast.ts             # Notificaciones
│   │   └── use-mobile.ts            # Detección responsive
│   └── lib/
│       ├── utils.ts                 # cn() y utilidades
│       └── db.ts                    # Cliente Prisma
├── scripts/
│   ├── generate_guia.js             # Helpers de formato docx
│   ├── content_part1.js             # Portada + intro + Cap 1
│   ├── content_part2.js             # Cap 2 (compras) + Cap 3 (21 días)
│   ├── content_part3.js             # Cap 4 (recetas) + Cap 5 (estilo) + Cap 6 (antojos)
│   └── build_doc.js                 # Ensamblador final + bonus + conclusión
├── download/
│   ├── Guia_Bajar_Peso_Comida_Peruana.pdf
│   ├── Guia_Bajar_Peso_Comida_Peruana.docx
│   └── landing-*.png                # Screenshots de la landing
├── prisma/schema.prisma
├── public/
├── .env.example
├── package.json
└── README.md
```

---

## 🔄 Cómo regenerar la guía DOCX/PDF

```bash
cd scripts
node build_doc.js
# Genera: ../download/Guia_Bajar_Peso_Comida_Peruana.docx

# Para PDF (requiere LibreOffice):
libreoffice --headless --convert-to pdf \
  --outdir ../download/ \
  ../download/Guia_Bajar_Peso_Comida_Peruana.docx
```

---

## 💳 Cómo activar MercadoPago Checkout Pro (real)

1. Crear cuenta vendedora en [MercadoPago Developers](https://www.mercadopago.com.pe/developers/panel/app).
2. Crear una aplicación y copiar el **Access Token**.
3. Pegarlo en `.env`:
   ```
   MERCADO_PAGO_ACCESS_TOKEN=APP_USR-xxxxxx...
   NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
   ```
4. Reiniciar el server. La landing ya no estará en modo DEMO y cobrará de verdad.
5. (Opcional) Configurar webhook en `/api/webhooks/mercadopago` para confirmar pagos y entregar el PDF automáticamente.

---

## ✨ Características de la landing

- ⚡ **Hero impactante** con título, subtítulo, rating de estrellas y doble CTA
- ⏰ **Contador regresivo** funcional (24h, persistente con localStorage)
- 💸 **Ancla de precio**: tachado S/300 → S/30 (90% OFF)
- ⭐ **Testimonios** con avatar, nombre, ciudad y estrellas
- 📚 **Listado de capítulos** con iconos y descripción de valor
- 🎁 **Bonus ultra pro** destacado (calculadora IMC + tracking 21 días)
- ❓ **FAQ** desplegable con objeciones comunes
- 🛡️ **Garantía de 7 días** + seguridad de pago
- 📱 **100% responsive** con CTA sticky en mobile
- 🎨 **Animaciones suaves** con framer-motion
- 🔒 **Checkout Pro** integrado (modal de confirmación post-pago)

---

## 🛣️ Roadmap / futuras mejoras

Ver sección **Roadmap** al final del chat para el plan detallado de mejoras.

---

## 📄 Licencia

Uso comercial privado. Todos los derechos reservados.

## 👤 Autor

Generado como proyecto de venta digital de guía nutricional enfocada en comida peruana tradicional.
