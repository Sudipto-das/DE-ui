import { atom } from "recoil";


export type projectData = {
    id:string,
    image: string
    title: string
    description: string
    designer: string
    duration: string
    budget: string
    size: string
}

export const projectDataState = atom<projectData[] | null>({
    key: 'projectDataState',
    default: null, 
});