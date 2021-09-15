import { useState } from "react"
import { TabsContext, useTabsContext } from "./hooks/useTabsContext"
import s from './Tabs.module.css'

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