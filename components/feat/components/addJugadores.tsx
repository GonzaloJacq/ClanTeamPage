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
import { JugadorSchema } from "../helper/schemas";
import { DatePicker } from "../../ui/date-picker";
import { BreadcrumbComp } from "./breadcrumbComp";

export function AddJugadorForm() {
  const form = useForm<z.infer<typeof JugadorSchema>>({
    resolver: zodResolver(JugadorSchema),
    defaultValues: {
      nombre: "",
      posicion: "",
      fechaNacimiento: undefined,
      economia: {
        ultimoPago: new Date(),
        deuda: 0,
        aFavor: 0,
      },
      estadoSalud: {
        lesionado: false,
        tipoLesion: "",
        tiempoRecuperacion: "",
      },
      partidosJugados: 0,
      golesMarcados: 0,
      asistencias: 0,
      disponibleParaPartidos: true,
    },
  });

  function onSubmit(data: z.infer<typeof JugadorSchema>) {
    console.log("Datos a enviar:", data);

    toast.success("¡Jugador agregado con éxito!", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log(form.formState.errors);
  }

  return (
    <>
      <BreadcrumbComp ruta="Agregar Jugador" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          {/* Contenedor de dos columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nombre */}
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre del jugador" {...field} />
                  </FormControl>
                  <FormDescription>
                    Introduce el nombre completo del jugador.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Posición */}
            <FormField
              control={form.control}
              name="posicion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Posición</FormLabel>
                  <FormControl>
                    <Input placeholder="Posición del jugador" {...field} />
                  </FormControl>
                  <FormDescription>
                    Introduce la posición que ocupa el jugador en el campo.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Contenedor para Fecha de Nacimiento y Último Pago */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Fecha de nacimiento */}
              <FormField
                control={form.control}
                name="fechaNacimiento"
                render={() => (
                  <FormItem>
                    <FormLabel>Fecha de nacimiento</FormLabel>
                    <FormControl>
                      <div>
                        <DatePicker />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Último pago */}
              <FormField
                control={form.control}
                name="economia.ultimoPago"
                render={() => (
                  <FormItem>
                    <FormLabel>Último pago</FormLabel>
                    <FormControl>
                      <div>
                        <DatePicker />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Partidos Jugados */}
            <FormField
              control={form.control}
              name="partidosJugados"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Partidos Jugados</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Número de partidos jugados"
                      value={field.value !== undefined ? field.value : ""}
                      onChange={(e) =>
                        field.onChange(parseInt(e.target.value) || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-4 text-right">
            <Button type="submit">Agregar Jugador</Button>
          </div>
        </form>
      </Form>
    </>
  );
}
