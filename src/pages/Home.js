import React, { Component } from 'react'
import DoubleClicks from './Doubleclicks'
import HankGreen from './HankGreen'
import FrankTurner from './FrankTurner'

class Home extends Component {
  render() {
    return (
      <div>
        Here is a list of bands I like
        <ul>
          <DoubleClicks />
          <HankGreen />
          <FrankTurner />
        </ul>
      </div>
    )
  }
}

export default Home
