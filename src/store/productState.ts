import { atom } from 'recoil';

export type product = {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
    category: string;
};

export const productState = atom<product | null>({
    key: 'productState',
    default: null, 
});
