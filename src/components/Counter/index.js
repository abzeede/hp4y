import React from 'react'
import { instanceOf } from 'prop-types'

class Counter extends React.Component {
  state = {
    year: '-',
    month: '-',
    day: '-',
    hour: '-',
    minute: '-',
    second: '-'
  }

  calculateTime = () => {
    const currentTime = new Date()
    const diff = new Date(currentTime.getTime() - this.props.startDate.getTime())
    const year = diff.getUTCFullYear() - 1970
    const month = diff.getUTCMonth()
    const day = diff.getUTCDay()
    const hour = diff.getUTCHours()
    const minute = diff.getUTCMinutes()
    const second = diff.getUTCSeconds()

    this.setState({ year, month, day, hour, minute, second })
  }

  componentDidMount = () => {
    setInterval(()=>{
      this.calculateTime()
    },1000)
  }

  render () {

    const { year, month, day, hour, minute, second } = this.state 
    return (
      <div>
        {year} years : {month} month: {day} day: {hour} hour: {minute} minute: {second} second
      </div>
    )
  }
}

Counter.defaultProps = {
  startDate: instanceOf(Date)
}

Counter.defaultProps = {
  startDate: new Date('July 24, 2013 00:00:00')
}

export default Counter
