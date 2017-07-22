import React from 'react'
import { Grid } from 'semantic-ui-react'
import styled from 'styled-components'
import { compose, withState, lifecycle, withHandlers } from 'recompose'
import { SectionContainer } from '../../components/Style/Layout'
import { ImpotantTitle, SubTitle } from '../../components/Style/Text'

const bankImage = [
  'http://www.pngmart.com/files/3/Man-PNG-Pic.png',
  'http://www.pngall.com/wp-content/uploads/2016/05/Man-Download-PNG.png',
]

const giftImage = [
  'http://pngimg.com/uploads/girls/girls_PNG6495.png',
  'http://www.pngall.com/wp-content/uploads/2016/04/Happy-Girl-PNG-Image.png',
]

const AnimationImage = styled.img`
  transition: 0.7s ease;
`

const enhance = compose(
  withState('bankImage', 'setBankImage', bankImage[0]),
  withState('imagePos', 'setImagePos', '0'),
  withState('giftImage', 'setGiftImage', giftImage[0]),
  withHandlers({
    setAvataImage: (props) => () => {
      setTimeout(() => {
        const index = Math.floor(Math.random() * (Math.min(bankImage.length, giftImage.length)))
        props.setImagePos('500px')
        setTimeout(() => {
          props.setBankImage(bankImage[index])
          props.setGiftImage(giftImage[index])
          setTimeout(() => {
            props.setImagePos('0')
          }, 1300)
        }, 700)
      }, 5000)
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.setAvataImage()
    },
    componentWillReceiveProps(nextProps) {
      if (this.props.imagePos !== nextProps.imagePos && nextProps.imagePos === '0') {
        this.props.setAvataImage()
      }
    }
  })
)

const WelcomeSection = ({ bankImage, giftImage, imagePos }) => {
  return (
    <SectionContainer background="rgba(52, 73, 94, 1)">
      <Grid container>
        <Grid.Column width={16}>
          <ImpotantTitle>
            THE STORY OF GB
          </ImpotantTitle>

        </Grid.Column>
        <Grid.Column width={16}>
          <SubTitle>
            - Happy anniversary 4 th years -
          </SubTitle>
        </Grid.Column>
        <Grid.Column width={8} textAlign="left">
          <AnimationImage src={bankImage} width={307} style={{ transform: `translateY(${imagePos})` }} />
        </Grid.Column>
        <Grid.Column width={8} textAlign="right">
          <AnimationImage src={giftImage} width={307}  style={{ transform: `translateY(${imagePos})` }} />
        </Grid.Column>
      </Grid>
    </SectionContainer>
  )
}

export default enhance(WelcomeSection)
