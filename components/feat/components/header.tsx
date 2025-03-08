import { SidebarTrigger } from "@/components/ui/sidebar";
import { InfoIcon, Instagram, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 w-full text-white p-4">
      {/* Contenedor para el logo y SidebarTrigger */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <SidebarTrigger />
          <span className="text-xl font-bold">Clan Team FC</span>
        </div>

        {/* Navegación */}
        <nav className="w-full sm:w-auto">
          {/* En dispositivos móviles, ocultar la lista */}
          <ul className="flex flex-col sm:flex-row w-full sm:w-auto justify-center gap-4 sm:gap-6 hidden sm:flex">
            <li className="flex-1 text-center">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 hover:text-gray-300"
              >
                <Instagram />
                Instagram
              </Link>
            </li>
            <li className="flex-1 text-center">
              <Link
                href="/dashboard"
                className="flex items-center justify-center gap-2 hover:text-gray-300"
              >
                <InfoIcon />
                Acerca de
              </Link>
            </li>
            <li className="flex-1 text-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 hover:text-gray-300"
              >
                <Phone />
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
