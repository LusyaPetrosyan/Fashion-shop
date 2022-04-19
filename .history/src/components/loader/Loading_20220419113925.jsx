import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import "./loading.css";

const Loading = () => (
  <Segment className='main-loading'>
    <Dimmer active invertid>
      <Loader />
    </Dimmer>
  </Segment>
)

export default Loading