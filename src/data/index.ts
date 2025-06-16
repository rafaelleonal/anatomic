export const services = [
  {
    id: "orthopedics",
    title: "Consulta y asesoría ortopédica y terapia física",
    description:
      "Ofrecemos una amplia gama de servicios de ortopedia y terapia física, incluyendo evaluaciones, tratamientos y rehabilitación.",
  },
  {
    id: "surgical-programming",
    title: "Programación quirúrgica",
    description:
      "Programación de tratamientos y rehabilitación para una recuperación más rápida y efectiva.",
  },
  {
    id: "training-evaluation",
    title:
      "Programas de entrenamiento, evaluación de fuerza y composición corporal",
    description:
      "Evaluación de fuerza y composición corporal para mejorar tu rendimiento y salud.",
  },
  {
    id: "nutritional-advisory",
    title: "Asesoría nutrimental y en suplementos deportivos",
    description:
      "Asesoría nutrimental y en suplementos deportivos para optimizar tu rendimiento y recuperación.",
  },
];

export const subBrands = [
  {
    title: "AN–ATOMIC SPORTS",
    description: "Rendimiento físico, entrenamiento y deporte.",
    services: [
      "Training: Rutinas / Planes de entrenamiento",
      "Equipment: Equipos de entrenamiento: Maquinas, accesorios, etc.",
    ],
    image: "/images/sub-brands/anatomic-sports.jpg",
    isReady: false,
  },
  {
    title: "AN–ATOMIC ORTHOPAEDICS",
    description: "Innovación médica, tecnología y salud musculoesquelética.",
    services: [
      "ARTROSCOPIA Y ORTOPEDIA DEPORTIVA  (consulta, asesoría programación quirúrgica, preguntas y respuestas a ortopedistas con alta especialidad",
      "CIRUGÍA ORTOPÉDICA  (Fracturas, esguinces, luxaciones, prótesis de cadera y rodilla)",
      "T- SHOULD (Playera ortopédica para rehabilitación de hombro)",
      "X- AM Mesas de exploración avanzada para consulta ortopédica perfecta",
    ],
    isReady: true,
    image: "/images/sub-brands/anatomic-orthoapedics.jpg",
  },
  {
    title: "AN–ATOMIC MINDSET",
    description: "Psicología del éxito, mentalidad resiliente y enfoque.",
    image: "/images/sub-brands/anatomic-mindset.jpg",
    isReady: false,
  },
  {
    title: "AN–ATOMIC WEAR",
    description: "Ropa con diseño funcional, moderno e inspirador.",
    image: "/images/sub-brands/anatomic-wear.jpg",
    isReady: false,
  },
  {
    title: "AN–ATOMIC NUTRITION",
    description: "Suplementos y alimentación funcional con base científica.",
    services: ["Suplementos deportivos", "Proteina", "Creatina", "Cafeina"],

    image: "/images/sub-brands/anatomic-nutrition.jpg",
    isReady: false,
  },
  {
    title: "AN–ATOMIC ART",
    description: "Expresión visual, identidad y creatividad con propósito.",
    image: "/images/sub-brands/anatomic-art.jpg",
    isReady: false,
  },
];

export const headerLinks = [
  {
    href: "#submarcas",
    label: "Submarcas",
  },
  {
    href: "#servicios",
    label: "Servicios",
  },
  {
    href: "#testimonios",
    label: "Testimonios",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
  {
    href: "#contacto",
    label: "Contacto",
  },
];

export const testimonials = [
  {
    name: "Iván",
    role: "Cliente de Ortopedia",
    testimonial:
      "Excelente profesional, atención excepcional. Demostró una gran capacidad para entender mi situación y necesidades. Su explicación clara y detallada me permitió comprender mi condición y las opciones de tratamiento",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Ana Figueroa",
    role: "Cliente de Artroscopia",
    testimonial:
      "Excelente explicación y super amable. Fuimos mi hija por un esguince que no sabíamos si era fractura y muy cuidadoso en la valoración. Yo fui a un chequeo general porque tengo varios padecimientos y tuve fractura de columna y reviso perfecto mis estudios actuales y pasados para comparar con mucha paciencia y gran explicación. Simplemente muy recomendable",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Laura Martínez",
    role: "Cliente de Terapia",
    testimonial:
      "Después de mi lesión, pensé que no podría volver a entrenar. Gracias a la rehabilitación en AN-ATOMIC ORTHOPAEDICS, no solo me recuperé sino que estoy más fuerte que antes.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

export const faq = [
  {
    question: "¿Cómo puedo comenzar con Anatomic?",
    answer:
      "Para comenzar, puedes contactarnos a través de WhatsApp o completar el formulario en nuestra página. Un asesor te contactará para programar una evaluación inicial y determinar el mejor plan para ti.",
  },
  {
    question: "¿Ofrecen planes personalizados?",
    answer:
      "Sí, todos nuestros servicios son personalizados según tus necesidades, objetivos y condición actual. Trabajamos de manera individual para garantizar los mejores resultados.",
  },
  {
    question: "¿Cuánto tiempo se necesita para ver resultados?",
    answer:
      "Los resultados varían según cada persona y sus objetivos específicos. Sin embargo, la mayoría de nuestros clientes comienzan a notar cambios positivos dentro de las primeras 4-6 semanas de seguir nuestros programas consistentemente.",
  },
  {
    question:
      "¿Trabajan con personas que tienen lesiones o condiciones médicas?",
    answer:
      "Sí, nuestro equipo incluye profesionales especializados en rehabilitación y manejo de condiciones médicas. Siempre recomendamos consultar con tu médico antes de comenzar cualquier programa nuevo.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos tarjetas de crédito/débito, transferencias bancarias y efectivo. También ofrecemos planes de pago para algunos de nuestros programas a largo plazo.",
  },
];
