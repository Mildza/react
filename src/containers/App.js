import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Grany from '../components/Communication/Grany'
import Form from '../components/Forms/Form'
// import List from '../components/Navigation/List'
import Detail from '../components/Navigation/Detail'

import asyncComponent from '../hoc/asyncComponent'
import './App.css';

const AsyncRoutingSection = asyncComponent(() => {
  return import('../components/Navigation/List')
})

export const globalContext = React.createContext(false)

function App() {
  return (
    <BrowserRouter>
      <div className="App container-fluid mt-5">
        <Header></Header>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Route path="/form"><Form /></Route>
            <Route path="/communication"><Grany /></Route>
            <Switch>
              <Route path="/routing" exact> <AsyncRoutingSection /></Route>
              <Route path="/routing/:name" component={Detail} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
