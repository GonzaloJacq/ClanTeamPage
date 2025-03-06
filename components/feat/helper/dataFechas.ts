import { formatDateComp } from "../components/formatDateComp";
import { HistorialPartidos } from "./jugadores.type";

export const dataFechas: HistorialPartidos[] = [
  {
    id: 1,
    fecha: formatDateComp(new Date("2025-02-20")),
    contrincante: "Equipo A",
    resultado: "3-1",
    goleador: "Juan Pérez",
    asistidor: "Carlos Díaz",
    lesionados: "Ninguno",
  },
  {
    id: 2,
    fecha: formatDateComp(new Date("2025-02-22")),
    contrincante: "Equipo B",
    resultado: "1-1",
    goleador: "Miguel Gómez",
    asistidor: "José Martínez",
    lesionados: "Luis Hernández",
  },
  {
    id: 3,
    fecha: formatDateComp(new Date("2025-02-25")),
    contrincante: "Equipo C",
    resultado: "2-0",
    goleador: "Ricardo Sánchez",
    asistidor: "Juan Pérez",
    lesionados: "Ninguno",
  },
  {
    id: 4,
    fecha: formatDateComp(new Date("2025-02-28")),
    contrincante: "Equipo D",
    resultado: "0-3",
    goleador: "Ninguno",
    asistidor: "Ninguno",
    lesionados: "Carlos Díaz, Sergio Ramos",
  },
  {
    id: 5,
    fecha: formatDateComp(new Date("2025-03-01")),
    contrincante: "Equipo E",
    resultado: "2-2",
    goleador: "Santiago Martínez",
    asistidor: "Antonio Pérez",
    lesionados: "Ninguno",
  },
  {
    id: 6,
    fecha: formatDateComp(new Date("2025-03-05")),
    contrincante: "Equipo F",
    resultado: "1-0",
    goleador: "David Torres",
    asistidor: "Juan Pérez",
    lesionados: "Juan Pérez (lesión en el tobillo)",
  },
];
