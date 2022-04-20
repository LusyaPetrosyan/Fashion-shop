import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Home" />
                
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Products" />
              </Grid.Column>

              <Grid.Column width={3}>
                <Header as="h4" inverted>
                 <Icon name='facebook' />
                 <Icon name='instagram' />
                 <Icon name='twitter square' />
                </Header>
              </Grid.Column>

              <Grid.Column width={3}>
              <Icon name='phone square'/>
              +374 93 322 902
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
