export interface Address {
  Address: string;
  City: string;
  Country: string;
  District: string;
  IsPrimary: number;
  RecId: string;
  State: string;
  Street: string;
  ZipCode: string;
}

export interface CustomerResponse {
  AccountNum: string;
  Name: string;
  CustGroupName: string;
  CustGroup: string;
  Currency: string;
  Blocked: number;
  Phone: string;
  Email: string;
  PCode: string;
  RecId: string;
  CreatedBy: string;
  CreatedDateTime: string;
  ModifiedBy: string;
  ModifiedDateTime: string;
  Id: string;
  Manager: string;
  ManagerId: string;
  ManagerRecId: string;
  Session: string;
  SourcedBy: string;
  Token: string;
  myDesignsCount: number;
  uploadedDesigns: number;
  0: Address; // Assuming there could be multiple addresses
  RmRating:number
  RmPhone:string
  RmEmail:string
  category:"Premium" | "Standard" | "Ultimate" 
}

