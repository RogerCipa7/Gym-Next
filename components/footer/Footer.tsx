'use client'

import { useState } from 'react'
import { MapPin, Mail, Phone, Github, Linkedin, Globe } from 'lucide-react'
import Modal from '@/components/ui/Modal'

export default function Footer() {
    const [isTermsOpen, setIsTermsOpen] = useState(false)
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

    return (
        <footer className="bg-[#050505] border-t-2 border-[#222]">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Brand Info */}
                    <div className="lg:col-span-5">
                        <a href="#" className="flex flex-col items-start group mb-6">
                            <span className="text-3xl font-black tracking-tighter text-white leading-none group-hover:text-accent transition-colors uppercase font-['Space_Grotesk']">
                                IRON
                            </span>
                            <span className="text-3xl font-black tracking-tighter text-white leading-none group-hover:text-accent transition-colors uppercase font-['Space_Grotesk']">
                                CORE.
                            </span>
                        </a>
                        <p className="text-[#888] font-medium leading-relaxed max-w-sm mb-8">
                            El centro de entrenamiento definitivo. Sin excusas, sin distracciones. Solo disciplina y resultados.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://portafoliorc.netlify.app/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#111] border-2 border-[#222] flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300">
                                <Globe className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/rogercipa7" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#111] border-2 border-[#222] flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/roger-cipagauta-b1626b329/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#111] border-2 border-[#222] flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-black uppercase tracking-widest font-['Space_Grotesk'] mb-6">
                            Navegación
                        </h4>
                        <ul className="space-y-4">
                            <li><a href="#instalaciones" className="text-[#888] hover:text-white font-bold uppercase text-sm tracking-wider transition-colors">Instalaciones</a></li>
                            <li><a href="#clases" className="text-[#888] hover:text-white font-bold uppercase text-sm tracking-wider transition-colors">Clases</a></li>
                            <li><a href="#coaches" className="text-[#888] hover:text-white font-bold uppercase text-sm tracking-wider transition-colors">Entrenadores</a></li>
                            <li><a href="#planes" className="text-[#888] hover:text-white font-bold uppercase text-sm tracking-wider transition-colors">Membresías</a></li>
                        </ul>
                    </div>

                    {/* Contacto & Ubicación */}
                    <div className="lg:col-span-4">
                        <h4 className="text-white font-black uppercase tracking-widest font-['Space_Grotesk'] mb-6">
                            Ubicación & Contacto
                        </h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-accent shrink-0" />
                                <div>
                                    <p className="text-white font-bold uppercase tracking-wider mb-1">Dirección</p>
                                    <p className="text-[#888] text-sm leading-relaxed">
                                        Calle 85 # 12-45<br />
                                        Zona T, Bogotá, Colombia
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <p className="text-[#888] text-sm font-bold tracking-wider">
                                    +57 (300) 123-4567
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <p className="text-[#888] text-sm font-bold tracking-wider uppercase">
                                    info@ironcore.co
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t-2 border-[#111] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[#666] text-sm font-bold uppercase tracking-wider">
                        © {new Date().getFullYear()} Iron Core Gym
                    </p>
                    <div className="flex gap-6">
                        <button
                            onClick={() => setIsTermsOpen(true)}
                            className="text-[#666] hover:text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                        >
                            Términos
                        </button>
                        <button
                            onClick={() => setIsPrivacyOpen(true)}
                            className="text-[#666] hover:text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                        >
                            Privacidad
                        </button>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <Modal
                isOpen={isTermsOpen}
                onClose={() => setIsTermsOpen(false)}
                title="Términos y Condiciones"
            >
                <div className="space-y-6 text-sm">
                    <section>
                        <h3 className="text-white font-black uppercase mb-3">1. Aceptación de los Términos</h3>
                        <p>Al acceder y utilizar las instalaciones de IRON CORE GYM, usted acepta cumplir con estos términos y todos los reglamentos internos del gimnasio.</p>
                    </section>
                    <section>
                        <h3 className="text-white font-black uppercase mb-3">2. Uso de las Instalaciones</h3>
                        <p>El equipo debe utilizarse con responsabilidad. El uso de toalla es obligatorio en todas las áreas. IRON CORE GYM no se hace responsable por lesiones debidas al mal uso de la maquinaria.</p>
                    </section>
                    <section>
                        <h3 className="text-white font-black uppercase mb-3">3. Membresías y Pagos</h3>
                        <p>Las membresías son personales e intransferibles. Los pagos se realizan por adelantado. Una vez realizado el pago, no se realizarán reembolsos parciales o totales.</p>
                    </section>
                    <section>
                        <h3 className="text-white font-black uppercase mb-3">4. Conducta</h3>
                        <p>Mantenemos un ambiente de respeto y disciplina. Nos reservamos el derecho de admisión y permanencia.</p>
                    </section>
                    <p className="pt-4 border-t border-[#222] italic">Última actualización: Marzo 2026, Bogotá.</p>
                </div>
            </Modal>

            <Modal
                isOpen={isPrivacyOpen}
                onClose={() => setIsPrivacyOpen(false)}
                title="Política de Privacidad"
            >
                <div className="space-y-6 text-sm">
                    <section>
                        <h3 className="text-white font-black uppercase mb-3">Recolección de Datos</h3>
                        <p>Recopilamos información personal básica (nombre, identificación, contacto y datos biométricos para el acceso) únicamente para la prestación de nuestros servicios.</p>
                    </section>
                    <section>
                        <h3 className="text-white font-black uppercase mb-3">Uso de la Información</h3>
                        <p>Sus datos se utilizan para gestionar su membresía, enviarle información relevante sobre el gimnasio y garantizar la seguridad de nuestras instalaciones.</p>
                    </section>
                    <section>
                        <h3 className="text-white font-black uppercase mb-3">Protección de Datos</h3>
                        <p>IRON CORE GYM cumple con la Ley de Protección de Datos Personales (Habeas Data). No compartimos su información con terceros sin su consentimiento explícito.</p>
                    </section>
                    <section>
                        <h3 className="text-white font-black uppercase mb-3">Sus Derechos</h3>
                        <p>Usted tiene derecho a conocer, actualizar y rectificar sus datos personales en cualquier momento comunicándose con nuestra administración.</p>
                    </section>
                    <p className="pt-4 border-t border-[#222] italic">Protección de datos bajo la legislación colombiana.</p>
                </div>
            </Modal>
        </footer>
    )
}

