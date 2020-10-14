import React, { Component } from 'react';

import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import './index.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, history } from 'umi';

const MENU_LIST = require('./menu.js').default;

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class BasicLayout extends Component {
  rootSubmenuKeys = ['/comp', '/exception'];
  state = {
    collapsed: false,
    openKeys: ['/comp'],
  };

  onOpenChange = (openKeys: Array<String>) => {
    const latestOpenKey: String | undefined = openKeys.find(
      (key: String) => this.state.openKeys.indexOf(key) === -1,
    );
    console.log(latestOpenKey);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  componentDidMount() {
    this.rootSubmenuKeys.map((el: String) => {
      let reg = new RegExp(el);
      if (reg.test(this.props.location.pathname)) {
        this.setState({
          openKeys: [el],
        });
      }
    });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  menuTag = function deep(menuData: Array<Object>) {
    if (menuData && menuData.length > 0) {
      return menuData.map((item: any) => {
        if (item.children && item.children.length > 0) {
          return (
            <SubMenu key={item.path} title={item.name} icon={item.icon}>
              {deep(item.children)}
            </SubMenu>
          );
        }
        return (
          <Menu.Item key={item.path} icon={item.icon}>
            <Link to={item.path} replace>
              {item.name}
            </Link>
          </Menu.Item>
        );
      });
    }
  };
  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <img src={require('@/assets/images/logo.png')} height={40} />
            <span>XX后台管理系统</span>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            selectedKeys={this.props.location.pathname}
          >
            {this.menuTag(MENU_LIST)}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.toggle,
              },
            )}
            <Breadcrumb style={{ margin: '16px' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
