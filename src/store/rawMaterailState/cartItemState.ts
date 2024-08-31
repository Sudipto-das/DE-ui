import { atom } from "recoil"

 export interface cartItem {
    id: string,
    name: string,
    description: string,
    price: number,
    category:string,
    image:string,
    rating: number
    quantity:number
}



export const cartItemState = atom <cartItem[]>({
    key:'cartItemState',
    default: []
})