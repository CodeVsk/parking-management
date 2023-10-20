export function enrollmentGenerator(): string {
  const ENROLLMENT_SIZE = 6;
  const characteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let enrollment = "";

  for (let i = 0; i < ENROLLMENT_SIZE; i++) {
    const randomChar = Math.floor(Math.random() * characteres.length);
    enrollment += characteres.charAt(randomChar);
  }

  return enrollment;
}
