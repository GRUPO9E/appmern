import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import './Style/estilos.css';
import Head from './components/Head';
import Login from './components/Login';
//import Main from './components/Main';
import MainUser from './components/MainUser';
import MainVentas from './components/MainVentas';
import MainServicio from './components/servicios/MainServicios';
import Foot from './components/Foot';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>

        <Route path="/ventas">
          <Head></Head>
          <MainVentas></MainVentas>
          <Foot></Foot>
        </Route>

        <Route path="/servicios">
          <Head></Head>
          <MainServicio></MainServicio>
          <Foot></Foot>
        </Route>

        <Route path="/usuarios">
            <Head> </Head>
            <MainUser></MainUser>
            <Foot></Foot>
        </Route>

      </Switch>
    </Router>
    
  );
}

export default App;
