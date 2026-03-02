'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { Dumbbell, Flame, Trophy } from 'lucide-react'

const principles = [
    {
        icon: Flame,
        title: 'CERO EXCUSAS',
        text: 'Entramos, trabajamos y salimos. Respetamos tu tiempo y el nuestro. La constancia es el único camino al resultado.',
    },
    {
        icon: Dumbbell,
        title: 'HIERRO REAL',
        text: 'Aquí no vas a encontrar máquinas llenas de pantallas distraídas. Solo barras olímpicas, discos y racks de potencia reales.',
    },
    {
        icon: Trophy,
        title: 'COMUNIDAD INQUEBRANTABLE',
        text: 'Estarás rodeado de personas que buscan superar sus límites cada día. Competimos contra nosotros mismos, entrenamos como equipo.',
    },
]

export default function Concept() {
    return (
        <section className="bg-[#050505] py-32 border-b border-[#222] relative">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-20">

                    <AnimatedSection direction="up">
                        <h2 className="text-[#333] font-['Space_Grotesk'] text-lg font-black tracking-[0.2em] uppercase mb-6">
              // Nuestro Manifiesto
                        </h2>
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1] text-white">
                            No somos un <span className="text-transparent stroke-text">club social.</span><br />
                            Somos una <span className="text-accent">forja.</span>
                        </h3>

                        <div className="mt-10 h-1 w-24 bg-accent" />

                        <p className="mt-10 text-xl text-[#888] font-medium leading-relaxed max-w-xl">
                            IRON CORE fue fundado con un objetivo simple: devolverle al entrenamiento su naturaleza cruda.
                            Nos cansamos de los gimnasios de colores pastel donde la gente va a tomarse fotos.
                            <br /><br />
                            Aquí vienes a construir la mejor versión de ti mismo.
                        </p>
                    </AnimatedSection>

                    <div className="flex flex-col gap-10 lg:pt-20">
                        {principles.map((p, i) => (
                            <AnimatedSection key={p.title} delay={i * 0.15} direction="left">
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex gap-6 items-start group border-l-2 border-[#222] pl-6 hover:border-accent transition-colors duration-300"
                                >
                                    <div className="w-14 h-14 bg-[#111] border-2 border-[#222] flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300 shrink-0">
                                        <p.icon className="w-6 h-6 text-[#666] group-hover:text-black" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black tracking-tight uppercase font-['Space_Grotesk'] text-white mb-2">
                                            {p.title}
                                        </h4>
                                        <p className="text-[#888] font-medium leading-relaxed">
                                            {p.text}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
