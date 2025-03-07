import { z } from "zod";

export const JugadorSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  posicion: z.string().optional(),
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

export const AddPartidoSchema = z.object({
  contrincante: z.string().min(1, "El contrincante es obligatorio"),
  resultadoNosotros: z.number().min(0, "El resultado debe ser un número positivo"),
  resultadoEllos: z.number().min(0, "El resultado debe ser un número positivo"),
  goleador: z.number().optional(),
  golesMarcados: z.number().min(0, "Los goles marcados deben ser un número positivo"),
  asistidor: z.number().optional(),
  golesAsistidos: z.number().optional(),
  fecha: z.date(),
  mvp: z.number().optional(),
});