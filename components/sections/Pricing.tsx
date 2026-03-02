'use client'

import { pricingPlans } from '@/lib/data'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import { Check } from 'lucide-react'

const formatCOP = (value: number) =>
    new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(value)

export default function Pricing() {
    return (
        <section id="planes" className="py-24 bg-[#050505] border-y-2 border-[#222] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,43,0.05)_0%,transparent_50%)]" />

            <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-[#333] font-['Space_Grotesk'] text-lg font-black tracking-[0.2em] uppercase mb-4">
            // Sin letras pequeñas
                    </h2>
                    <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white">
                        ELIGE TU <span className="text-accent">COMPROMISO</span>
                    </h3>
                    <p className="mt-6 text-[#888] font-medium max-w-xl mx-auto">
                        Planes claros y directos. Paga por lo que usas, entra cuando quieras.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, i) => (
                        <AnimatedSection key={plan.name} delay={i * 0.1}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                className={`flex flex-col h-full bg-[#0a0a0a] border-2 p-8 transition-colors ${plan.isPopular ? 'border-accent shadow-[0_0_40px_rgba(255,107,43,0.1)]' : 'border-[#222] hover:border-[#444]'
                                    }`}
                            >
                                {/* Header */}
                                <div className="mb-8">
                                    {plan.isPopular && (
                                        <span className="inline-block px-3 py-1 bg-accent text-[#000] text-xs font-black tracking-widest uppercase mb-4">
                                            Recomendado
                                        </span>
                                    )}
                                    <h4 className="text-2xl font-black text-white uppercase tracking-tighter font-['Space_Grotesk'] mb-2">
                                        {plan.name}
                                    </h4>
                                    <p className="text-[#888] font-medium text-sm leading-relaxed h-10">
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="mb-8 pb-8 border-b-2 border-[#222]">
                                    <div className="flex items-end gap-2">
                                        <span className="text-5xl font-black text-white uppercase tracking-tighter font-['Space_Grotesk']">
                                            {formatCOP(plan.price)}
                                        </span>
                                    </div>
                                    <span className="text-accent font-bold tracking-widest text-sm uppercase mt-1 block">
                                        {plan.period}
                                    </span>
                                </div>

                                {/* Features */}
                                <ul className="flex-1 space-y-4 mb-10">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 bg-[#111] border border-[#333] flex items-center justify-center shrink-0">
                                                <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                                            </div>
                                            <span className="text-[#ccc] font-medium text-sm leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <Button
                                    variant={plan.isPopular ? 'primary' : 'outline'}
                                    size="lg"
                                    fullWidth
                                >
                                    {plan.cta}
                                </Button>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
