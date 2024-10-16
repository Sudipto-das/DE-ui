import { atom } from 'recoil';

export const selectProjectAtom = atom<string >({
  key: 'selectProjectAtom',
  default: '',
});