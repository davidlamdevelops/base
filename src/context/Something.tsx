import { ReactNode, createContext } from "react"

type SomethingContext = {
  something: boolean,
}

export const Context = createContext<SomethingContext | null>(null);

type SomethingProps = {
  children: ReactNode
}

export function SomethingProvider({ children }: SomethingProps) {
  return (
    <Context.Provider value={{something:true}}> 
      {children}
    </Context.Provider>
  )
}