export const escapeCharsPattern = /[<>&"]/;

export function validateDate(dateStr: string): boolean {
  const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;
  if (!datePattern.test(dateStr)) return false;

  const [day, month, year] = dateStr.split('.').map(Number);
  const date = new Date(year, month - 1, day);
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  return date >= now;
}

export function validateCity(city: string): boolean {
  if (escapeCharsPattern.test(city)) return false;
  return city.length > 0;
}
