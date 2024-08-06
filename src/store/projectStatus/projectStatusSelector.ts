import { selector } from 'recoil';
import { ProjStatus, projectStatusAtom } from './porjectStatusAtom';


export const projectStatusStringSelector = selector<string>({
  key: 'projectStatusStringSelector',
  get: ({ get }) => {
    const statusNumber = get(projectStatusAtom);
    return ProjStatus[statusNumber] || 'Unknown Status'; 
  },
});
