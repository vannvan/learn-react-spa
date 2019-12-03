import React, { Component } from 'react';
import Charts from './Charts'
class ApexCharts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartsData:{
		      // options: {
		      //   chart: {
		      //     id: 'apexchart-example'
		      //   },
		      //   xaxis: {
		      //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
		      //   }
		      // },
		      // series: [{
		      //   name: 'series-1',
		      //   data: [30, 40, 45, 50, 49, 60, 70, 91]
		      // }]
		    },
			title:''
		}
	}
	//此处不能用componentDidMount
	componentWillMount() {
		this.setState({
			chartsData:{
				options: {
		        chart: {
		          id: 'apexchart-example'
		        },
		        xaxis: {
		          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
		        }
		      },
		      series: [{
		        name: 'series-1',
		        data: [30, 40, 45, 50, 49, 60, 70, 91]
		      }]
		  },
		  	title:"XXX柱状图"
		})
	}
	render() {
		return (
		  <div>
		  	<Charts title={this.state.title} data={this.state.chartsData}/>
		  </div>
		)
	}
}


export default ApexCharts
