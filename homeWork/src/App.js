import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Creditional from './components/final_project/Creditional'
import SignIn from './components/final_project/features/user/SignIn'
import AdminNav from './components/final_project/AdminNav'
import UserNav from './components/final_project/UserNav';
import OrderSummary from './components/final_project/features/user/OrderSummary'

function App() {
  return (
    <div>
      <center>
        <BrowserRouter>
          <Routes>
            <Route path="UserNav" element={<UserNav />}>
              <Route path="Creditional" element={<Creditional />}></Route>
            </Route>
            <Route path="AdminNav" element={<AdminNav />}>
              <Route path="Creditional" element={<Creditional />}></Route>
            </Route>
            <Route path="SignIn" element={<SignIn />}></Route>
            <Route path="*" element={<Creditional />}></Route>
            <Route path="OrderSummary" element={<OrderSummary />}>
              <Route path="UserNav" element={<UserNav />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </center>
    </div>
  );
}

export default App;
