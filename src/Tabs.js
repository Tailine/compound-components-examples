import { createContext, useContext, useState } from "react"
import s from './Tabs.module.css'

const TabsContext = createContext()

function useTabsContext() {
  const context = useContext(TabsContext)

  if(!context) {
    throw Error('Context is being used outside Tabs component')
  }
  return context
}

export function Tabs({ children, defaultActive }) {

  const [selectedTab, setSelectedTab] = useState(defaultActive)
  
  const value = {
    selectedTab,
    setSelectedTab
  }

  return (
    <TabsContext.Provider value={value}>
      <div className={s.container}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export function TabItem({ children, value }) {

  const { selectedTab, setSelectedTab } = useTabsContext()

  return (
    <button className={`${s.item} ${selectedTab === value ? s.active : null}`} onClick={() => setSelectedTab(value)}>
      {children}
    </button>
  )
}

export function TabContent({ children, value }) {

  const { selectedTab } = useTabsContext()

  return (
    selectedTab === value ? <div className={s.content}>{children}</div> : null
  )
}