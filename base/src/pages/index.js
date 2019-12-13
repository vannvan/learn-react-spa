import React from 'react';
export default class Home extends React.PureComponent{
  constructor(props) {
    super(props);
      this.state = {
          deviceType:''
      }
  }

  render(){
      function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
      }
      const isPC = IsPC()
      console.log(isPC)
      const elStyle = {
        display:isPC?'none':'block'
      }
      return (
          <div style={elStyle}>啊哈哈哈哈</div>
      )
  }
}
