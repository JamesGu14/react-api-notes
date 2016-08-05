import React, { Component } from 'react'

export default class FirstElement extends Component {
  render() {
    return (
      <p>
        Hello, <input type="text" placeholder="Your name here" />!
        It is {this.props.date.toTimeString()}
      </p>
    )
  }
}
