export interface LocationInterface {
  RefRecId: number;
  RefTableId: number;
  IsPrimary: number;
  Address: string;
  ZIPCODE: string;
  CITY: string;
  STATE: string;
  COUNTRY: string;
  STREET: string;
  DISTRICT: string;
  ModifiedBy: string;
  ModifiedDateTime?: string;
  RecId?: number;
  CreatedBy: string;
  CreatedDateTime?: string;
}