import React from "react";
import {Avatar, Button, Dropdown, MenuProps} from "antd";
import {LoginOutlined, LogoutOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import {useAppSelector} from "@app/redux/store";

const items: MenuProps['items'] = [
  {
    key: '1',
    icon: <UserOutlined/>,
    label: 'Profile',
  },
  {
    key: '2',
    icon: <SettingOutlined/>,
    label: 'Settings',
  },
  {
    key: '3',
    type: 'divider'
  },
  {
    key: '4',
    icon: <LogoutOutlined/>,
    label: 'Sign Out',
  },
];

export const ProfileMenu = () => {
  return (
    <Dropdown menu={{items}} placement="topLeft">
      <a href={'#'} onClick={e => e.preventDefault()}>
        <Avatar
          icon={<UserOutlined/>}
          size={40}
        />
      </a>
    </Dropdown>
  )
}
