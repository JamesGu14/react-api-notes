import React, { Component } from 'react'
import ReactDom from 'react-dom'
// import TodoList from './components/Animation.jsx'
import LinkButton from './components/LinkButton.jsx'
import FirstElement from './components/FirstElement.jsx'
import Avatar from './components/Avatar.jsx'
import Counter from './components/Counter.jsx'
import Form from './components/Form.jsx'

class App extends Component {
  render () {
    return (
      <div>
        <LinkButton />
        <FirstElement date={this.props.date}/>
        <Avatar pagename={this.props.pagename} />
        <Counter initialCount={this.props.initialCount} />
        <Form />
      </div>
    )
  }
}

var props = {}
props.date = new Date()
props.pagename = 'Engineering'
props.initialCount = 0

ReactDom.render(
  <App {...props} />,
  document.getElementById('example')
)
