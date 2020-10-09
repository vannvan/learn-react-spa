import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class antdMenu extends React.Component {
  static defaultProps = {
    menulist:[
       { path:"/1",title:"meun1",icon:"book" },
      { path:"/2",title:"meun2",icon:"issues-close",
          children:[
            { title:"meun3",path:"/3",icon:"info-circle",children:[
                { title:"meun4",path:"/4",icon:"bars"},
                { title:"meun5",path:"/5",icon:"bars"},
                { title:"meun6",path:"/6",icon:"bars"},
                { title:"meun7",path:"/7",icon:"bars" }
              ] },
            { title:"meun8",path:"/8",icon:"branches",children:[
                { title:"meun9",path:"/9",icon:"bars" },
                { title:"meun10",path:"/10",icon:"bars" },
              ] },
            { title:"meun11",path:"/11",icon:"bars" },
            { title:"meun12",path:"/12",icon:"bars"},
          ]
       }
    ]
  }

  handleClick = e => {
    console.log('click ', e);
  };

  createMenu =  ((menuData)=>{  //创建菜单
    //let itemIndex = 0; //累计的每一项索引
    let submenuIndex = 0; //累计的每一项展开菜单索引
    let menu = [];
    const create = (menuData,el)=>{
      for(let i=0;i<menuData.length;i++){
        if(menuData[i].children){  //如果有子级菜单
          let children = [];
          create(menuData[i].children,children);
          submenuIndex++;
          el.push(
            <SubMenu
              key={`sub${submenuIndex}`}
              title={(
                <span style={{ height:'100%',display: 'block' }}>
                  <Icon type={menuData[i].icon} />{menuData[i].title}
                </span>
              )}
            >
              {children}
            </SubMenu>
          )
        }else{   //如果没有子级菜单
          //itemIndex++;
          el.push(
            <Menu.Item key={menuData[i].path} title={menuData[i].title}>
                {menuData[i].icon ? <Icon type={menuData[i].icon} /> : null}
                <span>{menuData[i].title}</span>
            </Menu.Item>
          )
        }
      }

    };

    create(menuData,menu);
    return menu;
  })(this.props.menulist);

  render() {
    return (
      <Menu {...this.props} 
          mode="inline"
          theme="dark">
        {this.createMenu}
      </Menu>
    );
  }
}

export default antdMenu
