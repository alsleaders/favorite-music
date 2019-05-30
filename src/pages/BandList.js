import React, { Component } from 'react'
import BandBlueprint from '../components/BandBlueprint'
import HomeButton from '../components/HomeButton'

class BandList extends Component {
  render() {
    return (
    <>
    <h2>{data.bands[this.props.match.params.bandName]}</h2>
    <main>
      {data.bands[this.props.match.params.bandName].map((band, index) => {
        return (
          <BandBlueprint
          key={index}
          name={this.props.match.params.bandName}
          about={bands.about}
          imageUrl={band.image}
          />
          )
      })}
    </main>
   <HomeButton />
    </>
  }
}

export default BandList
