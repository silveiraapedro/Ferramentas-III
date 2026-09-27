import { ItemVenda } from "./item.models";

export interface Venda{
    id:number,
    cliente: string,
    data: Date,
    itens: ItemVenda[]
}