import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";



function App() {
  return (
   <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/"></Route>
      </Route>
   </Routes>
  );
}

export default App;
