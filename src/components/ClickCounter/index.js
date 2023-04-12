/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="counter-card">
          <h1 className="count">
            The Button has been clicked <span className="span">{count}</span>{' '}
            times
          </h1>
          <p className="caption">Click the button to increase the count</p>

          <button className="button" onClick={this.onIncrement}>
            Click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
