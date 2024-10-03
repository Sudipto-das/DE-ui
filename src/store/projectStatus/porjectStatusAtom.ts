import { atom } from 'recoil';

export const projectStatusAtom = atom<string|null>({
    key: 'projectStatusAtom',
    default: null,
});