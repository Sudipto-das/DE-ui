import { atom } from "recoil";
import ProjectsInterface from "../interface/Project";




export const projectDataState = atom<ProjectsInterface[]>({
    key: 'projectDataState',
    default: [], 
});