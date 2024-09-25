
import { atom } from 'recoil';

export const activeProjectAtom = atom<string >({
  key: 'activeProjectAtom',
  default: '',
});
