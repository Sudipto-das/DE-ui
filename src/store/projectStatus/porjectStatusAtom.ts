import { atom } from 'recoil';
export enum ProjStatus {
    Pending=-1,
    Created = 0,
    InDiscussion = 1,
    InProgress = 2,
    InReview = 3,
    ApprovalAwaited = 4,
    DesignHandover = 5,
    InExecution = 6,
    Completed = 7
}
export const projectStatusAtom = atom<number>({
    key: 'projectStatusAtom',
    default: ProjStatus.Pending,
});