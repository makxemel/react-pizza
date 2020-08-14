import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => setPizzas(data.pizzas));
    // fetch('http://localhost:3000/db.json')
    //   .then((res) => res.json())
    //   .then((json) => setPizzas(json.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Route exact path="/" render={() => <Home items={pizzas} />} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;
