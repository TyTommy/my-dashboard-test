import { useMemo } from "react";
import Table from "../table/Table";

interface Props {
  readonly data: any;
}

export default function UsersTable({ data = [] }: Props) {
  const headers = useMemo(
    () => [
      {
        header: "Id",
        accessor: "id",
        width: 300,
      },
      {
        header: "Username",
        accessor: "username",
        width: 500,
      },
      {
        header: "Email",
        accessor: "email",
        width: 500,
      },
    ],
    []
  );

  return <Table headers={headers} data={data} />;
}
