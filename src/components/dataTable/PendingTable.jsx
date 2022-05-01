import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Pagination } from "semantic-ui-react";
import { Dropdown, Item } from "semantic-ui-react";
import productImg from "../../img/img1.jpg";
import "./dataTable.css";

function PendingTable({ list, changeStatus }) {
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const [result, setResult] = useState([]);
  const pageDevider = 4;

  useEffect(() => {
    setProductsByPage(list.slice(start, start + pageDevider));
  }, [start, result]);

  useEffect(() => {
    if (list && list.length > 0) setResult(list);
  }, [list]);

  function goToPage(e, data) {
    console.log(data.activePage);
    setStart(data.activePage * pageDevider - pageDevider);
  }

  return (
    <>
      {productsByPage &&
        productsByPage.length > 0 &&
        productsByPage.map((item) => {
          console.log("item", item);
          return (
            <Item.Group className="itemGroup" key={nanoid()}>
              <Item className="rowContainer">
                <Item.Image
                  className="percent-15"
                  size="tiny"
                  src={item.product.img[0]?.imagePath || productImg}
                />
                <Item.Content className="percent-15">
                  {item.orderStatus}
                </Item.Content>

                <Item.Content className="percent-50">
                  <Item.Header as="a"> {item.product.name}</Item.Header>
                  <Item.Extra>{item.product.description.comment} </Item.Extra>
                </Item.Content>

                <Item.Content className="percent-20">
                  <Item.Header as="a">
                    <Dropdown pointing="top left" text="Edit Status">
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => {
                            changeStatus("PENDING", item.id);
                          }}
                          text="Pending"
                          icon="plus"
                        />
                        <Dropdown.Item
                          onClick={() => {
                            changeStatus("SENT", item.id);
                          }}
                          text="Sent"
                          icon="calendar"
                        />
                        <Dropdown.Item
                          onClick={() => {
                            changeStatus("PAID", item.id);
                          }}
                          text="Paid"
                          icon="calendar"
                        />
                        <Dropdown.Item
                          onClick={() => {
                            changeStatus("DONE", item.id);
                          }}
                          text="Done"
                          icon="calendar"
                        />
                      </Dropdown.Menu>
                    </Dropdown>{" "}
                  </Item.Header>
                  <Item.Meta></Item.Meta>
                  <Item.Description>Address {item.address}</Item.Description>
                  <Item.Extra>Phone {item.phone}</Item.Extra>
                  <Item.Content>
                    Available {item.product.stock.count}
                  </Item.Content>
                </Item.Content>
              </Item>
            </Item.Group>
          );
        })}
      <div className="pagination-container">
        <Pagination
          defaultActivePage={1}
          secondary
          onPageChange={goToPage}
          totalPages={Math.ceil(result.length / pageDevider)}
        />
      </div>
    </>
  );
}

export default PendingTable;
