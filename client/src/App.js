import React from 'react';
import './App.css';
import AssignRoles from './AssignRoles';
import Home from './Home';
import AddProducts from './AddProducts';
import Supply from './Supply';
import Track from './Track';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QRGenerator from './components/QR_gen';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/roles" component={AssignRoles} />
          <Route path="/addproducts" component={AddProducts} />
          <Route path="/supply" component={Supply} />
          <Route path="/track" component={Track} />
          <Route path="/qrcode" component={QRGenerator} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;