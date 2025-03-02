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