import React, { Component } from 'react';
import styled from 'styled-components'
import Slider from 'react-slick'
import { SectionContainer } from '../../components/Style/Layout'
import WelcomeSection from '../WelcomeSection'
import OurTimeSection from '../OurTimeSection'
import OurStorySection from '../OurStorySection'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222;
  color: white; 
`

class App extends Component {
  settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    fade: true,
    adaptiveHeight: true,
  };

  render() {
    return (
      <Container>
        <WelcomeSection />
        <OurTimeSection />
        <OurStorySection />
        <SectionContainer background="#fff">
          <Slider {...this.settings}>
            <img src="http://demo.smartaddons.com/extensions/joomla17/cache/mod_sj_content_slider/2c04826e09a2d5e19101b62a6843ba68.jpeg" height="560px" alt="" />
            <img src="http://www.pauldutu.eu/wp-content/uploads/2015/02/slider9.jpg" height="560px" alt="" />
            <img src="http://demo.smartaddons.com/extensions/joomla17/cache/mod_sj_content_slider/2c04826e09a2d5e19101b62a6843ba68.jpeg" height="560px" alt="" />
            <img src="http://www.pauldutu.eu/wp-content/uploads/2015/02/slider9.jpg" height="560px" alt="" />
          </Slider>
        </SectionContainer>
      </Container>
    );
  }
}

export default App;
