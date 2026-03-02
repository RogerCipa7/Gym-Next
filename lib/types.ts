export interface PricingPlan {
    name: string
    price: number
    period: string
    description: string
    features: string[]
    isPopular?: boolean
    cta: string
}

export interface GymClass {
    id: string
    name: string
    description: string
    duration: string
    intensity: 'Media' | 'Alta' | 'Extrema'
    image: string
}

export interface Trainer {
    id: string
    name: string
    specialty: string
    quote: string
    image: string
    social?: string
}

export interface FAQItem {
    question: string
    answer: string
}

export interface Facility {
    title: string
    description: string
    image: string
}
