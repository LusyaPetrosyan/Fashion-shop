import { getOrders, getOrderByStatus, authoriseUser,getProducts } from "../../services/api";
import { useAuth0 } from "@auth0/auth0-react";
import { domainName } from "../../config";
import { Table, Icon } from "semantic-ui-react";
import { useEffect, useState } from "react";
import AddProduct from "../products/AddProduct";
import Tabs from "../tabs/Tabs";
import { ADMIN, UNPAID } from "../../services/constants";
import DataTable from "../dataTable/DataTable";


function Dashboard() {
  const { error, isAuthenticated, isLoading, user, getAccessTokenSilently } =
    useAuth0();
    const [orderList, setOrderList] = useState([]);
    const [pendingProducts, setPendingProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [adminData, setAdminData] = useState({});

  async function orderShow() {
    try {
      const token = await getAccessTokenSilently();
      let data = null;
      // let productData=null;
      
      if (user && user[`${domainName}roles`].includes(ADMIN)) {
      
        const dataResult = await Promise.all([getProducts(), getOrderByStatus(user.sub, token, UNPAID)])
        setAdminData((adminData) => (
          {...adminData, allProducts: dataResult[0], pendingProducts: dataResult[1]}))

      
      } else {
        data = await getOrders(user.sub, token);
        if (data && Array.isArray(data)) {
          if (data.length !== 0) setOrderList(data);
        } else if (data && data.status === 401) {
          const authorised = await authoriseUser(user, token);
        } else {
          console.log("hajox");
        }
      }
    } catch (error) {
      console.log("user not authorised");
    }
  }

  useEffect(() => {
 
    if (user) orderShow();
   
  }, [user]);
  console.log("pendingProducts", adminData.pendingProducts);
  console.log("allProducts", adminData.allProducts);
  return (
    <div className="dashboard ui container">
      {user &&
      user[`${domainName}roles`] &&
      user[`${domainName}roles`].includes(ADMIN) ? (
        <>
          <AddProduct />
          <Tabs pendingProducts={pendingProducts} allProducts={allProducts} />
        </>
      ) : (
        <DataTable list={orderList} />
      )}
    </div>
  );
}
export default Dashboard;