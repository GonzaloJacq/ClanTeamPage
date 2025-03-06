import { z } from "zod";

export const JugadorSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  edad: z.number().optional(),
  equipo: z.string().optional(),
  posicion: z.string().optional(),
  nacionalidad: z.string().optional(),
  fechaNacimiento: z.date().optional(),
  economia: z.object({
    ultimoPago: z.date(),
    deuda: z.number().optional(),
    aFavor: z.number().optional(),
  }),
  estadoSalud: z.object({
    lesionado: z.boolean(),
    tipoLesion: z.string().optional(),
    tiempoRecuperacion: z.string().optional(),
  }),
  partidosJugados: z.number().optional(),
  golesMarcados: z.number().optional(),
  asistencias: z.number().optional(),
  disponibleParaPartidos: z.boolean(),
});


export const DelJugadorSchema = z.object({
  nombre: z.number().min(1, { message: "Debe selecciona un jugador" }),
});