import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import Dashboard from "./components/dashboard/Dashboard";
import { useContext } from "react";

function App(slides) {
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/products" element={ <Products/> } />
    //       <Route path="/login" element={ <LoginPage />} />
    //       <Route path="/dashboard" element={ <Dashboard />} />
    //     </Routes>
    //     <Footer />
    //   </div>
    // </BrowserRouter>
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
