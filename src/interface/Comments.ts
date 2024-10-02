export default interface CommentsInterface {
    Title: string;
    Type: number; 
    Description?: string;
    Image?: File | null;  // Allow null for optional properties
    Video?: File | null;  // Allow null for optional properties
    CreatedBy?: string;
    ModifiedBy?: string;
    CreatedDateTime?: string;
    ModifiedDateTime?: string;
    RecId?: number;
    RefTableId?: number;
    RefRecId?: number;
}

export const EmptyComment: CommentsInterface = {
    Title: "",
    Description: "",
    Type: 0,
    Image: null,         // Set to null instead of an empty string
    Video: null,         // Set to null instead of an empty string
    CreatedBy: "",
    ModifiedBy: "",
    CreatedDateTime: "",
    ModifiedDateTime: "",
    RecId: 0,
    RefTableId: 0,
    RefRecId: 0
};
