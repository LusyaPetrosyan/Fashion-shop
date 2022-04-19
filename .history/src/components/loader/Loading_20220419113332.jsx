import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import loadin

const Loading = () => (
  <Segment className='main-loading'>
    <Dimmer active>
      <Loader />
    </Dimmer>
  </Segment>
)

export default Loading