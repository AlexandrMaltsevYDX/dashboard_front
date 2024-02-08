import React, {useState} from "react";
import Icon, {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import {Button, Layout, Menu, theme} from "antd";
import {Link, Outlet} from "react-router-dom";
import {BsHouses} from "react-icons/bs";
import {BsPeople} from "react-icons/bs";

const {Header, Sider, Content} = Layout;

export const DashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  return (
    <Layout style={{height: "100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <HomeOutlined />
            <span>Объекты</span>
            <Link to="/example" />
          </Menu.Item>
          <Menu.Item key="2">
            <Icon component={BsHouses} />
            <span>Поселки</span>
            <Link to="/example" />
          </Menu.Item>
          <Menu.Item key="3">
            <Icon component={BsPeople} />
            <span>Сотрудники</span>
            <Link to="/example" />
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="desktop" />
            <span>Посты</span>
            <Link to="/example" />
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="desktop" />
            <span>Отзывы</span>
            <Link to="/example" />
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="desktop" />
            <span>Заявки</span>
            <Link to="/example" />
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="desktop" />
            <span>Услуги</span>
            <Link to="/example" />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{padding: 0, background: colorBgContainer}}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
