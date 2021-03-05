import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Toolbar from './components/Toolbar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

function App() {
  return (
    <div className="app-wrap">
      <BrowserRouter>
        <Toolbar />

        <Route render={({ location }) => {
          const { key } = location;
          
          return (
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={key}
                classNames={'fade'}
                timeout={300}
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
            </SwitchTransition>
          )
        }} />

      </BrowserRouter>
    </div>
  );
}

export default App;
