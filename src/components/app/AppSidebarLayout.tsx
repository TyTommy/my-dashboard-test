import { ReactNode } from "react";
import "./assets/app-sidebar-layout.scss";
import { useSelector } from "react-redux";

interface Props {
  readonly children: ReactNode;
}

export default function AppSidebarLayout({ children }: Props) {
  const menuStatus = useSelector((state: any) => state?.data?.menuStatus);

  return (
    <div className="app-sidebar-layout">
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: "20px",
            color: "#fff",
          }}
        >
          {menuStatus === "opened" && "Dashboard"}
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}
