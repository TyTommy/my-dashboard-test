import { useState } from "react";
import UsersTable from "./UsersTable";

export default function UsersTableWrapper() {
  const [data, setData] = useState<any[]>([
    {
      id: "1",
      email: "John@gmail.com",
      username: "john2000",
    },
    {
      id: "2",
      email: "TyTommy@gmail.com",
      username: "tytommy1998",
    },
  ]);

  return <UsersTable data={data} />;
}
