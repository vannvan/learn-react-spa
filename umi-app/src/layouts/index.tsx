import React, { Component } from 'react';

// import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import './index.less';
import { Layout, Menu, Breadcrumb, Avatar } from 'antd';
import { Link } from 'umi';

const MENU_LIST = require('./menu.js').default;

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class BasicLayout extends Component<any, any> {
  rootSubmenuKeys = MENU_LIST.map((el: object) => el.path);
  state = {
    collapsed: false,
    openKeys: ['/comp'],
  };

  onOpenChange = (openKeys: Array<string>) => {
    const latestOpenKey: string | undefined = openKeys.find(
      (key: string) => this.state.openKeys.indexOf(key) === -1,
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
    this.rootSubmenuKeys.map((el: any) => {
      let { pathname } = this.props.location;
      let reg = new RegExp(el);
      if (reg.test(pathname)) {
        this.setState({
          openKeys: [el],
        });
      }
    });
  }

  componentDidUpdate() {
    let currentPathName = this.props.location.pathname;
    let routeList = this.props.route.routes;
    let matchRouteMeta = routeList.find((el: any) => {
      return el.path == currentPathName;
    }).meta;
    document.title = matchRouteMeta ? matchRouteMeta.title : '后台管理系统';
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  menuTag = function deep(menuData: Array<object>) {
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
            <span>{!this.state.collapsed ? 'XX后台管理系统' : ''}</span>
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
            <span className="avatar-wrap">
              <Avatar size={30}>USER</Avatar>
            </span>
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
