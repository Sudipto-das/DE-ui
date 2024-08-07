import { atom } from "recoil";
import { User } from "../interface/User";


export const profileDataState = atom<User|null>({
  key: 'profileDataState',
  default: null
});
