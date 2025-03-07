// data/dataJugadores.ts

import { Jugador } from "./jugadores.type";

export const dataJugadores: Jugador[] = [
  {
    id: 1,
    nombre: "Juan Pérez",
    posicion: "Delantero",
    fechaNacimiento: new Date("1996-02-15"),
    economia: {
      ultimoPago: new Date("2025-02-15"),
      deuda: 50,
      aFavor: 20,
    },
    partidosJugados: 12,
    golesMarcados: 5,
    asistencias: 3,
    estadoSalud: {
      lesionado: false,
    },
    disponibleParaPartidos: true,
  },
  {
    id: 2,
    nombre: "Carlos Rodríguez",
    fechaNacimiento: new Date("1998-02-15"),
    posicion: "Centrocampista",
    economia: {
      ultimoPago: new Date("2025-01-30"),
      deuda: 0,
      aFavor: 15,
    },
    partidosJugados: 20,
    golesMarcados: 2,
    asistencias: 7,
    estadoSalud: {
      lesionado: false,
    },
    disponibleParaPartidos: true,
  },
  {
    id: 3,
    nombre: "Luis García",
    fechaNacimiento: new Date("1996-02-15"),
    posicion: "Defensa",
    economia: {
      ultimoPago: new Date("2025-01-10"),
      deuda: 10,
      aFavor: 5,
    },
    partidosJugados: 15,
    golesMarcados: 1,
    asistencias: 1,
    estadoSalud: {
      lesionado: true,
      tipoLesion: "Lesión en el tobillo",
      tiempoRecuperacion: "2 semanas",
    },
    disponibleParaPartidos: false,
  },
  {
    id: 4,
    nombre: "Marta Fernández",
    fechaNacimiento: new Date("1991-02-15"),
    posicion: "Portera",
    economia: {
      ultimoPago: new Date("2025-02-01"),
      deuda: 0,
      aFavor: 0,
    },
    partidosJugados: 8,
    golesMarcados: 0,
    asistencias: 0,
    estadoSalud: {
      lesionado: false,
    },
    disponibleParaPartidos: true,
  },
  {
    id: 5,
    nombre: "Andrés Sánchez",
    fechaNacimiento: new Date("1992-02-15"),
    posicion: "Delantero",
    economia: {
      ultimoPago: new Date("2025-01-25"),
      deuda: 100,
      aFavor: 0,
    },
    partidosJugados: 10,
    golesMarcados: 6,
    asistencias: 2,
    estadoSalud: {
      lesionado: false,
    },
    disponibleParaPartidos: true,
  },
];
