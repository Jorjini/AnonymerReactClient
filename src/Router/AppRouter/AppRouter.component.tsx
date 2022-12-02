import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Welcome from 'Pages/Welcome';
import Login from 'Pages/Login';
import Register from 'Pages/Register';
import Home from 'Pages/Home';
import Chat from 'Pages/Home/Chat';
import Room from 'Pages/Home/Room';
import KYC from 'Pages/KYC';
import Error from 'Pages/Error';
import ConfirmEmail from 'Pages/ConfirmEmail';
import KycStart from 'Pages/KYC/KycStart';
import KycSuccess from 'Pages/KYC/KycSuccess';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register">
          <Route element={<Register />} index />
          <Route path="confirm-email" element={<ConfirmEmail />} />
        </Route>
        <Route path="/kyc" element={<KYC />} >
          <Route path="start" element={<KycStart />} />
          <Route path="success" element={<KycSuccess />} />
        </Route>
        <Route path="/home" element={<Home />} >
          <Route path="chat/:id" element={<Chat />} />
          <Route path="room/:id" element={<Room />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
