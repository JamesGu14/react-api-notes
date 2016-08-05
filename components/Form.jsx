import React, { Component } from 'react'
import jQuery from 'jquery'

export default class Form extends Component {
  constructor () {
    super()
    this.state = { displayData: [] }
    this.ajaxCheck = this.ajaxCheck.bind(this)
  }
  ajaxCheck () {
    var _this = this
    jQuery.get('http://localhost:3000/api/comments', function (data) {
      _this.setState({ displayData: data })
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.ajaxCheck}>Ajax Call</button>
        {this.state.displayData.length}
        <table>
          <tbody>
          <tr>
            <td>Author</td>
            <td>Text</td>
            {this.state.displayData.forEach(function(element) {
              return <TableItem author={element.author} text={element.text} />
            })}
          </tr>
          </tbody>
        </table>
        <select multiple={true}>
          <option value="A">Apple</option>
          <option value="B">Banana</option>
          <option value="C">Cranberry</option>
        </select>
      </div>
    )
  }
}

// <Table data={this.displayData} />
class TableItem extends Component {
  render () {
    return (
      <tr>
        <td>{this.props.author}</td>
        <td>{this.props.text}</td>
      </tr>
    )
  }
}
