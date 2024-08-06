export function calculateDuration(startDateStr: string, endDateStr: string): string {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();

  if (days < 0) {
      months -= 1;
      days += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate(); // days in the previous month
  }

  if (months < 0) {
      years -= 1;
      months += 12;
  }

  let duration = '';
  if (years > 0) {
      duration += `${years} year${years !== 1 ? 's' : ''} `;
  }
  if (months > 0) {
      duration += `${months} month${months !== 1 ? 's' : ''} `;
  }
  if (days > 0) {
      duration += `${days} day${days !== 1 ? 's' : ''} `;
  }

  return duration.trim();
}
