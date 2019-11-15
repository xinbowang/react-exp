import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import './scss/index.scss';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const WebLayout = (props: any) => {
  let [current, setCurrent] = useState('1');

  const handleClick = (e: any) => {
    setCurrent(e.key);
  }

  return (
    <Layout>
      <Sider className="my-sider">
        <Menu
          theme={'dark'}
          onClick={handleClick}
          style={{ width: 200 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[current]}
          mode="inline"
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>
              <Link to="/">首页</Link>
            </span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="2"><Link to="/register">注册</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/signin">打卡</Link></Menu.Item>
            <Menu.Item key="4">Option 3</Menu.Item>
            <Menu.Item key="5">Option 4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          {props.children}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default WebLayout;