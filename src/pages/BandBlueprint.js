import React, { Component } from 'react'
import data from '../data/bands.json'

class BandBlueprint extends Component {
  render() {
    return (
      <h2>{data.bands[this.props.match.params.name}</h2>
    )
}
}
export default BandBlueprint
