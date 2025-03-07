'use client';
import { EdadComp } from "../components/edadComp";
import { Jugador } from "./jugadores.type";
import { ColumnDef } from "@tanstack/react-table";

export const columnsJugadores: ColumnDef<Jugador>[] = [
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  {
    accessorKey: "fechaNacimiento",
    header: "Edad",
    cell: ({ row }) => {
      return row.original.fechaNacimiento ? <EdadComp fecha={row.original.fechaNacimiento} /> : null;
    },
  },
  {
    accessorKey: "posicion",
    header: "Posición",
  },
  {
    accessorKey: "partidosJugados",
    header: "Partidos Jugados",
  },
  {
    accessorKey: "golesMarcados",
    header: "Goles Marcados",
  },
  {
    accessorKey: "asistencias",
    header: "Asistencias",
  },
  {
    accessorKey: "estadoSalud",
    header: "Estado de Salud",
    cell:({row}) =>{
      return row.original.estadoSalud.lesionado ? <div>{row.original.estadoSalud.tipoLesion}</div> : <div>Sano</div>
    }
  },
  {
    accessorKey: "disponibleParaPartidos",
    header: "Disponibilidad",
    cell: ({ row }) => {
      return row.original.disponibleParaPartidos ? <div>Disponible</div> : <div>No disponible</div>;
    },
  },
];
