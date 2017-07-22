import React from 'react'
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'
import { SectionContainer } from '../../components/Style/Layout'
import { Title } from '../../components/Style/Text'
import Story from '../../components/Story'

import stories from './stories'

const StyledGridColumn = styled(Grid.Column)`
  padding: 35px !important; 
  border-right: ${({ textAlign }) => textAlign === 'right' ? 'solid 1px #b8b7b7' : ''};
  ${({ textAlign }) => textAlign === 'left' ? 'margin-top: 150px !important' : ''};
`

const StoryWrapper = styled.div`
  margin-top: 70px;
`

const renderStory = () => {
  return stories.map((story, i) => (
    <StyledGridColumn textAlign={i % 2 === 0 ? 'right' : 'left'}>
      <Story right={i % 2 !== 0} {...story} />
    </StyledGridColumn>
  ))
}

const OurStorySection = () => {
  return (
    <SectionContainer background="#fcfcfc" height="auto">
      <Title>
        We started here
      </Title>
      <StoryWrapper>
        <Grid columns={2} container>
          {renderStory()}
        </Grid>
      </StoryWrapper>
      <Title style={{ marginBottom: '70px' }}>
        Our story is never end...
      </Title>
    </SectionContainer>
  )
}

export default OurStorySection
