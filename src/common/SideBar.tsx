import {
    CalendarOutlined,
    MailOutlined,
  } from '@ant-design/icons';
  import { Menu } from 'antd';
  import type { MenuProps } from 'antd/es/menu';
  import React from 'react';
import { Link, withRouter } from 'react-router-dom';
  
  type MenuItem = Required<MenuProps>['items'][number];
  
  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem((
        <Link to="/one">Navigation One</Link>
    ), 'one', <MailOutlined />),
    getItem((
        <Link to="/two">Navigation two</Link>
    ), 'two', <CalendarOutlined />),
    getItem((
        <Link to="/three">Navigation three</Link>
    ), 'three', <CalendarOutlined />),
  ];
  
  const SideBar: React.FC = (props: any) => {
    const pathname = props.location.pathname.split('/')[1]
    return (
      <>
        <Menu
          style={{ width: 256, height: '100%' }}
          selectedKeys={[pathname]}
          mode="inline"
          theme="light"
          items={items}
        />
      </>
    );
  };
  
  export default withRouter(SideBar);