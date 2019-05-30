import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class BandBlueprint extends Component {
  render() {
    return (
      <h2>
        <Link to={`/${band.name}`}>{band.name}</Link>
      </h2>
        <p>{this.props.about}</p>
    )
}
}
export default BandBlueprint
