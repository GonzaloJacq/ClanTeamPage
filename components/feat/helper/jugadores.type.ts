export type Jugador = {
  id: number;
  nombre: string;
  posicion: string;
  fechaNacimiento?: Date;
  partidosJugados: number;
  golesMarcados: number;
  asistencias: number;
  economia: Economia;
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
  fecha: string;
  contrincante: string;
  resultado: string;
  goleador?: string;
  asistidor?: string;
  lesionados?: string;
  mvp?: Jugador;
};

