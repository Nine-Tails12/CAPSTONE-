import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="h-16 border-b flex items-center justify-between px-6">
      <nav className="flex gap-8">
        <Link href="/about" className="text-gray-700 hover:text-gray-900">
          About
        </Link>
        <Link href="/how-it-works" className="text-gray-700 hover:text-gray-900">
          How it works
        </Link>
        <Link href="/interface" className="text-gray-700 hover:text-gray-900">
          Interface
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell size={20} />
        </button>
        <Avatar>
          <AvatarImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sidebar2-zDoIJIqBJMM6GlfZv8gKkZh4c8cgGY.png"
            alt="User"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

