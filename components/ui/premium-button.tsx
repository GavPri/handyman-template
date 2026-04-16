"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const premiumButtonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap font-bold font-serif tracking-wide transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.98]",
        ghost:
          "bg-transparent text-foreground hover:bg-muted active:scale-[0.98]",
        glow: "bg-primary text-primary-foreground shadow-[0_0_0_0_var(--primary)] hover:shadow-[0_0_30px_4px_var(--primary)] hover:shadow-primary/40 active:scale-[0.98]",
        glass:
          "bg-foreground/5 text-foreground backdrop-blur-md border border-foreground/10 hover:bg-foreground/10 hover:border-foreground/20 active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-lg",
        default: "h-11 px-6 text-sm rounded-xl",
        lg: "h-14 px-8 text-base rounded-xl",
        xl: "h-16 px-10 text-lg rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface PremiumButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof premiumButtonVariants> {
  children: React.ReactNode
  shimmer?: boolean
  magnetic?: boolean
}

function PremiumButton({
  className,
  variant,
  size,
  children,
  shimmer = false,
  magnetic = false,
  ...props
}: PremiumButtonProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || !buttonRef.current) return
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      setPosition({ x: x * 0.15, y: y * 0.15 })
    },
    [magnetic]
  )

  const handleMouseLeave = React.useCallback(() => {
    if (!magnetic) return
    setPosition({ x: 0, y: 0 })
  }, [magnetic])

  return (
    <button
      ref={buttonRef}
      className={cn(premiumButtonVariants({ variant, size, className }))}
      style={
        magnetic
          ? {
              transform: `translate(${position.x}px, ${position.y}px)`,
            }
          : undefined
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Shimmer effect overlay */}
      {shimmer && (
        <span className="absolute inset-0 overflow-hidden rounded-[inherit]">
          <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </span>
      )}

      {/* Hover fill effect for outline variant */}
      {variant === "outline" && (
        <span className="absolute inset-0 -z-10 scale-x-0 bg-primary transition-transform duration-300 ease-out origin-left group-hover:scale-x-100" />
      )}

      {/* Content with subtle lift on hover */}
      <span className="relative z-10 flex items-center gap-2.5 transition-transform duration-300 group-hover:-translate-y-px">
        {children}
      </span>

      {/* Subtle inner glow */}
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-transparent to-white/5" />
    </button>
  )
}

export { PremiumButton, premiumButtonVariants }
