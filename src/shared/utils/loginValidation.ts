export function validateEmail(email: string) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  return emailRegex.test(email);
}

export function validatePassword(password: string) {
  return password.length >= 6;
}

export function validateUsername(username: string) {
  return username.length >= 4;
}
