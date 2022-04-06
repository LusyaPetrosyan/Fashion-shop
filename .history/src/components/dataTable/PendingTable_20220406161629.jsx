import { nanoid } from "nanoid";
import { Grid, Segment, List, Image, ItemMeta } from "semantic-ui-react";
import productImg from "../../img/img1.jpg";
import "./dataTable.css";


function PendingTable({ list }) {
  return (
    <>
      {list &&
        list.length > 0 &&
        list.map((item) => {
          return (
            <Grid className="grid-table" key = {nanoid()}>
              <Grid.Row >
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
                  <Segment>
                  <List.Content>                          
              <List.Header>{item.product.name} </List.Header>
              {item.product.price}
            </List.Content>
                  </Segment>
                </Grid.Column>
                <Grid.Column width="3">
                  <Segment>
                      {item.orderStatus}
                  </Segment>
                </Grid.Column>
                <Grid.Column width="2">
                  <Segment>
                      
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          );
        })}
    </>
  );
}

export default PendingTable;
