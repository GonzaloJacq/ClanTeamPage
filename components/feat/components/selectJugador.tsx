import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { dataJugadores } from "../helper/dataJugadores";


type SelectJugadorProps = {
  value?: number;
  onChange: (value: number) => void;
};

export const SelectJugador: React.FC<SelectJugadorProps> = ({
  value,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(value?.toString() || "");

  const handleValueChange = (newValue: string) => {
    setSelectedValue(newValue);
    onChange(Number(newValue)); // Convert the string value to a number
  };

  return (
    <Select onValueChange={handleValueChange} value={selectedValue}>
      <SelectTrigger>
        <SelectValue placeholder="Seleccione el jugador" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {dataJugadores?.map((jugador) => (
            <SelectItem key={jugador.id} value={jugador.id.toString()}>
              {jugador.nombre}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
