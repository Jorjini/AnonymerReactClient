import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Welcome from 'Pages/Welcome';
import Login from 'Pages/Login';
import Register from 'Pages/Register';
import Home from 'Pages/Home';
import Chat from 'Pages/Chat';
import Room from 'Pages/Room';
import KYC from 'Pages/KYC';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/room/:id" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
