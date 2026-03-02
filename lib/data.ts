import type { PricingPlan, GymClass, Trainer, FAQItem, Facility } from './types'

export const facilities: Facility[] = [
    {
        title: 'FORJA DE ACERO',
        description: 'Más de 2000kg en discos olímpicos y mancuernas hasta 60kg. No hay máquinas mágicas, solo hierro bruto esperando ser levantado.',
        image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'ZONA CROSS',
        description: 'Estructura de calistenia de 15 metros, cuerdas de trepa, anillas, cajones pliométricos y asalto aéreo. Espacio diseñado para el rendimiento funcional.',
        image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop',
    },
    {
        title: 'EL RING',
        description: 'Cuadrilátero profesional de boxeo, sacos pesados, speed bags y zona de tatami para artes marciales mixtas y grappling.',
        image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'RECOVERY ROOM',
        description: 'Tinas de hielo, sauna, terapia de percusión y zona de estiramiento. Descansar es parte del entrenamiento.',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop',
    },
]

export const classes: GymClass[] = [
    {
        id: 'crossfit',
        name: 'IRON WOD',
        description: 'Entrenamiento funcional de alta intensidad. Halterofilia, gimnasia y metabolismo en una hora brutal que te llevará al límite.',
        duration: '60 min',
        intensity: 'Extrema',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 'boxing',
        name: 'STRIKING',
        description: 'Técnica de boxeo y muay thai. Golpear sacos, manoplas y trabajo cardiovascular intenso. Aprende a pelear mientas quemas calorías.',
        duration: '50 min',
        intensity: 'Alta',
        image: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1887&auto=format&fit=crop',
    },
    {
        id: 'power',
        name: 'POWERLIFTING V1',
        description: 'Clase enfocada 100% en la técnica y fuerza bruta de los 3 grandes: Sentadilla, Press de Banca y Peso Muerto.',
        duration: '75 min',
        intensity: 'Media',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 'hiit',
        name: 'GRIND CARDIO',
        description: 'Cintas de correr curvas, Assault Bikes, remo y SkiErg mezclados en intervalos explosivos. Terminarás en el suelo.',
        duration: '45 min',
        intensity: 'Extrema',
        image: 'https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=2070&auto=format&fit=crop',
    },
]

export const trainers: Trainer[] = [
    {
        id: 't1',
        name: 'MARCOS "EL TORO" RUIZ',
        specialty: 'Head Coach Powerlifting',
        quote: 'La técnica no es negociable. La fuerza bruta sin control es una lesión asegurada.',
        image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=2070&auto=format&fit=crop',
        social: '@marcos_coach',
    },
    {
        id: 't2',
        name: 'VALERIA GÓMEZ',
        specialty: 'Coach CrossFit / OCR',
        quote: 'Tu mente se rinde mucho antes que tu cuerpo. Mi trabajo es que ignores a tu mente.',
        image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1887&auto=format&fit=crop',
        social: '@valefit_bog',
    },
    {
        id: 't3',
        name: 'ANDRÉS "SHADOW"',
        specialty: 'Coach Boxeo & Striking',
        quote: 'En el ring no hay mentiras. Lo que no entrenaste hoy, te va a golpear mañana.',
        image: 'https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?q=80&w=2070&auto=format&fit=crop',
    },
]

export const pricingPlans: PricingPlan[] = [
    {
        name: 'PASE DIARIO',
        price: 35000,
        period: 'por día',
        description: 'Ven y prueba. Sin contratos, sin ataduras. 24 horas de acceso total.',
        features: [
            'Acceso a todas las instalaciones',
            'Uso de Recovery Room',
            'Acompañamiento básico en piso',
            'Sin matrícula',
        ],
        cta: 'COMPRAR PASE',
    },
    {
        name: 'MEMBRESÍA MENSUAL',
        price: 180000,
        period: 'al mes',
        description: 'El plan de los constantes. Paga mes a mes y cancela cuando quieras.',
        features: [
            'Acceso 24/7 con huella',
            'Clases grupales limitadas (3 a la semana)',
            'Rutina mensual personalizada',
            'Evaluación corporal INBODY',
            'Acceso a Recovery Room',
        ],
        isPopular: true,
        cta: 'ÚNETE HOY',
    },
    {
        name: 'PLAN ANUAL SANGRE Y SUDOR',
        price: 1500000,
        period: 'pago único',
        description: 'Solo para los que están comprometidos de verdad. Ahorras $660.000.',
        features: [
            'Acceso 24/7 irrestricto',
            'Clases grupales ILIMITADAS',
            'Programación de fuerza dedicada',
            'Locker privado asigando',
            '2 Entrenamientos Personales gratis al mes',
            'Camiseta exclusiva "IRON CORE"',
        ],
        cta: 'COMPROMÉTETE',
    },
]

export const faqItems: FAQItem[] = [
    {
        question: 'Nunca he pisado un gimnasio, ¿esto es para mí?',
        answer: 'Sí. Todos empezaron desde ceros. Nuestros entrenadores te enseñarán la técnica exacta antes de ponerte a levantar peso real.',
    },
    {
        question: '¿Hay contratos de permanencia engañosos?',
        answer: 'No. Somos un gimnasio, no un banco. Pagas el mes y entrenas. Si el próximo mes no quieres venir, simplemente no pagas. Cero cláusulas escondidas.',
    },
    {
        question: '¿Qué incluye la valoración INBODY?',
        answer: 'Un escaneo completo de composición corporal: masa muscular, porcentaje de grasa, agua y desbalances. Lo hacemos el día 1 y cada 30 días para medir tu progreso real.',
    },
    {
        question: '¿El gimnasio abre los domingos y festivos?',
        answer: 'El hierro no descansa. Para los usuarios de membresía mensual y anual, el acceso por huella dactilar está habilitado 24/7, los 365 días del año.',
    },
]
