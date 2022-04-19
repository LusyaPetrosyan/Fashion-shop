import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const Loading = () => (
  <Segment className='loadin'>
    <Dimmer active>
      <Loader />
    </Dimmer>
  </Segment>
)

export default Loading