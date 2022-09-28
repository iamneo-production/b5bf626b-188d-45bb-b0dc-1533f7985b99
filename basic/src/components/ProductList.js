import "./Papp.css";
import ProHeader from "./ProHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProHome from "./ProHome";
import Cart from "./Cart";

function ProductList() {
  return (
    <BrowserRouter>
      <ProHeader />
      <div className="ProductList">
      <Routes>
        <Route path="/" exact element={<ProHome />}/>
          
        
        <Route path="/cart" element={<Cart />}/>
          
        
      </Routes>
        </div>
      
    </BrowserRouter>
  );
}

export default ProductList;