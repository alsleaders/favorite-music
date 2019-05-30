import React, { Component } from 'react'
import HomeButton from '../components/HomeButton'
import { Link } from 'react-router-dom'

class FrankTurner extends Component {
  render() {
    return (
      <div>
        <HomeButton />
        <div id="space-around">
          <Link to="/DoubleClicks">The DoubleClicks</Link>
          <Link to="/HankGreen">Hank Green</Link>
        </div>
        <li>
          <h3>Frank Turner</h3>
          <p>
            "You know how you let Youtube autoplay and sometimes you get a bunch
            of stuff from the same artist and then you happen upon your new
            favorite song? That's how I found out Frank Turner was truly
            awesome. He is an English punk and folk singer-songwriter and I
            really should find a good end to this sentence."
          </p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Highfield_-_Frank_Turner.jpg/330px-Highfield_-_Frank_Turner.jpg" />
          <p>
            Frank's most recent album is "Be More Kind" which is pretty cool, if
            you get a chance to listen to it.
          </p>
        </li>
      </div>
    )
  }
}

export default FrankTurner
