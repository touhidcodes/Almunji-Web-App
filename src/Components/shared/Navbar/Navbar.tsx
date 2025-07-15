"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "../../../../public/assets/logo/black.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Button from "@/components/ui/Button/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationOptions: { title: string; href: string }[] = [
  { title: "Services", href: "/#services" },
  { title: "My Work", href: "/projects" },
  { title: "Blogs", href: "/blogs" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="max-w-screen-xl mx-auto flex justify-between items-center px-3 md:px-0 sticky top-0 z-50 bg-white">
      {/* Logo (Hidden on Mobile) */}
      <div className="hidden md:block">
        <Link href="/">
          <Image src={logo} alt="Logo" width={180} height={50} />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {navigationOptions.map((nav) => (
              <NavigationMenuItem key={nav.title}>
                <Link href={nav.href} passHref legacyBehavior>
                  <NavigationMenuLink className="text-xl font-semibold px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100">
                    {nav.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Mobile Menu and Logo */}
      <div className="md:hidden flex justify-between items-center w-full">
        {/* Logo on the Left Side */}
        <div>
          <Image src={logo} alt="Logo" width={180} height={50} />
        </div>

        {/* Mobile Dropdown on the Right Side */}
        <div className="ml-auto">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger className="p-2 rounded-lg hover:bg-gray-200 transition">
              <Menu size={28} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white shadow-lg rounded-lg">
              {navigationOptions.map((nav) => (
                <DropdownMenuItem key={nav.title}>
                  <Link
                    href={nav.href}
                    className="block w-full px-4 py-2 hover:bg-gray-100 rounded-md"
                  >
                    {nav.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Start Project Button */}
      <div className="hidden md:block">
        <Button
          text="Start a New Project 🚀"
          link="/#contact"
          className="w-fit bg-white border-2 border-black text-black font-bold py-3 px-5 rounded-lg hover:border-2 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
        />
      </div>
    </header>
  );
}
