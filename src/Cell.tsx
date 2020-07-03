import * as React from "react";

// type PropsWithChildren<P> = P & { children?: ReactNode };
interface ICell {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  x: number;
  y: number;
  size: number;
  type: boolean;
}

const baseStyle: React.CSSProperties = {
  position: "absolute",
  left: "0",
  top: "0",
  width: "32px",
  height: "32px",
  boxSizing: "border-box",
  background: "#AAD751"
};

export const Cell: React.FC<ICell> = ({ onClick, x, y, size, type }) => {
  const style = {
    ...baseStyle,
    left: x * size + "px",
    top: y * size + "px",
    width: size + "px",
    height: size + "px"
  };

  if (x % 2 === y % 2) {
    style.background = "#A2D149";
  } else {
    style.background = "#AAD751";
  }

  return (
    <div style={{ ...style }} onClick={onClick}>
      {type ? "1" : "0"}
    </div>
  );
};
