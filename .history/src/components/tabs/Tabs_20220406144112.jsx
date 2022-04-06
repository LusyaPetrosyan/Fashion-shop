import React from "react";
import { Tab } from "semantic-ui-react";
import DataTable from "../dataTable/DataTable";

const Tabs = (pendingProducts, allProducts) => {
  const panes = [
    {
      menuItem: "All Products",
      render: () => <Tab.Pane> </Tab.Pane>
    //   <DataTable list = {allProducts}/>
    // <DataTable list = {pendingProducts} />
    },
    { menuItem: "Pending", render: () => <Tab.Pane></Tab.Pane> },
  ];
  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  );
};

export default Tabs;