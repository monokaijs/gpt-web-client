import React from "react";
import {Button, Drawer, Layout, Space} from "antd";
import {AppHeader} from "@app/components/layouts/Header";
import styles from './AppLayout.module.css';
import {MobileSidebar} from "@app/components/layouts/MobileSidebar";
import {Outlet} from "react-router-dom";

export default function AppLayout() {
  return (
    <Layout style={{height: '100%'}}>
      <MobileSidebar/>
      <AppHeader/>
      <Layout.Content className={styles.content}>
        <Outlet/>
      </Layout.Content>
    </Layout>
  )
}
