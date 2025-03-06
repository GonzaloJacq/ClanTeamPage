import { DataTable } from "@/components/feat/components/data-table";
import { columnsJugadores } from "@/components/feat/helper/columnsJugadores";
import { dataJugadores } from "@/components/feat/helper/dataJugadores";

export default async function CtJugadoresTable() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columnsJugadores} data={dataJugadores} />
    </div>
  );
}
