import {Grid, Segment} from "semantic-ui-react";

function PendingTable({list}) {
  return (
      {list && list.length > 0 && }
    <Grid>
      <Grid.Row>
        <Grid.Column width = "5">
          <Segment>1</Segment>
        </Grid.Column >
        <Grid.Column width = "6">
          <Segment>1</Segment>
        </Grid.Column>
        <Grid.Column width = "3">
          <Segment>1</Segment>
        </Grid.Column>
        <Grid.Column width = "2">
          <Segment>1</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default PendingTable;
