// app/api/jugadores/route.ts

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Prisma Client

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Crear el jugador en la base de datos con los datos recibidos
    const jugador = await prisma.jugador.create({
      data: {
        nombre: data.nombre,
        posicion: data.posicion,
        fechaNacimiento: data.fechaNacimiento
          ? new Date(data.fechaNacimiento)
          : null,
        partidosJugados: data.partidosJugados,
        golesMarcados: data.golesMarcados,
        asistencias: data.asistencias,
        economia: {
          create: {
            ultimoPago: new Date(data.economia.ultimoPago),
            deuda: data.economia.deuda,
            aFavor: data.economia.aFavor,
          },
        },
        estadoSalud: {
          create: {
            lesionado: data.estadoSalud.lesionado,
            tipoLesion: data.estadoSalud.tipoLesion,
            tiempoRecuperacion: data.estadoSalud.tiempoRecuperacion,
          },
        },
        disponibleParaPartidos: data.disponibleParaPartidos,
      },
    });

    return NextResponse.json(jugador, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 400 });
  }
}
