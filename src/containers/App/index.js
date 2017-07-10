import React, { Component } from 'react';
import styled from 'styled-components'
import LoveTime from '../../components/LoveTime'
// import './App.css';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #222;
  padding: 20px;
  color: white;
`

class App extends Component {
  render() {
    return (
      <Container>
        <div>
          <h2>{`HPA4Y <3 <3 <3`}</h2>
          <LoveTime startDate={new Date('July 24, 2013 00:00:00')}/>
        </div>
      </Container>
    );
  }
}

export default App;
