import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import References from './components/References';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <NavBar />
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/references" component={References}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/" component={Home}/>
        </Switch>
    </BaseLayout>
  </BrowserRouter>

  ,
  document.getElementById('root'));
registerServiceWorker();
