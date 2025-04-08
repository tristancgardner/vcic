"use client"

interface TabsProps {
  tabs: string[]
  activeTab: string
  onChange: (tab: string) => void
}

export function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div className="flex space-x-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={tab === activeTab ? "tab tab-active" : "tab tab-inactive"}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
