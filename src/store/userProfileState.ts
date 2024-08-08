import { atom } from "recoil";
import { User } from "../interface/User";

interface ProfileDataState {
  user: User|null ;
  isLoading: boolean;
}

export const profileDataState = atom<ProfileDataState>({
  key: 'profileDataState',
  default: {
    user:null,
    isLoading: true
  }
});
