export type Todo = {
  name: string
  priority?: number
  completed: boolean
}

export type First = {
  first: string
  second: string
}

export type Second = First & {
  third: string
  fourth: string
}

const TITLE_STATUSES = ['hidden', 'mine', 'number', 'marked'] as const; // what does the as const do?
const OTHER_STATUSES = ['additional', 'here'] as const;

export type TitleStatus = (typeof TITLE_STATUSES)[number] | (typeof OTHER_STATUSES)[number];

export interface Car {
  name: string,
}

export interface Camry extends Car { // extends as inheritance
  model: string,
}

export interface James extends Car {
  year: number,
}

export type isCar<T> = T extends Car ? true : false;
export const carOne:Camry = {name: 'camry', model: 'abc'};
export type isCamryACar = isCar<Camry>;

type GetKeyProps<T,K> = {
  obj: T,
  key: K,
}

export function getKey<T, K extends keyof T>({obj, key}: GetKeyProps<T,K>) {
  return obj[key];
}

const val = {a: 'hello', b: 3, c: true};

export const aVal = getKey({obj: val, key: 'a'});
export const bVal = getKey({obj: val, key: 'b'});
