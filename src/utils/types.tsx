export type UnionOmit<T, K extends string | number | symbol> = T extends unknown
  ? Omit<T, K>
  : never

const EVENT_COLORS = ['red', 'blue'];
export type Hey = {
  id: string
  hey?: boolean
}

export type Something = {
  fn: (arg: string) => void,
  color: (typeof EVENT_COLORS)[number],
} & { another?: (arg: string[]) => void} 
  | { another2?: (arg: boolean[]) => void}
  | { another3: UnionOmit<Hey, "id"> }

