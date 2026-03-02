'use client'

import { classes } from '@/lib/data'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Clock, Activity } from 'lucide-react'

export default function Classes() {
    return (
        <section id="clases" className="py-24 bg-[#0a0a0a] border-y-2 border-[#222] relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none opacity-50" />

            <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 z-10">
                <AnimatedSection direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <h2 className="text-[#333] font-['Space_Grotesk'] text-lg font-black tracking-[0.2em] uppercase mb-4">
              // Rendimiento puro
                        </h2>
                        <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white">
                            NUESTRAS <span className="text-accent">CLASES</span> GRUPALES
                        </h3>
                    </div>
                    <p className="text-[#888] font-medium max-w-sm">
                        Programación de élite para llevar tu cuerpo y mente al límite. Cupos limitados por clase para garantizar técnica perfecta.
                    </p>
                </AnimatedSection>

                <div className="flex flex-col">
                    {classes.map((c, i) => (
                        <AnimatedSection key={c.id} delay={i * 0.1}>
                            <motion.div
                                whileHover="hover"
                                initial="initial"
                                className="group relative flex flex-col md:flex-row items-center justify-between border-t-2 border-[#222] py-8 sm:py-12 px-4 transition-colors hover:bg-[#111]"
                            >
                                {/* Floating Image on Hover (Desktop only) */}
                                <motion.img
                                    src={c.image}
                                    alt={c.name}
                                    variants={{
                                        initial: { opacity: 0, scale: 0.8, x: -50 },
                                        hover: { opacity: 1, scale: 1, x: 0 }
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="hidden lg:block absolute left-[35%] w-[350px] h-[220px] object-cover grayscale border-4 border-[#222] z-20 pointer-events-none origin-left"
                                />

                                {/* Left Side: Name and Number */}
                                <div className="w-full md:w-1/3 flex items-center gap-6 mb-6 md:mb-0">
                                    <span className="text-5xl font-['Space_Grotesk'] font-black text-transparent stroke-text opacity-30 group-hover:opacity-100 transition-opacity">
                                        0{i + 1}
                                    </span>
                                    <h4 className="text-3xl font-black uppercase tracking-tighter text-white font-['Space_Grotesk'] group-hover:text-accent transition-colors">
                                        {c.name}
                                    </h4>
                                </div>

                                {/* Middle: Description */}
                                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                                    <p className="text-[#888] font-medium leading-relaxed">
                                        {c.description}
                                    </p>
                                </div>

                                {/* Right Side: Meta Data */}
                                <div className="w-full md:w-1/4 flex items-center justify-start md:justify-end gap-6">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-accent" />
                                        <span className="text-white font-bold tracking-wider">{c.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Activity className="w-5 h-5 text-accent" />
                                        <span className="text-white font-bold tracking-wider">{c.intensity}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                    {/* Bottom border for the last item */}
                    <div className="border-t-2 border-[#222]" />
                </div>
            </div>
        </section>
    )
}
