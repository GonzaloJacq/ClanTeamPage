// components/Header.tsx
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 w-full text-white p-4 flex justify-between items-center">
      {/* Contenedor para el logo y SidebarTrigger */}
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <span className="text-xl font-bold">Clan Team FC</span>
      </div>

      {/* Navegación */}
      <nav>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="flex items-center gap-2 hover:text-gray-300">
              <Instagram />
              Instagram
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              Acerca de
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
