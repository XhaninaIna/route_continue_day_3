import { Routes as AppRoutes, Route } from "react-router-dom";
  import HomePage from "../pages/HomePage";
  import LoginPage from "../pages/LoginPage";
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
    {/* per te aksesuar vetem nje produkt */}
    <Route path=":productSlug" element={<ProductPage/>}/>
    </Route>
    
    
    </AppRoutes>
    
    );
  }

  export default Routes;