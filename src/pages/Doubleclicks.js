import React, { Component } from 'react'
import HomeButton from '../components/HomeButton'
import { Link } from 'react-router-dom'

class DoubleClicks extends Component {
  render() {
    return (
      <div>
        <HomeButton />
        <div id="space-around">
          <Link to="/HankGreen">Hank Green</Link>
          <Link to="/FrankTurner">Frank Turner</Link>
        </div>
        <li>
          <h3>The Doubleclicks</h3>
          <p>
            "The Doubleclicks are a nerd-folk duo from Portland, Oregon who
            write songs that are all at once snarky, geeky, and sweet. Do you
            want a band that has a song about shark-eating prehistoric badasses?
            Here you go! The once released an entire album of meows. They are
            not sorry."
          </p>
          <img src="https://www.thedoubleclicks.com/wp-content/uploads/2019/03/the.doubleclicks-online-2-768x1152.jpg" />
          <p>
            Their most recent album is called "The Book was Better" but I highly
            recommend "Dimetrodon" and "This is my Jam"
          </p>
        </li>
      </div>
    )
  }
}

export default DoubleClicks
