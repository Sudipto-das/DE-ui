import { atom } from "recoil";

export const askButtonState = atom<boolean>({
    key:'askButtonState',
    default:false
})