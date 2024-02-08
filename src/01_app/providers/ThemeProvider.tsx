import {ConfigProvider} from "antd";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const ThemeProvider = (props: Props) => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        // colorPrimary: "#00b96b",
        // borderRadius: 2,
        // Alias Token
        // colorBgContainer: "#f6ffed",
      },
    }}>
    {props.children}
  </ConfigProvider>
);

export default ThemeProvider;
