import React from 'react'
import { Grid } from 'semantic-ui-react'
import { SectionContainer } from '../../components/Style/Layout'
import { ImpotantTitle, SubTitle } from '../../components/Style/Text'

const WelcomeSection = () => {
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
          <img src="http://www.pngmart.com/files/3/Man-PNG-Pic.png" width={307} />
        </Grid.Column>
        <Grid.Column width={8} textAlign="right">
          <img src="http://www.pngmart.com/files/3/Man-PNG-Pic.png" width={307} />
        </Grid.Column>
      </Grid>
    </SectionContainer>
  )
}

export default WelcomeSection
