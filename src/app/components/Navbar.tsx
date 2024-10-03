"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const NavItems = () => (
    <>
      <NavigationMenuItem>
        <Link href="#about" legacyBehavior passHref>
          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-bold text-xl`}>About</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="#experience" legacyBehavior passHref>
          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-bold text-xl`}>Experience</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="#projects" legacyBehavior passHref>
          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-bold text-xl`}>Projects</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="#contact" legacyBehavior passHref>
          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-bold text-xl`}>Contact</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </>
  )

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-extrabold text-xl inline-block">
            Zaydan Taqiyyuddin Abror
          </span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavItems />
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col items-center justify-center">
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col items-center space-y-4">
                  <NavItems />
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}