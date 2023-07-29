import { ReactNode } from "react";
import { Main } from "./styles";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <Main>{children}</Main>;
}
