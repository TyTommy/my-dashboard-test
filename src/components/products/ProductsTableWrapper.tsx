import { useState } from "react";
import ProductsTable from "./ProductsTable";

export default function ProductsTableWrapper() {

    const [data, setData] = useState<any[]>([
        {
          id: "1",
          name: "Mackbook pro",
          price: "2000$",
        },
        {
          id: "2",
          name: "Mackbook air",
          price: "1550$",
        },
      ]);

  return <ProductsTable data={data}/>;
}
