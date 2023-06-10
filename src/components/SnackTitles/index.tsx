import { ReactNode } from "react"
import { Title } from "./styles"

interface SnackTitlesProps {
  children: ReactNode;
}
export function SnackTitles({children}: SnackTitlesProps){
  return <Title>{children}</Title>
}
