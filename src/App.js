// TODO:
// see menu button more readable
// DONE -- ads in modal sized better and spaced out
// DONE -- about section created
// contact section created with location
// DONE -- nav bar better
// DONE -- background of nav bar same cream colour as page bg
// DONE -- classic pizza image fixed
// DONE -- uber and skip logos 
// DONE -- spacing of jumbotron and modal
// DONE -- menu on seperate page? 
// Better font for main words?????
// DONE -- max width not whole screen
// check smaller size screens for breakage


import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes} from 'react-router';
import Menu from './menu';
import Home from './home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>

  );
}

export default App;
