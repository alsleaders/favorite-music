import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import DoubleClicks from './pages/Doubleclicks'
import HankGreen from './pages/HankGreen'
import FrankTurner from './pages/FrankTurner'

class App extends Component {
  render() {
    return (
      <>
        <HelloWorld />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />}
            <Route path="/doubleclicks" exact component={DoubleClicks} />
            <Route path="/hankgreen" exact component={HankGreen} />
            <Route path="/frankturner" exact component={FrankTurner} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
