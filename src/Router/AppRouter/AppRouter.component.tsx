import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Welcome from 'Pages/Welcome';
import Login from 'Pages/Login';
import Register from 'Pages/Register';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
