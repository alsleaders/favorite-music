import React, { Component } from 'react'
// import DoubleClicks from './Doubleclicks'
// import HankGreen from './HankGreen'
// import FrankTurner from './FrankTurner'
import { Link } from 'react-router-dom'
import data from '../data/bands.json'

class Home extends Component {
  render() {
    return (
      <div>
        Here is a list of bands I like
        {Object.values(data.bands).map(band => {
          return (
            <li key={band.name}>
              <Link to="/{band.name}">{band.name}</Link>
            </li>
          )
        })}
        {/* <p>
          <Link to="/DoubleClicks">The DoubleClicks</Link>
        </p>
        <p>
          <Link to="/HankGreen">Hank Green</Link>
        </p>
        <p>
          <Link to="/FrankTurner">Frank Turner</Link>
        </p> */}
      </div>
    )
  }
}

export default Home
