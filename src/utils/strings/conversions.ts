export function convertNumberToDotString(input: number) {
  return input.toLocaleString('de-DE');
}

export function truncateString(input: string) {
  if (input.length > 10) {
    return input.slice(0, -6) + "...";
  }
  return input;
}