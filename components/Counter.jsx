import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = { count: props.initialCount, enough1: '' }
    this.tick = this.tick.bind(this)
  }
  tick () {
    if (this.state.count >= 4 && this.state.count < 9) {
      this.setState({ count: this.state.count + 1, enough1: 'Enough' })
    } else if (this.state.count >= 9) {
      this.setState({ count: this.state.count + 1, enough1: 'Too Many' })
    } else {
      this.setState({ count: this.state.count + 1 })
    }
  }
  render () {
    let enough2 = ''
    if (this.state.count >= 5 && this.state.count < 10) {
      enough2 = 'Enough'
    } else if (this.state.count >= 10) {
      enough2 = 'Too Much'
    }
    return (
      <div>
        <h3>Total Count: {this.state.count}</h3>
        <button onClick={this.tick} className={enough2 !== 'Too Much' ? 'show' : 'hide'}>Add Count</button>
        <p>First way of if else: {this.state.enough1}</p>
        <p>Second way of if else: {enough2}</p>
      </div>
    )
  }
}
