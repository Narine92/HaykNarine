import {Routes,Route, BrowserRouter} from "react-router-dom";
import Admin from "./components/admin/admin";
import VolksWagen from "./components/volkswagen/volkswagen";
import Login from "./components/login/login";
import { Navigation } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="volkswagen" element={<VolksWagen />} />
      <Route path="admin" element={<Admin />} />
    </Routes>
    </BrowserRouter>
  );
}

export default Router;



