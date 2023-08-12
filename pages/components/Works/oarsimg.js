import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleCelledInternally = () => (
  <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={10}>
        <p className="about_subtitle">Online Room Accomodation System</p>
        <img src="/static/images/1.png" alt=""></img>
        <img src="/static/images/2.png" alt=""></img>
      </Grid.Column>
    </Grid.Row>
</Grid>
)
export default GridExampleCelledInternally