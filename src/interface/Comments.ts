export default interface CommentsInterface {
    Title: string;
    Type: number; 
    Description?: string;
    Image?: string;
    Video?: string;
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
    Image: "",
    Video: "",
    CreatedBy: "",
    ModifiedBy: "",
    CreatedDateTime: "",
    ModifiedDateTime: "",
    RecId: 0,
    RefTableId: 0,
    RefRecId: 0
}


