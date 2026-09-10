export type Locale = "es" | "en";

const CARTIER =
  "Jewels of the Jaguar is an independent, non-commercial artistic project inspired by a Cartier campaign. It was created solely as a creative exploration and portfolio piece and is not commissioned by, affiliated with, or endorsed by Cartier.";

export const CONTENT = {
  en: {
    nav: { work: "Work", services: "Services", resources: "Resources", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "AI + Creative",
      title: "Creative direction, built with AI.",
      sub: "AI-generated visuals, campaign concepts and visual worlds for brands, products and ideas.",
      viewWork: "View Selected Work",
      startProject: "Start a Project",
    },
    work: { label: "Selected Work", indexTitle: "Selected Work", indexIntro: "Four visual worlds. Concept, art direction and final imagery, developed end to end." },
    projectNav: { prev: "Previous project", next: "Next project", back: "Back to work", viewGallery: "View gallery" },
    positioning: {
      title: "Not prompts. Creative direction.",
      body: "AI is used as a production medium to develop visual concepts, campaigns and imagery that would traditionally require much larger productions.",
    },
    services: {
      label: "Services",
      title: "Two ways to work together.",
      sprint: { name: "AI Visual Sprint", price: "From $450", desc: "Creative direction, concept development and roughly six finished visuals, selected and refined." },
      campaign: { name: "AI Campaign Concept", price: "Custom scope", desc: "Editorial worlds and full visual narratives, developed and directed end to end." },
    },
    about: {
      label: "About",
      body: "Luis Serrano is a marketer and creative working at the intersection of AI, visual culture and brand building. His work explores how emerging creative tools can turn ideas into fully realized visual worlds.",
    },
    contact: {
      title: "Have something in mind?",
      sub: "Tell me what you're building.",
      fields: { name: "Name", email: "Email", company: "Company / Brand", assets: "Number of assets", brief: "What are you looking to create?", timeline: "Timeline", budget: "Budget" },
      submit: "Submit Project",
      sending: "Sending...",
      thanksTitle: "Thanks. I'll be in touch shortly.",
      thanksNote: "I read every message personally.",
      errorNote: "Something went wrong. Please email me directly.",
    },
    gallery: { images: "images", close: "Close", viewProject: "View project" },
    cartier: CARTIER,
    projects: {
      jaguars: { title: "Jaguars & Jewelry", category: "Luxury Campaign Concept", line: "Power, worn well.", intro: "A study in power, elegance and timeless beauty. A conceptual campaign inspired by the world of luxury jewelry and the iconic panther." },
      pacific: { title: "Pacific, 1978", category: "Architectural Visual Story", line: "Architecture as a feeling.", intro: "A love letter to the California coast and the architecture of the 1970s. Sun, texture, space and a slower way of living." },
      afterdark: { title: "After Dark", category: "Editorial Photography", line: "Fragments from one night.", intro: "A visual story of a night out. Elegance, indulgence and human connection captured with the feeling of another era." },
      animalprint: { title: "Animal Print", category: "Fashion Editorial", line: "Instinct, indoors.", intro: "Wild animals in domestic interiors. A visual exploration of instinct and elegance, where untamed nature meets the familiar." },
    },
    footer: { descriptor: "AI + Creative", worldwide: "Working worldwide", location: "Ciudad Juárez, Mexico", instagram: "Instagram", email: "Email" },
    whatsapp: { label: "WhatsApp", cta: "Message on WhatsApp", message: "Hi Luis, I have a project in mind." },
    resources: { label: "Resources", title: "Resources", intro: "Tools, workflows and experiments from my AI creative process.", soon: "Coming soon." },
  },
  es: {
    nav: { work: "Trabajo", services: "Servicios", resources: "Recursos", about: "Acerca", contact: "Contacto" },
    hero: {
      eyebrow: "AI + Creative",
      title: "Dirección creativa, hecha con IA.",
      sub: "Visuales generados con IA, conceptos de campaña y mundos visuales para marcas, productos e ideas.",
      viewWork: "Ver trabajo seleccionado",
      startProject: "Iniciar un proyecto",
    },
    work: { label: "Trabajo seleccionado", indexTitle: "Trabajo seleccionado", indexIntro: "Cuatro mundos visuales. Concepto, dirección de arte e imagen final, desarrollados de principio a fin." },
    projectNav: { prev: "Proyecto anterior", next: "Proyecto siguiente", back: "Volver al trabajo", viewGallery: "Ver galería" },
    positioning: {
      title: "No prompts. Dirección creativa.",
      body: "La IA se usa como medio de producción para desarrollar conceptos visuales, campañas e imágenes que tradicionalmente exigirían producciones mucho mayores.",
    },
    services: {
      label: "Servicios",
      title: "Dos formas de trabajar juntos.",
      sprint: { name: "AI Visual Sprint", price: "Desde $450", desc: "Dirección creativa, desarrollo de concepto y alrededor de seis visuales finales, seleccionados y refinados." },
      campaign: { name: "AI Campaign Concept", price: "Alcance a medida", desc: "Mundos editoriales y narrativas visuales completas, desarrolladas y dirigidas de principio a fin." },
    },
    about: {
      label: "Acerca",
      body: "Luis Serrano es mercadólogo y creativo que trabaja en la intersección de la IA, la cultura visual y la construcción de marca. Su trabajo explora cómo las herramientas creativas emergentes convierten ideas en mundos visuales completos.",
    },
    contact: {
      title: "¿Tienes algo en mente?",
      sub: "Cuéntame qué estás construyendo.",
      fields: { name: "Nombre", email: "Correo", company: "Empresa / Marca", assets: "Número de piezas", brief: "¿Qué buscas crear?", timeline: "Tiempos", budget: "Presupuesto" },
      submit: "Enviar proyecto",
      sending: "Enviando...",
      thanksTitle: "Gracias. Te contacto muy pronto.",
      thanksNote: "Leo cada mensaje personalmente.",
      errorNote: "Algo salió mal. Escríbeme directamente por correo.",
    },
    gallery: { images: "imágenes", close: "Cerrar", viewProject: "Ver proyecto" },
    cartier: CARTIER,
    projects: {
      jaguars: { title: "Jaguars & Jewelry", category: "Concepto de campaña de lujo", line: "El poder, bien llevado.", intro: "Un estudio sobre el poder, la elegancia y la belleza atemporal. Una campaña conceptual inspirada en el mundo de la alta joyería y la icónica pantera." },
      pacific: { title: "Pacific, 1978", category: "Historia visual arquitectónica", line: "La arquitectura como sensación.", intro: "Una carta de amor a la costa de California y a la arquitectura de los años setenta. Sol, textura, espacio y una forma más pausada de vivir." },
      afterdark: { title: "After Dark", category: "Fotografía editorial", line: "Fragmentos de una noche.", intro: "La historia visual de una noche. Elegancia, placer y conexión humana capturados con la sensación de otra época." },
      animalprint: { title: "Animal Print", category: "Editorial de moda", line: "Instinto, de puertas adentro.", intro: "Animales salvajes en interiores domésticos. Una exploración visual del instinto y la elegancia, donde la naturaleza indómita se encuentra con lo familiar." },
    },
    footer: { descriptor: "AI + Creative", worldwide: "Trabajando en todo el mundo", location: "Ciudad Juárez, México", instagram: "Instagram", email: "Correo" },
    whatsapp: { label: "WhatsApp", cta: "Escríbeme por WhatsApp", message: "Hola Luis, tengo un proyecto en mente." },
    resources: { label: "Recursos", title: "Recursos", intro: "Herramientas, flujos y experimentos de mi proceso creativo con IA.", soon: "Muy pronto." },
  },
} as const;

export function getContent(locale: string) {
  return CONTENT[locale === "en" ? "en" : "es"];
}
