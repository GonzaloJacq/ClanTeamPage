import Image, { StaticImageData } from "next/image";
import React from "react";

// Permitir que 'imagenUrl' sea de tipo string o StaticImageData
interface SidebarCardProps {
  imagenUrl: string | StaticImageData;
  nombreJugador: string;
}

export const SidebarCard: React.FC<SidebarCardProps> = ({
  imagenUrl,
  nombreJugador,
}) => {
  return (
    <div className="sidebar-card flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <Image
        width={150}
        height={150}
        src={imagenUrl}
        alt={nombreJugador}
        className="w-24 h-24 object-cover rounded-full mb-2"
      />

      <span className="font-semibold text-lg">{nombreJugador}</span>
    </div>
  );
};
