import * as TabsRadix from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

type TabType = {
  value: string
  tabName: string
  disabled?: boolean
}

export type PropsType = {
  tabs: TabType[]
  defaultValue?: string
  className?: string
  value?: string
  onValueChange: (value: string) => void
}
export const Tabs = (props: PropsType) => {
  const { tabs, value, onValueChange, defaultValue, className = '' } = props
  const styles = `${s.root} ${className}`

  return (
    <TabsRadix.Root
      className={styles}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
    >
      <TabsRadix.List className={s.tabsList} aria-label="Manage your account">
        {tabs.map(el => {
          return (
            <TabsRadix.Trigger
              key={el.value}
              className={s.trigger}
              value={el.value}
              disabled={el.disabled}
              asChild
            >
              <div> {el.tabName}</div>
            </TabsRadix.Trigger>
          )
        })}
      </TabsRadix.List>
    </TabsRadix.Root>
  )
}
