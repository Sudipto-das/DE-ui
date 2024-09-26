export interface ProjectDetail {
  PROJID: string;
  NAME: string;
  DESCRIPTION: string;
  STARTDATE: string;
  ENDDATE: string;
  STAGE: number;
  BUDGET: number;
  CATEGORY: number;
  TYPE: number;
  SIZE: number
  DLVLOCATION: string;
  PROJMANAGER: string;
  MODIFIEDDATETIME: string;
  RECID: string;
  ASSIGNEDMANAGER: AssignedDesignerDetail | undefined;
}

export interface AssignedDesignerDetail {
  ProjId: string;
  Name: string;
  Description: string;
  CustName: string;
  AccountNum: string;
  CustAccount: string;
  StartDate: string;
  EndDate: string;
  Status: number;
  ProjManager: string;
  ProjManagerId: string;
  ProjManagerRecId: string;
  DesignManager: string;
  DesignManagerId: string;
  DesignManagerRecId: string;
  Type: number;
  Category: number;
  ExtendedDate: string;
  CreatedBy: string;
  ModifiedBy: string;
  ModifiedDateTime: string;
  CreatedDateTime: string;
  RecId: string;
  Id: string;
}

export interface ProjectsInterface {
  projDetails: ProjectDetail[] | [];
}

export const transformApiResponse = (data: { projDetails: ProjectDetail[], assignedDesignersDetails: AssignedDesignerDetail[] }): ProjectsInterface => {
  const { projDetails, assignedDesignersDetails } = data;

  // Map assigned designers to each project
  const projectsWithDesigners = projDetails.map(project => {
    const assignedDesigners = assignedDesignersDetails.find(designer => designer.ProjId === project.PROJID);

    return {
      ...project,
      ASSIGNEDMANAGER: assignedDesigners,
    };
  });

  return {
    projDetails: projectsWithDesigners,
  };
};
