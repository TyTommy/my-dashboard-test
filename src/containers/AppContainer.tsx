import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProductsContainer from "./ProductsContainer";
import UsersContainer from "./UsersContainer";
import CartContainer from "./CartContainer";
import AppLayout from "../components/app/AppLayout";

export default function AppContainer() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/products");
    }
  }, [navigate, location]);

  return (
    <AppLayout>
      <Routes>
        <Route path="/products" element={<ProductsContainer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/cart" element={<CartContainer />} />
      </Routes>
    </AppLayout>
  );
}
