import React from 'react'
import styled from 'styled-components'
import { Grid, Image, Reveal } from 'semantic-ui-react'

const Content = styled.div`
  word-wrap: break-word;
  color: #454343;
  font-family: Mitr;
  margin-top: 15px;
  text-align: ${({ right }) => right ? 'left' : 'right'}
  
  h4 {
    margin-bottom: 0 !important;
  }
  h5 {
    margin-top: 0 !important;
    color: #8e8e8e;
  }
`

const Story = ({ right = false, data, image }) => {
  const content = [
    <Grid.Column width={10}>
      <Content right={right}>
        <h4>{ data.title }</h4>
        <h5>{`${data.date} ${!!data.location ? ` @${data.location}` : ''}`}</h5>
        <p>{data.content}</p>
      </Content>
    </Grid.Column>,
    <Grid.Column width={6}>
      <Reveal animated={`rotate ${right ? 'left' : 'right'}`}>
        <Reveal.Content visible>
          <Image src={image.cover} shape="circular" width={172} height={172} />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src={image.real} shape="circular" width={172} height={172}/>
        </Reveal.Content>
      </Reveal>
    </Grid.Column>
  ]

  return (
    <Grid>
      <Grid.Row>
        { right ? content.reverse() : content}
      </Grid.Row>
    </Grid>
  )
}

export default Story
