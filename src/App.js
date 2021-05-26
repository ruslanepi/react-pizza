import './scss/app.scss';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router';

import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
