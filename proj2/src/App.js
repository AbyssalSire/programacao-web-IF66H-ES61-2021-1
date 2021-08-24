import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import {store, persistor} from '../src/store'

import './styles.css'

/*Paginas roteadas*/
import Ambientes from './view/ambientes'
import Agenda from './view/agenda';
import Agendamento from './view/agendamento'
import Cadastro_ambientes from './view/cadastro_ambientes';
import Cadastro_autorizado from './view/cadastro_autorizado';
import Login from './view/login';
import Home from './view/home'
import Pessoas_autorizadas from './view/pessoas_autorizadas'
import { PersistGate } from "redux-persist/integration/react";
import ListaAgendamento from './view/listaAgendamentos'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/ambientes' component={Ambientes}></Route>
          <Route exact path='/agenda' component={Agenda}></Route>
          <Route exact path='/agendamento' component={Agendamento}></Route>
          <Route exact path='/cadastro_autorizado' component={Cadastro_autorizado}></Route>
          <Route exact path='/cadastro_ambientes' component={Cadastro_ambientes}></Route>
          <Route exact path='/pessoas_autorizadas' component={Pessoas_autorizadas}></Route>
          <Route exact path='/listaAgendamento' component={ListaAgendamento}></Route>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
