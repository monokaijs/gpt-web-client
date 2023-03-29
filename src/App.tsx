import React, {useState} from 'react';
import {ConfigProvider} from 'antd';
import AppViews from "./views";
import {Provider as ReduxProvider} from "react-redux";
import {store} from "@app/redux/store";

function App() {
  return (
    <ReduxProvider store={store}>
      <ConfigProvider>
        <AppViews/>
      </ConfigProvider>
    </ReduxProvider>
  )
}

export default App
