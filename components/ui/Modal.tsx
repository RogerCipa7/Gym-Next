'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 m-auto w-full max-w-2xl h-fit max-h-[80vh] bg-[#0a0a0a] border-2 border-[#222] z-[101] overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b-2 border-[#222]">
                            <h2 className="text-2xl font-black uppercase tracking-tighter font-['Space_Grotesk'] text-white">
                                {title}
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 text-[#666] hover:text-accent transition-colors border-2 border-[#222] hover:border-accent"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-8 overflow-y-auto custom-scrollbar">
                            <div className="prose prose-invert max-w-none text-[#888] font-medium leading-relaxed">
                                {children}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t-2 border-[#222] flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-6 py-2 bg-accent text-white font-bold uppercase tracking-widest text-sm hover:bg-accent-hover transition-colors"
                            >
                                CERRAR
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
