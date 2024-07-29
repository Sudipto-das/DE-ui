interface ProjectsInterface {
    ProjId: string;
    Name: string;
    Description: string;
    StartDate: string;
    EndDate: string;
    Status: number;
    Budget: number;
    CustAccount: number;
    ProjManager: number;
    DesignManager: number;
    Type: number;
    Category: number;
    DlvLocation: number;
    CreatedBy?: string;
    CreatedDateTime?: string;
    ModifiedBy?: string;
    ModifiedDateTime?: string;
    RecId?: number;
}


export default ProjectsInterface


export const EmptyProjTable:ProjectsInterface = {
    ProjId: "",
    Name: "",
    Description: "",
    StartDate: "",
    EndDate: "",
    Status: 0,
    Budget: 0,
    CustAccount: 0,
    ProjManager: 0,
    DesignManager: 0,
    Type: 0,
    Category: 0,
    DlvLocation: 0,
  }