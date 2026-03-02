'use client'

import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

export default function CTAFinal() {
    return (
        <section className="py-32 bg-accent relative overflow-hidden">
            {/* Brutalist diagonal stripes background */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
            />

            <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
                <AnimatedSection>
                    <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none font-['Space_Grotesk'] mb-6">
                        TU EXCUSA MUERE <br className="hidden md:block" />
                        <span className="text-white">HOY AQUÍ.</span>
                    </h2>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <p className="text-xl sm:text-2xl text-black font-bold uppercase tracking-widest max-w-3xl mx-auto mb-12">
                        Reclama tu primer día gratis. Si sobrevives, hablamos de la membresía.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.2} className="flex justify-center">
                    <Button
                        variant="primary"
                        size="xl"
                        href="#planes"
                        className="bg-black text-white hover:bg-[#222] hover:text-accent shadow-2xl shadow-black/50"
                    >
                        RECLAMAR PASE GRATIS
                        <ArrowRight className="w-6 h-6" />
                    </Button>
                </AnimatedSection>
            </div>
        </section>
    )
}
