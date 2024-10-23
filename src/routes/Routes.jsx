import {
    BrowserRouter, Routes as AppRoutes, Route
  } from "react-router-dom";
  import LoginPage from "../pages/LoginPage";
  import HomePage from "../pages/HomePage";
  import StorePage from "../pages/StorePage";
  import ProductPage from "../pages/ProductPage";
  const Routes =() =>{
    return ( 
    <AppRoutes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    {/* store mban te gjithe produktet */}
    <Route path="/store" >
    <Route path="" element={<StorePage/>}/>
    <Route path=":productSlug" element={<ProductPage/>}/>
    </Route>
    {/* per te aksesuar vetem nje produkt */}
    
    </AppRoutes>
    
    );
  }

  export default Routes;