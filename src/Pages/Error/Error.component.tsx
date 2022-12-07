import { Link } from 'react-router-dom';

const Error = () => (
  <main className="w-full h-[100vh] flex flex-row justify-center items-center">
    There is no such a route
    <Link to="/" className="text-blue-900 underline ml-[8px]">
      Redirect to home page
    </Link>
  </main>
);

export default Error;
