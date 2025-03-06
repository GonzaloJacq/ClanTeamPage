"use client";
import { BreadcrumbComp } from "@/components/feat/components/breadcrumbComp";
import { dataJugadores } from "@/components/feat/helper/dataJugadores";
import { useForm } from "react-hook-form";
import { DelJugadorSchema } from "@/components/feat/helper/schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { z } from "zod";

export function DeleteJugadorForm() {
  const form = useForm<z.infer<typeof DelJugadorSchema>>({
    resolver: zodResolver(DelJugadorSchema),
    defaultValues: {
      nombre:0
    },
  });

  function onSubmit(data: z.infer<typeof DelJugadorSchema>) {
    console.log("Datos a enviar:", data);

    toast.success("¡Jugador Eliminado con éxito!", {
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
      <BreadcrumbComp ruta="Eliminar jugador" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                    value={field.value ? String(field.value) : ""}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Seleccione el jugador" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {dataJugadores?.map((jugador) => (
                          <SelectItem
                            key={jugador.id}
                            value={jugador.id.toString()}
                          >
                            {jugador.nombre}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>Seleccione un jugador.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-4">
            <Button type="submit">Eliminar Jugador</Button>
          </div>
        </form>
      </Form>
    </>
  );
}
