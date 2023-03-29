import React from "react";
import {Button, Drawer} from "antd";
import {useAppDispatch, useAppSelector} from "@app/redux/store";
import {setSideBarOpened} from "@app/redux/slices/app.slice";
import styles from './MobileSidebar.module.css';
import {MenuFoldOutlined} from "@ant-design/icons";
import Logo from "@app/components/layouts/Logo";

export const MobileSidebar = () => {
  const dispatch = useAppDispatch();
  const {sidebarOpened} = useAppSelector(state => state.app);

  const close = () => {
    dispatch(setSideBarOpened(false));
  };

  return (
    <Drawer
      placement={'left'}
      width={378}
      open={sidebarOpened}
      headerStyle={{display: 'none'}}
      onClose={close}
      bodyStyle={{padding: '0'}}
    >
      <div className={styles.sidebarHeader}>
        <Logo/>
        <Button
          size={'large'} type={'text'}
          onClick={close}
        >
          <MenuFoldOutlined/>
        </Button>
      </div>
    </Drawer>
  )
}
