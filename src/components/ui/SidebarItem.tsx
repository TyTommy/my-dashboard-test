import { useLocation, useNavigate } from "react-router-dom";
import cx from "classnames";
import "./assets/sidebar-item.scss";
import { useSelector } from "react-redux";

interface Props {
  readonly link: string;
  readonly children?: string;
}

export default function SidebarItem({
  link,
  children = "Sidebar item",
}: Props) {
  const navigate = useNavigate();

  const location = useLocation();

  const menuStatus = useSelector((state: any) => state?.data?.menuStatus);

  return (
    <div
      className={cx("sidebar-item", {
        "active-sidebar-item": location?.pathname.includes(link),
      })}
      onClick={() => navigate(link)}
    >
      <span>{menuStatus === "opened" && children}</span>
    </div>
  );
}
