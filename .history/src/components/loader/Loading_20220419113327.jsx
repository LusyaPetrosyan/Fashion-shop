import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import lo

const Loading = () => (
  <Segment className='main-loading'>
    <Dimmer active>
      <Loader />
    </Dimmer>
  </Segment>
)

export default Loading