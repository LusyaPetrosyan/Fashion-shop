import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const Loading = () => (
  <Segment cl>
    <Dimmer active>
      <Loader />
    </Dimmer>
  </Segment>
)

export default Loading