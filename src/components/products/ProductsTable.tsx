import { useMemo } from "react";
import Table from "../table/Table";

interface Props {
  readonly data: any[];
}

export default function ProductsTable({ data }: Props) {
  const headers = useMemo(
    () => [
      {
        header: "Id",
        accessor: "id",
        width: 300,
      },
      {
        header: "Name",
        accessor: "name",
        width: 500,
      },
      {
        header: "Price",
        accessor: "price",
        width: 500,
      },
    ],
    []
  );

  return <Table headers={headers} data={data} />;
}
