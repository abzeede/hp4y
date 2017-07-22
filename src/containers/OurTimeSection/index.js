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

const convertDateToThaiDate = (dateTime) => {
  const thaiMonth = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
    'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤษจิกายน','ธันวาคม']
  const date = dateTime.getDate()
  const month = thaiMonth[dateTime.getUTCMonth()]
  const year = dateTime.getFullYear() + 543

  console.log(dateTime)
  return `${date} ${month} ${year}`
}

const anniversaryDate = new Date('July 24, 2013 00:00:00')

const OurTimeSection = () => {
  return (
    <SectionContainer background="#fff">
      <Title>จาก {convertDateToThaiDate(anniversaryDate)} ถึง {convertDateToThaiDate(new Date())}</Title>
      <SubTitle>
        เราแชร์เรื่องราว
        <BeatAnimation><img src="http://www.freeiconspng.com/uploads/heart-png-8.png" width={45} height={45} /></BeatAnimation>
        ของกันและกัน
      </SubTitle>
      <LoveTime startDate={anniversaryDate} />
    </SectionContainer>
  )
}

export default OurTimeSection
