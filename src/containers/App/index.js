import React, { Component } from 'react';
import styled from 'styled-components'
import LoveTime from '../../components/LoveTime'
import WelcomeSection from '../WelcomeSection'
import OurTimeSection from '../OurTimeSection'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222;
  color: white; 
`

/*const HeartWrapper = styled.div`
  display: flex;
  justify-content: center;
  animation-name: beatAnimation;
  animation-duration: 4s;
  animation-iteration-count: infinite;

  @keyframes beatAnimation {
    0% {
      transform: scale(1)
    }
    5% {
      transform: scale(1.1)
    }
    10% {
      transform: scale(1)
    }
    15% {
      transform: scale(1.1)
    }
    50% {
      transform: scale(1)
    }
    55% {
      transform: scale(1)
    }
    60% {
      transform: scale(1.1)
    }
    65% {
      transform: scale(1)
    }
    70% {
      transform: scale(1.1)
    }
  }
`*/

class App extends Component {
  render() {
    return (
      <Container>
        <WelcomeSection />
        <OurTimeSection />
          {/*<LoveTime startDate={new Date('July 24, 2013 00:00:00')}/>*/}
      </Container>
    );
  }
}

export default App;
