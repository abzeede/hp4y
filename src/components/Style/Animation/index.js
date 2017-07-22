import styled from 'styled-components'

export const BeatAnimation = styled.span`
  display: inline-block;
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
`