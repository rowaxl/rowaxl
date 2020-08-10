import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Toolbar from './components/Toolbar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toolbar />

        <Route render={({ location }) => {
          const { key } = location;
          
          return (
            <TransitionGroup className="transition-group">
              <CSSTransition
                key={key}
                classNames={'fade'}
                timeout={{ enter: 300, exit: 50 }}
              >
                <section className="route-seciton">
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                </section>
              </CSSTransition>
            </TransitionGroup>
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
