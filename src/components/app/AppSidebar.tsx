import SidebarItem from "../ui/SidebarItem";
import AppSidebarLayout from "./AppSidebarLayout";

export default function AppSidebar() {
  return (
    <AppSidebarLayout>
      <SidebarItem link="products">Products</SidebarItem>
      <SidebarItem link="users">Users</SidebarItem>
      <SidebarItem link="cart">Cart</SidebarItem>
    </AppSidebarLayout>
  );
}
