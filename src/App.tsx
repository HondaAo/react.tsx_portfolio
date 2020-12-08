import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About'
import { Contact } from './pages/Contact';
import { Works } from './pages/Works';
function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/works" component={Works} />
    </Switch>
    </Router>
  );
}

export default App;
