'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    href?: string
    fullWidth?: boolean
}

const variantStyles = {
    primary: 'bg-accent text-white font-bold hover:bg-accent-hover',
    outline: 'bg-transparent text-white font-bold border-2 border-[#333] hover:border-accent hover:text-accent',
    ghost: 'text-text-muted hover:text-white bg-transparent',
}

const sizeStyles = {
    sm: 'px-5 py-2.5 text-sm uppercase tracking-wider',
    md: 'px-6 py-3 text-sm uppercase tracking-wider',
    lg: 'px-8 py-4 text-base uppercase tracking-wider',
    xl: 'px-10 py-5 text-lg uppercase tracking-wider',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', fullWidth, className = '', children, href, ...props }, ref) => {
        // Brutalist styling base: square corners, bold uppercase font
        const base = `inline-flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer rounded-none border-0 ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`

        if (href) {
            return (
                <a href={href} className={base}>
                    {children}
                </a>
            )
        }

        return (
            <button ref={ref} className={base} {...props}>
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button'
export default Button
