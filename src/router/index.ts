import type * as React from 'react'
import type { RouteComponentProps } from 'react-router'

export type RoutesType = {
  name: string
  path: string
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
  icon?: JSX.Element
  exact?: boolean // 默认true
  hide?: boolean
  auth?: string
  roles?: string[] // 带有这个角色的才可以看到菜单
  indexpath?: string
  children?: RoutesType[]
  wrapper?: React.FunctionComponent | React.ClassicComponentClass
}
