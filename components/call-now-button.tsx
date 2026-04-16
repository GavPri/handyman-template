"use client"

import { Phone } from "lucide-react"

interface CallNowButtonProps {
  phoneNumber?: string
}

export function CallNowButton({ phoneNumber = "tel:+1234567890" }: CallNowButtonProps) {
  return (
    <a
      href={phoneNumber}
      className="
        fixed bottom-6 right-4 z-50
        md:hidden
        flex items-center gap-2.5
        px-5 py-3.5
        bg-emerald-600 text-white
        rounded-full
        shadow-[0_8px_30px_rgb(16,185,129,0.35)]
        hover:bg-emerald-500
        active:scale-95
        transition-all duration-200 ease-out
        pb-[calc(0.875rem+env(safe-area-inset-bottom,0px))]
        mb-[env(safe-area-inset-bottom,0px)]
      "
      aria-label="Call now"
    >
      <span className="relative flex h-5 w-5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <Phone className="relative h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="font-semibold text-sm tracking-wide">Call Now</span>
    </a>
  )
}
