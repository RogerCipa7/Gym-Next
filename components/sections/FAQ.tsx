'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { motion, AnimatePresence } from 'framer-motion'
import { faqItems } from '@/lib/data'

function FAQItem({ item, index }: { item: typeof faqItems[0]; index: number }) {
    const [open, setOpen] = useState(false)

    return (
        <AnimatedSection delay={index * 0.1}>
            <div className="border-b-2 border-[#222]">
                <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex items-center justify-between gap-6 py-6 sm:py-8 text-left group"
                >
                    <span className={`text-xl sm:text-2xl font-black uppercase tracking-tighter font-['Space_Grotesk'] transition-colors duration-300 ${open ? 'text-accent' : 'text-white group-hover:text-accent'}`}>
                        {item.question}
                    </span>
                    <div className={`shrink-0 w-10 h-10 border-2 flex items-center justify-center transition-colors duration-300 ${open ? 'border-accent text-accent' : 'border-[#444] text-[#888] group-hover:border-accent group-hover:text-accent'}`}>
                        {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                </button>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="pb-8 text-[#888] font-medium leading-relaxed max-w-4xl">
                                {item.answer}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </AnimatedSection>
    )
}

export default function FAQ() {
    return (
        <section id="faq" className="py-24 bg-[#0a0a0a] border-y-2 border-[#222]">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <AnimatedSection className="mb-16">
                    <h2 className="text-[#333] font-['Space_Grotesk'] text-lg font-black tracking-[0.2em] uppercase mb-4">
            // Información Crítica
                    </h2>
                    <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white">
                        PREGUNTAS <span className="text-accent">FRECUENTES</span>
                    </h3>
                </AnimatedSection>

                <div className="border-t-2 border-[#222]">
                    {faqItems.map((item, i) => (
                        <FAQItem key={item.question} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
