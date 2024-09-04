export function convertNumberToDotString(input: number) {
  return input.toLocaleString('de-DE');
}

export function truncateString(input: string) {
  if (input.length > 18) {
    return input.slice(0, 15) + "...";
  }
  return input;
}