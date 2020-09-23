/*
 * @Author: vannvan <https://github.com/vannvan>
 * @Date:   2019-12-03 10:06:37
 * @Last Modified by:   vannvan
 * @Last Modified time: 2019-12-03 15:18:02
 */
import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class Charts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      propsData: {},
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.data)
  }

  render() {
    const { title, data } = this.props
    return (
      <div>
        <span style={{ height: 35 }}> {title} </span>{' '}
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          width={500}
          height={320}
        />{' '}
      </div>
    )
  }
}

export default Charts
