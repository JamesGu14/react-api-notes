import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = { items: ['hello', 'world', 'click', 'me'] }
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleAdd () {
    var newItems = this.state.items.concat(['Enter some text'])
    this.setState({ items: newItems })
  }
  handleRemove() {
    var newItems = this.state.items
    newItems.splice(i, 1)
    this.setState({ items: newItems })
  }
  render () {
    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      )
    }.bind(this))
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example">
          {items}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
