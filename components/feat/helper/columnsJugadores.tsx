import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react"; // Asegúrate de importar ArrowUpDown
import { JugadorTable } from "./jugadores.type";
import { ColumnDef } from "@tanstack/react-table";

export const columnsJugadores: ColumnDef<JugadorTable>[] = [
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  {
    accessorKey: "edad",
    header: "Edad",
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
];
