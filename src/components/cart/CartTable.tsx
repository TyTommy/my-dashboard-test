import { useMemo } from "react";
import Table from "../table/Table";

interface Props {
  readonly data: any[];
}

export default function CartTable({ data }: Props) {
  const headers = useMemo(
    () => [
      {
        header: "Id",
        accessor: "id",
        width: 300,
      },
      {
        header: "User",
        accessor: "user",
        width: 500,
      },
      {
        header: "Product",
        accessor: "product",
        width: 500,
      },
    ],
    []
  );

  return <Table headers={headers} data={data} />;
}
