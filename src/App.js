import React, { useEffect } from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;
