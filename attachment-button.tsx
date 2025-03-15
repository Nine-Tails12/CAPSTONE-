"use client"

import type React from "react"

interface AttachmentButtonProps {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}

export function AttachmentButton({ icon, label, onClick }: AttachmentButtonProps) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
        {icon}
      </div>
      <span className="text-sm text-gray-600">{label}</span>
    </button>
  )
}

