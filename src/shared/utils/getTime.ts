export function getTime() {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 5 && hour <= 11) return "morning";
  if (hour > 11 && hour <= 17) return "afternoon";
  return "night";
}
