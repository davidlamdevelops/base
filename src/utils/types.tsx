export type UnionOmit<T, K extends string | number | symbol> = T extends unknown
  ? Omit<T, K>
  : never

const EVENT_COLORS = ['red', 'blue'];
export type Hey = {
  id: string
  hey?: boolean
}

const someObj = {
  key1: 'hey',
  key2: 'hey 2'
}

export type Something = {
  fn: (arg: string) => void
  color: (typeof EVENT_COLORS)[number]
  someVal: typeof someObj
} & { another?: (arg: string[]) => void} 
  | { another2?: (arg: boolean[]) => void}
  | { another3: UnionOmit<Hey, "id"> }

type ResponseWithStatus<T> = {
  status: number,
  data?: T & { error?: string }
}
  
export type Invitation = {
  source: string
  status: 'GENERATED' | 'NOT GENERATED' | 'UNDONE'
  session?: ResponseWithStatus<unknown>
}

export type Another = Something | Hey | Invitation

export type DynamicDeal = {
  dealType: 'DYNAMIC PRICE'
  price: number
  invitationNoData: Omit<Invitation, 'data'>
}

export type Keys = 'COMPANY_INFO' | 'CARD_INFO'
export type Values = 'IN_PROGRESS' | 'COMPLETE' | 'NOT_STARTED'
export type StepProgress = Partial<Record<Keys, Values>> // Partial makes all properties in T (if Partial<T>) optional

