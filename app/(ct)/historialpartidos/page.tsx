import { DataTable } from "@/components/feat/components/data-table";
import { columnsHistorial } from "@/components/feat/helper/columnsHistorial";
import { dataFechas } from "@/components/feat/helper/dataFechas";
import React from "react";

const Fechas = () => {
  return <DataTable columns={columnsHistorial} data={dataFechas} />;
};

export default Fechas;
