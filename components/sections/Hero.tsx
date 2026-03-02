'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ArrowDownRight } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-40 overflow-hidden bg-black">
            {/* Background image & overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                    alt="Gym background"
                    className="w-full h-full object-cover opacity-40 grayscale"
                />
                {/* Brutalist gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">

                    {/* Main Typography Area */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="flex flex-col uppercase font-['Space_Grotesk']">
                                <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[140px] font-black leading-[0.85] tracking-tighter text-white">
                                    HIERRO Y
                                </span>
                                <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[140px] font-black leading-[0.85] tracking-tighter text-transparent stroke-text">
                                    DISCIPLINA
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-8 max-w-xl text-lg sm:text-xl text-[#aaa] font-medium leading-relaxed"
                        >
                            El centro de entrenamiento definitivo en Bogotá. Maquinaria de élite, pesos libres ilimitados y la mejor comunidad. Aquí no hay excusas.
                        </motion.p>
                    </div>

                    {/* Call to Action Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-6 md:min-w-[300px]"
                    >
                        <div className="p-6 border-2 border-[#222] bg-[#0a0a0a]/80 backdrop-blur-sm">
                            <p className="font-['Space_Grotesk'] text-accent font-bold tracking-widest uppercase mb-2">
                                Pase de prueba
                            </p>
                            <p className="text-white text-3xl font-black mb-6">
                                1 DÍA GRATIS
                            </p>
                            <Button variant="primary" size="lg" fullWidth href="#planes">
                                RECLAMAR PASE
                                <ArrowDownRight className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Micro stats */}
                        <div className="grid grid-cols-2 gap-4 border-t-2 border-[#222] pt-6">
                            <div>
                                <span className="block text-2xl font-black text-white font-['Space_Grotesk']">24/7</span>
                                <span className="text-xs text-[#666] uppercase font-bold tracking-wider">Acceso Total</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-black text-white font-['Space_Grotesk']">+3K</span>
                                <span className="text-xs text-[#666] uppercase font-bold tracking-wider">Mts Cua.</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
