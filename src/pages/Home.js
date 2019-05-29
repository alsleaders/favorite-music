import React, { Component } from 'react'
import DoubleClicks from './Doubleclicks'
import HankGreen from './HankGreen'
import FrankTurner from './FrankTurner'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        Here is a list of bands I like
        <p>
          <Link to="/doubleclicks">The DoubleClicks</Link>
        </p>
        <p>
          <Link to="/hankgreen">Hank Green</Link>
        </p>
        <p>
          <Link to="/frankturner">Frank Turner</Link>
        </p>
      </div>
    )
  }
}

export default Home
