import { nanoid } from "nanoid";
import { Grid, Segment, List, Image, } from "semantic-ui-react";
import productImg from "../../img/img1.jpg";
import "./dataTable.css";

function PendingTable({ list, changeStatus}) {
  
  return (
    <>
      {list &&
        list.length > 0 &&
        list.map((item) => {
          return (
            <Grid className="grid-table" key={nanoid()}>
              <Grid.Row>
                <Grid.Column width="5">
                  <Segment.Inline>
                    <Image
                      avatar
                      className="product-icon"
                      src={item.product.img[0]?.imagePath || productImg}
                    />
                  </Segment.Inline>
                </Grid.Column>
                <Grid.Column width="6">
                  <Segment.Inline>
                    <List.Content>
                      <List.Header>{item.product.name} </List.Header>
                      {item.product.price}
                    </List.Content>
                  </Segment.Inline>
                </Grid.Column>
                <Grid.Column width="3">
                  <Segment.Inline>{item.orderStatus}</Segment.Inline>
                </Grid.Column>
                <Grid.Column width="2">
                  <Segment.Inline>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          changeStatus("PENDING");
                        }}
                        text="Pending"
                        icon="plus"
                      />
                      <Dropdown.Item
                        onClick={() => {
                          changeStatus("SENT");
                        }}
                        text="Sent"
                        icon="calendar"
                      />
                      <Dropdown.Item
                        onClick={() => {
                          changeStatus("PAID");
                        }}
                        text="Paid"
                        icon="calendar"
                      />
                      <Dropdown.Item
                        onClick={() => {
                          changeStatus("DONE");
                        }}
                        text="Done"
                        icon="calendar"
                      />
                    </Dropdown.Menu>
                  </Segment.Inline>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          );
        })}
    </>
  );
}

export default PendingTable;
