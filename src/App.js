import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Order from "./components/order/order";
import Menu from "./components/menu/menu";
import Home from "./components/Home/home";

function App() {
  return (
    <div>
      <Home />
      <BrowserRouter>
        <Routes>
          <Route path="/:hotel/:table" element={<Menu />} />
          <Route path="/order/:hotel/:table" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
