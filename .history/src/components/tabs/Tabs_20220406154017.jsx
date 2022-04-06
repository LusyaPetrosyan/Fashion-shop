import React from "react";
import { Tab } from "semantic-ui-react";
import DataTable from "../dataTable/DataTable";


const Tabs = ({pendingProducts, allProducts}) => {
   console.log(pendingP);
  const panes = [
    {
      menuItem: "All Products",
      render: () => <Tab.Pane>
          {/* <DataTable list = {allProducts}/> */}
          </Tab.Pane>
    
    },
    { menuItem: "Pending", render: () => <Tab.Pane>
        <PendingTable list = {pendingProducts} />
        </Tab.Pane> },
  ];
  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  );
};

export default Tabs;