import { Grid, Segment } from "semantic-ui-react";
import Pro

function PendingTable({ list }) {
  return (
    <>
      {list &&
        list.length > 0 &&
        list.map((item) => {
          return (
            <Grid>
              <Grid.Row>
                <Grid.Column width="5">
                  <Segment>
                    <Image
                      avatar
                      className="product-icon"
                      src={item.product.img[0]?.imagePath || productImg}
                    />
                  </Segment>
                </Grid.Column>
                <Grid.Column width="6">
                  <Segment>1</Segment>
                </Grid.Column>
                <Grid.Column width="3">
                  <Segment>1</Segment>
                </Grid.Column>
                <Grid.Column width="2">
                  <Segment>1</Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          );
        })}
    </>
  );
}

export default PendingTable;
