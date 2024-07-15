import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "../icons/MenuIcon";
import Button from "../ui/Button";
import "./assets/header.scss";
import { set_menu_status } from "../../redux/actions";

export default function Header() {
  const menuStatus = useSelector((state: any) => state?.data?.menuStatus);

  const dispatch = useDispatch();

  return (
    <header>
      <Button
        className="h-100 px-3 hover-button"
        onClick={() =>
          dispatch(
            set_menu_status(menuStatus === "opened" ? "closed" : "opened")
          )
        }
      >
        <MenuIcon />
      </Button>
    </header>
  );
}
