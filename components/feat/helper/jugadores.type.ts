export type Jugador = {
  id: number;
  nombre: string;
  edad: number;
  equipo: string;
  posicion: string;
  nacionalidad?: string;
  fechaNacimiento?: Date;
  economia: Economia;
  partidosJugados: number;
  golesMarcados: number;
  asistencias: number;
  estadoSalud: EstadoSalud;
  disponibleParaPartidos: boolean;
};

type Economia = {
  ultimoPago: Date;
  deuda: number;
  aFavor: number;
};

type EstadoSalud = {
  lesionado: boolean;
  tipoLesion?: string;
  tiempoRecuperacion?: string;
};

export type HistorialPartidos = {
  id: number;
  fecha: String;
  contrincante: string;
  resultado: string;
  goleador?: string;
  asistidor?: string;
  lesionados?: string;
};

export type JugadorTable = Pick<
  Jugador,
  | "nombre"
  | "edad"
  | "equipo"
  | "posicion"
  | "nacionalidad"
  | "fechaNacimiento"
  | "partidosJugados"
  | "golesMarcados"
  | "asistencias"
  | "estadoSalud"
  | "disponibleParaPartidos"
>;
