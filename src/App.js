import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from '../src/Routes/Router'

function App() {
  return (

    <div className="">
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
