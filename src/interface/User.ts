export interface User {
    AccountNum: string;
    Name: string;
    CustGroupName: string;
    Blocked: number;
    CreatedBy: string;
    CreatedDateTime: string;
    Currency: string;
    CustGroup: string;
    Email: string;
    Manager: string;
    ManagerId: string;
    ManagerRecId: string;
    ModifiedBy: string;
    ModifiedDateTime: string;
    PCode: string;
    Phone: string;
    RecId: string;
    SourcedBy: string;
    RmRating:number;
    Status:number;
    Experience:string
    RmPhone:string;
    RmEmail:string
    category: 'Premium' | 'Standard' | 'Ultimate';
  }
  