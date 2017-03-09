import React from 'react'

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <h1>Test page</h1>
        </header>
        <div className="app-content">{this.props.children}</div>
      </div>
    )
  }
}
