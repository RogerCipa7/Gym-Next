'use client'

import { facilities } from '@/lib/data'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function Facilities() {
    return (
        <section id="instalaciones" className="py-24 bg-[#0a0a0a] relative">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <AnimatedSection className="mb-16">
                    <h2 className="text-[#333] font-['Space_Grotesk'] text-lg font-black tracking-[0.2em] uppercase mb-4">
            // Infraestructura Real
                    </h2>
                    <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white">
                        NUESTRAS <span className="text-accent">ZONAS</span> DE BATALLA
                    </h3>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {facilities.map((fac, i) => (
                        <AnimatedSection key={fac.title} delay={i * 0.1}>
                            <motion.div
                                whileHover="hover"
                                initial="initial"
                                className="relative group h-[400px] md:h-[500px] overflow-hidden border-2 border-[#222]"
                            >
                                {/* Background Image */}
                                <motion.img
                                    src={fac.image}
                                    alt={fac.title}
                                    className="w-full h-full object-cover grayscale opacity-60"
                                    variants={{
                                        initial: { scale: 1, filter: 'grayscale(100%) brightness(0.6)' },
                                        hover: { scale: 1.05, filter: 'grayscale(0%) brightness(0.8)' }
                                    }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-[#000]/60 to-transparent" />

                                {/* Content Box */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <div className="w-12 h-1 bg-accent mb-6" />
                                    <h4 className="text-3xl font-black text-white uppercase tracking-tighter font-['Space_Grotesk'] mb-3">
                                        {fac.title}
                                    </h4>
                                    <p className="text-[#aaa] font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {fac.description}
                                    </p>
                                </div>

                                {/* Border effect corners */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
