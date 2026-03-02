'use client'

import { trainers } from '@/lib/data'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function Trainers() {
    return (
        <section id="coaches" className="py-24 bg-[#0a0a0a] relative">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <AnimatedSection className="mb-16 text-center">
                    <h2 className="text-[#333] font-['Space_Grotesk'] text-lg font-black tracking-[0.2em] uppercase mb-4">
            // Liderazgo Técnico
                    </h2>
                    <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white">
                        NUESTROS <span className="text-accent">COACHES</span>
                    </h3>
                    <p className="mt-6 text-[#888] font-medium max-w-xl mx-auto">
                        Atletas de alto rendimiento dedicados a forjar la mejor versión de ti.
                        Su experiencia es la garantía de tus resultados.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trainers.map((trainer, i) => (
                        <AnimatedSection key={trainer.id} delay={i * 0.15}>
                            <motion.div
                                whileHover="hover"
                                initial="initial"
                                className="group relative flex flex-col h-[500px] overflow-hidden bg-[#111] border-2 border-[#222] transition-colors hover:border-accent"
                            >
                                {/* Photo */}
                                <div className="relative h-[65%] w-full overflow-hidden">
                                    <motion.img
                                        src={trainer.image}
                                        alt={trainer.name}
                                        className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                                    />
                                    {/* Divider stripe */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                </div>

                                {/* Info */}
                                <div className="relative flex flex-col h-[35%] p-6 pt-5 bg-[#0a0a0a] z-10">
                                    <p className="text-accent font-black tracking-widest text-xs uppercase mb-1">
                                        {trainer.specialty}
                                    </p>
                                    <h4 className="text-2xl font-black text-white uppercase tracking-tighter font-['Space_Grotesk'] mb-3">
                                        {trainer.name}
                                    </h4>
                                    <p className="text-[#888] font-medium text-sm leading-relaxed italic line-clamp-3">
                                        "{trainer.quote}"
                                    </p>

                                    {trainer.social && (
                                        <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-[#555] font-bold text-xs uppercase tracking-widest hover:text-white cursor-pointer transition-colors">
                                                {trainer.social}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
