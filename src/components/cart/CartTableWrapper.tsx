import { useState } from "react";
import CartTable from "./CartTable";

export default function CartTableWrapper() {
  const [data, setData] = useState<any[]>([
    {
      id: "1",
      user: "John",
      product: "Mackbook pro",
    },
    {
      id: "2",
      user: "TyTommy",
      product: "Mackbook air",
    },
  ]);

  return <CartTable data={data} />;
}
