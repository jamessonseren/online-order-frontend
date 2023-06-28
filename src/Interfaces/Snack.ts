import { SnacksData } from "./SnacksData"

export interface Snack extends SnacksData{
  quantity: number
  subTotal: number
}
