import React from 'react';

class Nav extends React.Component {
  loadPage(path,name) {
    // this.props.history.push(path)
    console.log(this.props);
    const { history } = this.props
    //子组件直接用history.push会报错 需要父组件加上 history ={this.props.history}
    history.push({pathname:"/"+path,query: { name : name }});
    document.title  = name
  }
  render() {
    return (
      this.props.list.map(el => {
        return (
          <li key={el.name} onClick={() =>this.loadPage(el.link,el.name)}>{el.name}</li>
        )
      })
    )
  }
}

class Header extends React.Component {
  render() {
    let backAndTextColor = {
      backgroundColor:'#ccc',
      color:'#ff671b',
      fontSize:40,
      textAlign:'center',
      lineHeight:'250%',
      marginBottom: "25px"
    };
    return (
      <h1 style={backAndTextColor}>Hello React</h1>
    )
  }
}

class BasicLayout extends React.PureComponent{
    constructor(props) {
      super(props);
      this.state = {
        navList: [
          {name:'home',link:'navone/home'},
          {name:'user',link:"navone/user"},
          {name:'redux',link:'navone/redux'},
          {name:"game",link:"navone/game"},
          {name:"Antd",link:"navone/antd"},
          {name:"antdTable",link:"navone/antdTable"},
          {name:"lallal",link:'lalalal'},
          {name:'antdMenu',link:"navone/antdMenu"},
          {name:"apexCharts",link:"navone/apexCharts"}
        ]
      }
    }
    render(){
        const {children} = this.props;
        return (
            <div>
                <ul className="nav-box">
                  <Nav list={this.state.navList} history ={this.props.history}/>
                </ul>
                <Header />
                <div>{children}</div>
            </div>
        )
    }
}
export default BasicLayout;
