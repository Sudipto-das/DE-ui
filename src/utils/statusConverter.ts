import { ProjStatus } from "../store/projectStatus/porjectStatusAtom";


export function getStatusString(status: number): string {
  switch (status) {
    case ProjStatus.NoProject:
      return "No Project";
    case ProjStatus.Created:
      return "Created";
    case ProjStatus.InDiscussion:
      return "In Discussion";
    case ProjStatus.InProgress:
      return "In Progress";
    case ProjStatus.InReview:
      return "In Review";
    case ProjStatus.ApprovalAwaited:
      return "Approval Awaited";
    case ProjStatus.DesignHandover:
      return "Design Handover";
    case ProjStatus.InExecution:
      return "In Execution";
    case ProjStatus.Completed:
      return "Completed";
    default:
      return "Unknown Status";
  }
}
