import { atom } from "recoil";
import { ProjectDetail } from "../../interface/Project";



export const projectDataState = atom<ProjectDetail[]>({
  key: 'projectDataState',
  default: []
});
