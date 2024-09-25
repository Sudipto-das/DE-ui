import { atom } from "recoil";

interface Address {
    id: number;
    firstName: string;
    lastName: string;
    streetAddress: string;
    state: string;
    zipCode: string;
}

export const addressFormState = atom<Address>({
    key: 'addressFormState',
    default: {
        id:0,
        firstName:'',
        lastName:'',
        streetAddress:'',
        state:'',
        zipCode:''
    }
});