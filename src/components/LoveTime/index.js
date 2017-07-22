import React from 'react'
import styled from 'styled-components'
import toArray from 'lodash/toArray'
import keys from 'lodash/keys'
import { Grid } from 'semantic-ui-react'
import { instanceOf } from 'prop-types'


const LoveTimeContainer = styled.div`
  margin-top: 90px;
  
  .time {
    width: 167px;
    height: 167px;
    background-color: rgba(0, 0, 0, 0.0);
    border: solid 3px #b8b7b7;
    border-radius: 90px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 1px rgba(224, 57, 151, 0.6);
    
    .value {
      font-family: Mitr;
      font-size: 59px;
      font-weight: 200;
      justify-content: center;
      text-align: center;
      color: #8e8e8e;
    }
    
    .type {
      font-family: Mitr;
      font-size: 24px;
      font-weight: 200;
      text-align: center;
      color: #8e8e8e;
      margin-top: 25px;   
    }
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

  messages = () => ({
    year: 'ปี',
    month: 'เดือน',
    day: 'วัน',
    hour: 'ชั่วโมง',
    minute: 'นาที',
    second: 'วินาที'
  })

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
        <Grid.Column>
          <div className="time">
            <div className="value">
              {value}
            </div>
            <div className="type">
              {this.messages()[stateKeys[i]]}
            </div>
          </div>
        </Grid.Column>
      )
    })
  }

  render () {
    return (
      <LoveTimeContainer>
        <Grid columns={6} container>
          {this.generateTime()}
        </Grid>
      </LoveTimeContainer>
    )
  }
}

export default LoveTime
