import { atom } from "recoil";
import { LocationInterface } from "../../interface/Address";


export const AddressState = atom<LocationInterface | null>({
    key: 'AddressState',
    default: null

});