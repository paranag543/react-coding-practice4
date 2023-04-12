/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image"
          />
        </div>
        <div>
          <h1 className="heading">Speed is {count}mph</h1>
          <p className="caption">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button className="accelerate-button" onClick={this.onIncrement}>
              Accelerate
            </button>
            <button className="apply-break-button" onClick={this.onDecrement}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
