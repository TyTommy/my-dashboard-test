import { ReactNode } from "react";
import cx from "classnames";
import "./assets/button.scss";

interface Props {
  readonly children?: ReactNode;
  readonly className?: string;
  readonly onClick: () => void;
}

export default function Button({ children, className, onClick }: Props) {
  return (
    <button className={cx(className)} onClick={() => onClick && onClick()}>
      {children}
    </button>
  );
}
