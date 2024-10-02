export default interface CommentsInterface {
    Title: string;
    Type: number; 
    Description?: string;
    Image?: string;  // Allow null for optional properties
    Video?: string;  // Allow null for optional properties
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
    Image: '',         // Set to null instead of an empty string
    Video: '',         // Set to null instead of an empty string
    CreatedBy: "",
    ModifiedBy: "",
    CreatedDateTime: "",
    ModifiedDateTime: "",
    RecId: 0,
    RefTableId: 0,
    RefRecId: 0
};
