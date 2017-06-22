import GoogleMapReact from 'google-map-react'
import React from 'react'
import './map.styl'

const AnyReactComponent = () => (
  <div style={{
    position: 'relative',
    color: 'black',
    textAlign: 'center',
    fontSize: 8,
    height: 25,
    width: 25,
    border: '4px solid #DE0400',
    borderRadius: '50%',
    top: -20,
    left: -30
  }} />
)

class GoogleMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      center: {lat: 50.24, lng: 28.74},
      zoom: 13
    }
  }
  render () {
    return (
      <div id='google-map'>
        <GoogleMapReact defaultCenter={this.state.center} defaultZoom={this.state.zoom}>
          <AnyReactComponent
            lat={50.237100}
            lng={28.736621}
          />
        </GoogleMapReact>
      </div>
    )
  }
}
export default GoogleMap
