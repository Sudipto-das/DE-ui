export interface Addresses {
    Address: Address[];
    IsPrimary: number;
    RecId: string;
  }

export interface Address{
    country:string,
    city:string,
    state:string,
    pin:string
}
  