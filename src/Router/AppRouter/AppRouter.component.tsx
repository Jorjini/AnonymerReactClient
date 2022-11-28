import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Welcome from 'Pages/Welcome';
import Login from 'Pages/Login';
import Register from 'Pages/Register';
import Home from 'Pages/Home';
import Chat from 'Pages/Chat';
import Room from 'Pages/Room';
import KYC from 'Pages/KYC';
import Error from 'Pages/Error';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
