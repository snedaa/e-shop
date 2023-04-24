import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/home";
import ShopPage from "./pages/shop";




function App() {
  return (
   <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop/:categoryName" element={<ShopPage />}></Route>
      </Route>  
   </Routes>
  );
}

export default App;
