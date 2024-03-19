import React from "react";
import cn from "../../utils/className";

const Card = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) => {
  return <div className={cn(styles, " bg-white shadow")}>{children}</div>;
};

export default Card;
