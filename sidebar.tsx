"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { FileText, MessageCircle, Settings, Users } from "lucide-react"
import Link from "next/link"

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  href: string
  isActive?: boolean
}

function SidebarItem({ icon, label, href, isActive }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-red-50 rounded-lg transition-colors",
        isActive && "bg-red-500 text-white hover:bg-red-600",
      )}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  )
}

export function Sidebar() {
  return (
    <div className="w-64 bg-pink-50 h-screen p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">TeachMate</h1>
      </div>

      <nav className="space-y-2">
        <SidebarItem icon={<MessageCircle size={20} />} label="New chat" href="/chat" />
        <SidebarItem icon={<FileText size={20} />} label="Your materials" href="/materials" isActive />
        <SidebarItem icon={<Users size={20} />} label="Your Students" href="/students" />
        <SidebarItem icon={<Settings size={20} />} label="Settings" href="/settings" />
      </nav>
    </div>
  )
}

