// unknown is like any, except that it's type-safe
// you have to check its type before use, unlike any
export function cc(...classes: unknown[]) {
  return classes.filter(c => typeof c === 'string').join(" ");
}

