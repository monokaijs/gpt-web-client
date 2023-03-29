import {Avatar, Button, Layout, Menu} from "antd";
import React from "react";
import styles from './Header.module.scss';
import {ProfileMenu} from "@app/components/layouts/Header/ProfileMenu";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {useWindowSize} from "@app/hooks/useWindowSize";
import {useAppDispatch} from "@app/redux/store";
import {setSideBarOpened} from "@app/redux/slices/app.slice";
import {Link} from "react-router-dom";
import Logo from "@app/components/layouts/Logo";


export const AppHeader = () => {
  const dispatch = useAppDispatch();
  const {width} = useWindowSize();
  const isDesktop = width >= 990;
  return (
    <Layout.Header
      className={styles.outer}
    >
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          {isDesktop && (
            <div className={styles.logoContainer}>
              <Logo/>
            </div>
          )}
          <Menu
            theme="light"
            mode="horizontal"
            selectable={isDesktop}
            defaultSelectedKeys={['2']}
            className={'main-navigation'}
            style={{
              borderBottom: 'none',
              background: 'transparent',
              width: '100%',
            }}
            items={isDesktop ? [{
              key: 'author',
              label: <Link to={'/author'}>Author</Link>
            }] : [{
              key: 'menu',
              onClick: () => {
                dispatch(setSideBarOpened(true));
              },
              label: <div className={styles.menuBtn}>
                <MenuUnfoldOutlined style={{fontSize: 20}}/>
              </div>
            }]}
          />
        </div>
        <div className={styles.headerRight}>
          <ProfileMenu/>
        </div>
      </div>
    </Layout.Header>
  )
}
