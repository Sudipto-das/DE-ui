import { atom } from "recoil";
import CommentsInterface from "../interface/Comments";

export const commentState = atom<CommentsInterface[]>({
    key:'commentState',
    default:[]
})