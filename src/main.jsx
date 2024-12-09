import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/user/Welcome";
import Shop from "./pages/user/Shop";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./pages/user/Cart";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/">
          <Route index element={<Welcome />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        <Route path="/admin">
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);