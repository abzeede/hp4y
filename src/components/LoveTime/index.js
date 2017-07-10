import React from 'react'
import { instanceOf } from 'prop-types'

class LoveTime extends React.Component {

  static propTypes = {
    startDate: instanceOf(Date).isRequired
  }

  state = {
    year: '-',
    month: '-',
    week: '-',
    date: '-',
    hour: '-',
    minute: '-',
    second: '-'
  }

  calculateTime = () => {
    const currentTime = new Date()
    const diff = new Date(currentTime.getTime() - this.props.startDate.getTime())
    const year = diff.getUTCFullYear() - 1970
    const month = diff.getUTCMonth()
    const date = diff.getUTCDate()
    const hour = diff.getUTCHours()
    const minute = diff.getUTCMinutes()
    const second = diff.getUTCSeconds()

    this.setState({ year, month, date, hour, minute, second })
  }

  initialCounter = (tickEvery = 1000) => {
    setInterval(()=>{
      this.calculateTime()
    }, tickEvery)
  }

  componentDidMount = () => {
    this.initialCounter()
  }

  render () {

    const { year, month, date, hour, minute, second } = this.state 
    return (
      <div>
        {year} years : {month} month: {date} day: {hour} hour: {minute} minute: {second} second
      </div>
    )
  }
}

export default LoveTime
