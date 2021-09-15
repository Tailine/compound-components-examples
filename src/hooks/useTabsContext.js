import { createContext, useContext } from "react"

export const TabsContext = createContext()

export function useTabsContext() {
  const context = useContext(TabsContext)

  if(!context) {
    throw Error('Context is being used outside Tabs component')
  }
  return context
}