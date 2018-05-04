import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const Root = () =>
  <Router>
    <div>
      <Link to='/'>Home</Link>
      <Link to='add'>Add Product</Link>
      <Switch>
      <Route exact path="/" component={ App } />
      <Route exact path="/add" component={ Add } />
      </Switch>
    </div>

  </Router>

  const Add = () =>
    <div>
      <h1>This is where user will add products to the inventory</h1>
    </div>



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
