import logo from './logo.svg';
import './App.css';
import Login from './Authen/login';
import './Authen/login.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProFile from './Authen/Profile';

function App() {
  return (
    <div className="App login-background">
      <header>
        <Login />
      </header>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>
  );
}

export default App;
