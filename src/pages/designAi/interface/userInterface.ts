export default interface UserInterface {
    uid?: string;
    email: string;
    fname: string;
    lname: string;
    emailVerified?: boolean;
    phoneVerified: boolean;
    phoneNumber?: string;
    pCode?: string;
    address?: string;
    country?: string;
    state?: string;
    city?:string;
    pincode:string,
    password?: string;
  }
  
  export interface UserErrorInterface {
    message: string;
    field: string;
    hasError: boolean;
  }
  
  export interface UserSignInInterface {
    number: string;
    phoneVerified:boolean
  }
  
  export interface SavedUserInterface {
    number: string;
    name: string;
    numberVerified: boolean;
    email?: string;
  }
  