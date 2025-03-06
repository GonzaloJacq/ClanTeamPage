"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Command,
  Frame,
  GalleryVerticalEnd,
  PictureInPicture2,
  PieChart,
  Settings2,
  SquareTerminal,
  User2,
} from "lucide-react";


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./feat/components/teamSwitcher";
import { NavMain } from "./feat/components/navMain";
import { NavProjects } from "./feat/components/navProjects";
import { NavUser } from "./feat/components/navUser";

// This is sample data.
const data = {
  user: {
    name: "ClanTeam",
    email: "ctuy@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "CTUY Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Clonadores Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Original Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Partidos",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Agregar Partido",
          url: "/addpartido",
        },
        {
          title: "Historial",
          url: "/historialpartidos",
        },
      ],
    },
    {
      title: "Jugadores",
      url: "#",
      icon: User2,
      items: [
        {
          title: "Agregar Jugador",
          url: "/addjugadores",
        },
        {
          title: "Lista de Jugadores",
          url: "/ctjugadores",
        },
      ],
    },
    {
      title: "Documentación",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Agregar cuota",
          url: "/addcuota",
        },
        {
          title: "Saldo jugadores",
          url: "/ctpagos",
        },
      ],
    },
    {
      title: "Otros",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Eliminar jugador",
          url: "/deletejugador",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Desempeño General",
      url: "#",
      icon: Frame,
    },
    {
      name: "Desempeño Jugadores",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Fotos",
      url: "#",
      icon: PictureInPicture2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
