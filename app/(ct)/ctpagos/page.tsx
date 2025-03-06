import { dataJugadores } from "@/components/feat/helper/dataJugadores";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const CtPagos = () => {
  return (
    <Table>
      <TableCaption>Economía de los jugadores del equipo</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nombre</TableHead>

          <TableHead>Último Pago</TableHead>
          <TableHead>Deuda</TableHead>
          <TableHead>A Favor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataJugadores.map((jugador) => (
          <TableRow key={jugador.id}>
            <TableCell className="font-medium">{jugador.nombre}</TableCell>

            <TableCell>
              {new Date(jugador.economia.ultimoPago).toLocaleDateString()}
            </TableCell>
            <TableCell>{jugador.economia.deuda} €</TableCell>
            <TableCell>{jugador.economia.aFavor} €</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CtPagos;
