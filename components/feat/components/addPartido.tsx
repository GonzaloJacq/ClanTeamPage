"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AddPartidoSchema } from "../helper/schemas";
import { DatePicker } from "../../ui/date-picker";
import { BreadcrumbComp } from "./breadcrumbComp";
import { SelectJugador } from "./selectJugador";

export function AddPartidoForm() {
  const form = useForm<z.infer<typeof AddPartidoSchema>>({
    resolver: zodResolver(AddPartidoSchema),
    defaultValues: {
      contrincante: "",
      resultadoNosotros: 0,
      resultadoEllos: 0,
      goleador: 0,
      golesMarcados: 0,
      asistidor: 0,
      golesAsistidos: 0,
      fecha: new Date(),
      mvp: undefined,
    },
  });

  function onSubmit(data: z.infer<typeof AddPartidoSchema>) {
    console.log("Datos a enviar:", data);

    toast.success("Partido agregado con éxito!", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <>
      <BreadcrumbComp ruta="Agregar Partido" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contrincante */}
            <FormField
              control={form.control}
              name="contrincante"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contrincante</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre del contrincante" {...field} />
                  </FormControl>
                  <FormDescription>
                    Introduce el nombre completo del contrincante.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Resultados */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="resultadoNosotros"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resultado (Nosotros)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Nosotros" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resultadoEllos"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resultado (Ellos)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Ellos" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Goleador y goles marcados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="goleador"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Goleador</FormLabel>
                  <SelectJugador
                    value={field.value ? Number(field.value) : 0}
                    onChange={(value) => field.onChange(Number(value))}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="golesMarcados"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Goles Marcados</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Goles Marcados"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Asistidor y goles asistidos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="asistidor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Asistidor</FormLabel>
                  <SelectJugador
                    value={field.value ? Number(field.value) : 0}
                    onChange={(value) => field.onChange(Number(value))}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="golesAsistidos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Goles Asistidos</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Goles Asistidos"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Fecha */}
            <FormField
              control={form.control}
              name="fecha"
              render={() => (
                <FormItem>
                  <FormLabel>Fecha del partido</FormLabel>
                  <FormControl>
                    <DatePicker />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* MVP */}
            <FormField
              control={form.control}
              name="mvp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>MVP del partido</FormLabel>
                  <SelectJugador
                    value={field.value ? Number(field.value) : 0}
                    onChange={(value) => field.onChange(Number(value))}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4 text-right">
            <Button type="submit">Agregar Partido</Button>
          </div>
        </form>
      </Form>
    </>
  );
}
