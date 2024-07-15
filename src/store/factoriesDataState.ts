import { atom } from "recoil";


export type FactoriesData = {
    image:string,
    title:string,
    discount:string,
    rating:number,
    budget:string,
    duration:string,
    size:string
}

export const factoriesDataState = atom<FactoriesData[] | null>({
    key: 'factoriesDataState',
    default: null, 
});