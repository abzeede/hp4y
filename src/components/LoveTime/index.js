import React from 'react'
import styled from 'styled-components'
import toArray from 'lodash/toArray'
import keys from 'lodash/keys'
import { instanceOf } from 'prop-types'


const LoveTimeContainer = styled.div`
  display: flex;
  align-items: center;

  .time-container {
    display: flex;
    align-items: center;
    margin-right: 15px;
  }

  .time {
    display: flex;
    width: 30px;
    height: 45px;
    border-radius: 5px;
    border: solid 1px #2b2a2a;
    background: #1b1b1b;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
  }
`

class LoveTime extends React.Component {

  static propTypes = {
    startDate: instanceOf(Date).isRequired
  }

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
    const day = diff.getUTCDate()
    const hour = diff.getUTCHours()
    const minute = diff.getUTCMinutes()
    const second = diff.getUTCSeconds()

    this.setState({ year, month, day, hour, minute, second })
  }

  initialCounter = (tickEvery = 1000) => {
    setInterval(()=>{
      this.calculateTime()
    }, tickEvery)
  }

  componentDidMount = () => {
    this.initialCounter()
  }

  generateTime = () => {
    const stateKeys = keys(this.state)

    return toArray(this.state).map((value, i) => {
      return (
        <div className="time-container">
          <span className="time">{value}</span>
          <span>{stateKeys[i]}</span>
        </div>
      )
    })
  }

  render () {
    return (
      <LoveTimeContainer>
        {this.generateTime()}
      </LoveTimeContainer>
    )
  }
}

export default LoveTime
