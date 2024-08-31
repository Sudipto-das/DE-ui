import { atom } from "recoil";
type filterType = {
    catagories:string[]
}

export const filterState = atom<filterType|null> ({
    key:'filterState',
    default:null
})