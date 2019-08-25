import React, {Component} from 'react'

class App extends Component{
    constructor(props) {
      super(props);
      this.state = {
        navList: [
          {name:'user',link:"user"},
          {name:"game",link:"game"}
        ]
      }
    }
    render(){
        return (
          <div>
            <Header />
            <ul className="nav-box">
              <Nav list={this.state.navList} history ={this.props.history}/>
            </ul>
          </div>
        )
    }
}
class Header extends Component {
  render() {
    let backAndTextColor = {
      backgroundColor:'#ccc',
      color:'#ff671b',
      fontSize:40,
      textAlign:'center',
      lineHeight:'250%'
    };
    return (
      <h1 style={backAndTextColor}>Hello React</h1>
    )
  }
}

class Nav extends Component {
  loadPage(path) {
    // this.props.history.push(path)
    console.log(this.props);
    //子组件直接用history.push会报错 需要父组件加上 history ={this.props.history}
    this.props.history.push({pathname:"/"+path,query: { name : 'sunny' }});
  }
  render() {
    return (
      this.props.list.map(el => {
        return (
          <li key={el.name} onClick={() =>this.loadPage(el.link)}>{el.name}</li>
        )
      })
    )
  }
}
export default App;
