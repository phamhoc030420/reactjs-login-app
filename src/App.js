import logo from './logo.svg';
import './App.css';
import Login from './Authen/login';
import './Authen/login.scss'
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import ProFile from './Authen/Profile';
import Header from './components/Header';
import Home from './custom/home';
import Add from './custom/addPhotos';
import { useState } from 'react';

function App() {
  const [colors, setColor] = useState('');
  return (
    <>
      <div className="App" >
        <BrowserRouter>
          <Switch>

            <Route exact path="/" component={Login} />

            <Route exact path="/photos" component={Home} />
            <Route path="/photos/add" component={Add} />


          </Switch>
        </BrowserRouter>
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
    </>
  );
}

export default App;
