import { ReactNode } from "react";
import { useSelector } from "react-redux";
import cx from "classnames";
import "./assets/app-layout.scss";
import AppSidebar from "./AppSidebar";
import Header from "../header/Header";

interface Props {
  readonly children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  const menuStatus = useSelector((state: any) => state?.data?.menuStatus);

  return (
    <div className="app-layout-wrapper">
      <div
        className={cx("app-layout-sidebar", {
          "app-layout-sidebar-closed": menuStatus === "closed",
        })}
      >
        <AppSidebar />
      </div>
      <div
        className={cx("app-layout-page", {
          "app-layout-page-full": menuStatus === "closed",
        })}
      >
        <div className="app-layout-page-header">
          <Header />
        </div>
        <div className="app-layout-page-body">{children}</div>
      </div>
    </div>
  );
}
