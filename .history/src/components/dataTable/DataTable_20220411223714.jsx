import productImg from "../../img/img1.jpg";
import "./dataTable.css";
import { nanoid } from "nanoid";
import { Grid, Segment, List, Image, Dropdown, Item } from "semantic-ui-react";
import "./dataTable.css";
import { useState, useEffect } from "react";
function DataTable({ list }) {
    
  console.log(list);
  return (
    <List divided verticalAlign="middle">
      {list && list.map((item) => {
        return (
          <List.Item>
            <List.Content floated="right">
              <Button>Add</Button>
            </List.Content>
            <Image
              avatar
              className="product-icon"
              src={item.product.img[0]?.imagePath || productImg}
            />
             <List.Content>  
             <List horizontal>
             
            <List.Content > {item.orderStatus} 
            </List.Content>
                </List>
               </List.Content> 
            
          </List.Item>
        );
      })}
    </List>
  );
}

export default DataTable;