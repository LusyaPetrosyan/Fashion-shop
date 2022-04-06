import { Table, Icon } from "semantic-ui-react";
import productImg from "../../img/img1.jpg";
import { List, Image, Button } from "semantic-ui-react";
import "./DataTable.css";

function DataTable(){
    return(
        <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Product1</Table.Cell>
                <Table.Cell>Pending</Table.Cell>
                <Table.Cell negative>Notes</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
    )
}

export default DataTable;