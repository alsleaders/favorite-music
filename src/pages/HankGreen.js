import React, { Component } from 'react'
import HomeButton from '../components/HomeButton'
import { Link } from 'react-router-dom'

class HankGreen extends Component {
  render() {
    return (
      <div>
        <HomeButton />
        <div id="space-around">
          <Link to="/DoubleClicks">The DoubleClicks</Link>
          <Link to="/FrankTurner">Frank Turner</Link>
        </div>
        <li>
          <h3>Hank Green</h3>
          <p>
            Hank Green does many things. Just lots. You'd be shocked by the
            number of things he seems to get into. He is supposed to be writing
            a book, so he puts out fewer songs now. He wrote a song about
            quarks.
          </p>
          <img src="https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/02/sei_52437521-fa8b_1550941066.jpg?quality=90&strip=all&w=1200&h=630&crop=1&zoom=1&ssl=1" />
          <p>His most recent album is called Incongruent</p>
        </li>
      </div>
    )
  }
}

export default HankGreen
