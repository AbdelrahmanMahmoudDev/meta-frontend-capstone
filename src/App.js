import './App.css';
import * as Pages from "./Pages"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Pages.Home />}/>
          <Route path="/menu" element={<Pages.Menu />}/>
          <Route path="/reservations" element={<Pages.Reservations />}/>
          <Route path="/order-online" element={<Pages.OrderOnline />}/>
          <Route path="/login" element={<Pages.Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
