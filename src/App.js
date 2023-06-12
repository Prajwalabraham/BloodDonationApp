import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import AdminLogin from './Pages/Authentication/AdminLogin';
import UserDashboard from './Pages/Dashboard/UserDashboard';
import SideAppbar from './Components/SideAppBar';
import MakeRequest from './Pages/Dashboard/MakeRequest';
import OverallRequest from './Pages/Dashboard/OverallRequest';
import DonateBlood from './Pages/Dashboard/DonateBlood';
import Donors from './Pages/Dashboard/Donors';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Register />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/UserDashboard" element={
            <div style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 auto' }}>
              <SideAppbar />
            </div>
            <div style={{ flex: '1 1 auto' }}>
              <UserDashboard />
            </div>
          </div>
          } />
          <Route path="/MakeRequest" element={
            <div style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 auto' }}>
              <SideAppbar />
            </div>
            <div style={{ flex: '1 1 auto' }}>
              <MakeRequest />
            </div>
          </div>
          } />
          <Route path="/OverallRequest" element={
            <div style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 auto' }}>
              <SideAppbar />
            </div>
            <div style={{ flex: '1 1 auto' }}>
              <OverallRequest />
            </div>
          </div>
          } />
          <Route path="/DonateBlood" element={
            <div style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 auto' }}>
              <SideAppbar />
            </div>
            <div style={{ flex: '1 1 auto' }}>
              <DonateBlood />
            </div>
          </div>
          } />
          <Route path="/Donors" element={
            <div style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 auto' }}>
              <SideAppbar />
            </div>
            <div style={{ flex: '1 1 auto' }}>
              <Donors />
            </div>
          </div>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
