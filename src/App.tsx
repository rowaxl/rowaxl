import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Toolbar from './components/Toolbar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Toolbar />

        <Route render={({ location }) => {
          // const { pathname, key } = location;
          
          return (
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </Switch>
          )
        }} />
        


      </BrowserRouter>

      <div>
        this should be footer
      </div>
    </div>
  );
}

export default App;
