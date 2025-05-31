
"use client";
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import UserButton from "@/feature/auth/components/user-button";
import { useCurrentUser } from "@/feature/auth/hooks/use-current-user"
import Link from "next/link";

export function Navigation() {
  const user = useCurrentUser()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PC</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Podcast Clipper
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            How it Works
          </a>
          <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Pricing
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
       { user ? <UserButton/>:  <Button variant="outline" className="hidden sm:flex">
            Sign In
          </Button>}
          <Link href={"/dashboard"} className="cursor-pointer">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Get Started
          </Button>
          </Link>
    
        </div>
      </div>
    </nav>
  )
}