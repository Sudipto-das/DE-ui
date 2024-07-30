export function calculateDuration(startDateStr: string, endDateStr: string): number {
    // Parse the date strings into Date objects
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
  
    // Calculate the difference in milliseconds
    const diffInMs = endDate.getTime() - startDate.getTime();
  
    // Convert the difference from milliseconds to days
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
  
    return diffInDays;
  }