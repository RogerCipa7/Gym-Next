'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'

const navLinks = [
    { href: '#instalaciones', label: 'Instalaciones' },
    { href: '#clases', label: 'Clases' },
    { href: '#coaches', label: 'Entrenadores' },
    { href: '#planes', label: 'Membresías' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b-2 border-[#111]' : 'bg-transparent'
                }`}
        >
            <nav className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-24">
                    {/* Brutalist Logo */}
                    <a href="#" className="flex flex-col items-start group">
                        <span className="text-3xl font-black tracking-tighter text-white leading-none group-hover:text-accent transition-colors uppercase font-['Space_Grotesk']">
                            IRON
                        </span>
                        <span className="text-3xl font-black tracking-tighter text-white leading-none group-hover:text-accent transition-colors uppercase font-['Space_Grotesk']">
                            CORE.
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-sm tracking-widest text-[#888] hover:text-white uppercase font-bold transition-all duration-200"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="outline" size="sm" href="#planes">
                            PASE GRATIS
                        </Button>
                        <Button variant="primary" size="sm" href="#planes">
                            ÚNETE AHORA
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 text-white hover:text-accent transition-colors"
                    >
                        {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-[#050505] border-b-2 border-[#222]"
                    >
                        <div className="px-6 py-6 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-2xl font-black uppercase tracking-wider text-white hover:text-accent transition-colors font-['Space_Grotesk']"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="pt-6 border-t border-[#222] flex flex-col gap-4">
                                <Button variant="outline" size="lg" href="#planes" fullWidth>
                                    PASE GRATIS
                                </Button>
                                <Button variant="primary" size="lg" href="#planes" fullWidth>
                                    ÚNETE AHORA
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
