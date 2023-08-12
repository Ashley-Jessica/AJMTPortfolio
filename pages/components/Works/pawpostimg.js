import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleCelledInternally = () => (
  <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={8}>
        <p className="about_subtitle">Homepage</p>
        <img src="/static/images/homepage1.png" alt=""></img>
        <img src="/static/images/homepage2.png" alt=""></img>
        <img src="/static/images/homepage3.png" alt=""></img>
        <img src="/static/images/homepage4.png" alt=""></img>
        <img src="/static/images/homepage5.png" alt=""></img>
      </Grid.Column>
      <Grid.Column width={8}>
        <p className="about_subtitle">Missing Pets Feature</p>
        <img src="/static/images/missingcat.png" alt=""></img>
        <img src="/static/images/missingdog.png" alt=""></img>
        <img src="/static/images/missingpet.png" alt=""></img>
      </Grid.Column>
      <Grid.Column width={8}>
        <p className="about_subtitle">Log In and Sign Up</p>
        <img src="/static/images/login.png" alt=""></img>
        <img src="/static/images/signup.png" alt=""></img>
      </Grid.Column>
      <Grid.Column width={8}>
        <p className="about_subtitle">Adoption Page</p>
        <img src="/static/images/adoption.png" alt=""></img>
        <img src="/static/images/postforadopt.png" alt=""></img>
      </Grid.Column>
      <Grid.Column width={8}>
        <p className="about_subtitle">Admin Dashboard</p>
            <img src="/static/images/dashboard.png" alt=""></img>
      </Grid.Column>
      <Grid.Column width={8}>
        <p className="about_subtitle">Community Forum</p>
            <img src="/static/images/communityforum.png" alt=""></img>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleCelledInternally