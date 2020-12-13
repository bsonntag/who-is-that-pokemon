export function normalizeName(name: string, input: string): string {
  if (
    (name.includes('♀') && !input.includes('♀')) ||
    (name.includes('♂') && !input.includes('♂'))
  ) {
    return name.replace(/[♀♂]/g, '');
  } else {
    return name;
  }
}
