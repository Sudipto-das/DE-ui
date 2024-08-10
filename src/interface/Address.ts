export interface LocationInterface {
  RefRecId: number;
  RefTableId: number;
  IsPrimary: number;
  Address: string;
  ZipCode: string;
  City: string;
  State: string;
  Country: string;
  Street: string;
  District: string;
  ModifiedBy: string;
  ModifiedDateTime?: string;
  RecId?: number;
  CreatedBy: string;
  CreatedDateTime?: string;
}