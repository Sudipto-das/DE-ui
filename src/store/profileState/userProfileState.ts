import { atom } from "recoil";
import { CustomerResponse } from "../../interface/User";

interface ProfileDataState {
  user: CustomerResponse|null ;
  isLoading: boolean;
}

export const profileDataState = atom<ProfileDataState>({
  key: 'profileDataState',
  default: {
    user:null,
    isLoading: true
  }
});
