import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu} from 'antd'
import type {ItemType} from 'antd/es/menu/hooks/useItems'
import {CalendarOutlined, MailOutlined} from '@ant-design/icons'

type MenuConfigItem = {
  label: React.ReactNode
  key: React.Key
  icon?: React.ReactNode
  children?: ItemType[]
}

const menuCfg: MenuConfigItem[] = [
  {
    label: <Link to="/bookList">图书列表</Link>,
    key: 'bookList',
    icon: <MailOutlined />,
  },
  {
    label: <Link to="/addBook">新增图书</Link>,
    key: 'addBook',
    icon: <CalendarOutlined />,
  },
]

const buildMenuItems = (menuCfg: Array<MenuConfigItem>): ItemType[] => {
  return menuCfg.map((menu) => ({
    key: menu.key,
    icon: menu.icon,
    label: menu.label,
    children: menu.children,
  }))
}

const menuItems = buildMenuItems(menuCfg)

const SideBar: React.FC = (props: any) => {
  const pathname = props.location.pathname.split('/')[1]
  return (
    <Menu
      style={{width: 256, height: '100%'}}
      selectedKeys={[pathname]}
      mode="inline"
      theme="light"
      items={menuItems}
    />
  )
}

export default withRouter(SideBar)
