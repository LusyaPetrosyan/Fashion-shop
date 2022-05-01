import {
  Container,
  Grid,
  Header,
  Icon,
  Segment,
  List,
} from "semantic-ui-react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About us" />
              </Grid.Column>

              <Grid.Column width={3}>
                <Header inverted as="h4" content="Help" />
              </Grid.Column>

              <Grid.Column width={4}>
                <Header inverted as="h4" id="foothead" content="Contacts" />
                <List link inverted>
                  <List.Item
                    href="https://www.facebook.com/profile.php?id=100012574723998"
                    as="a"
                  >
                    <Icon name="facebook" />
                  </List.Item>
                  <List.Item
                    href="https://www.linkedin.com/in/lusya-petrosyan-9384b4226/"
                    as="a"
                  >
                    <Icon name="github" />
                  </List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={3}>
                <Icon name="phone square" />
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
