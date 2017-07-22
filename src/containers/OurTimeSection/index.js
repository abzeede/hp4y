import React from 'react'
import styled from 'styled-components'
import LoveTime from '../../components/LoveTime'
import { SectionContainer } from '../../components/Style/Layout'
import { Title } from '../../components/Style/Text'
import { BeatAnimation } from '../../components/Style/Animation'

const SubTitle = styled.h3`
  font-family: Mitr;
	font-size: 32px;
	font-weight: 300;
	text-align: center;
	color: #7d7b7b;
`

const OurTimeSection = () => {
  return (
    <SectionContainer background="#fff">
      <Title>จาก 24 กรกฏาคม 2556 ถึง 24 กรกฏาคม 2560</Title>
      <SubTitle>
        เราแชร์เรื่องราวของกันและกัน
        <BeatAnimation><img src="http://www.freeiconspng.com/uploads/heart-png-8.png" width={45} height={45} /></BeatAnimation>
      </SubTitle>
      <LoveTime startDate={new Date('July 24, 2013 00:00:00')} />
    </SectionContainer>
  )
}

export default OurTimeSection
