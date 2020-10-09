import React from 'react';
import Card from '@/components/Card'

class CardExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          isLoaded:false,
          name:'bob',
         
        }
    
    }
    handleChange = (e) => {
        this.setState({ name: e.target.value })
        console.log(this.state.name);
    }
   
    render() {
        const { name } = this.state;
        return (
            <div>
              <Card title="标题">
                <div>我将被放在card组件的body区域内容</div>
              </Card>

              <Card renderTitle= {
                  () => {
                      return <span>自定义标题</span>
                  }
              }>
                <div>我将被放在card组件的body区域内容</div>
              </Card>

              实现类似v-model
              <input value={name} onChange={this.handleChange}></input>
            </div>
          );
    }

}


export default CardExample