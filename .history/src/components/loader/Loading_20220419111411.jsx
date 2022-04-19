import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const LoaderExampleLoader = () => (
  <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>

    {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
  </Segment>
)

export default LoaderExampleLoader