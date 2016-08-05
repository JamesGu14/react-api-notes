import React, { Component, PropTypes } from 'react'

export default class Avatar extends Component {
  render () {
    return (
      <div>
        <PagePic pagename={this.props.pagename} />
        <PageLink pagename={this.props.pagename} />
      </div>
    )
  }
}

Avatar.propTypes = {
  pagename: PropTypes.string.isRequired
}

class PagePic extends Component {
  render () {
    return (
      <img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'} />
    )
  }
}

class PageLink extends Component {
  render () {
    return (
      <a href={'https://www.facebook.com/' + this.props.pagename}>
        {this.props.pagename}
      </a>
    )
  }
}
