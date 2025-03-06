import { ColumnDef } from "@tanstack/react-table";
import { HistorialPartidos } from "./jugadores.type";

export const columnsHistorial: ColumnDef<HistorialPartidos>[] = [
  {
    accessorKey: "fecha",
    header: "Fecha",
  },
  {
    accessorKey: "contrincante",
    header: "Contrincante",
  },
  {
    accessorKey: "resultado",
    header: "Resultado",
  },
  {
    accessorKey: "goleador",
    header: "Goleador",
  },
  {
    accessorKey: "asistidor",
    header: "Asistidor",
  },
  {
    accessorKey: "lesionados",
    header: "Lesionados",
  },
];
