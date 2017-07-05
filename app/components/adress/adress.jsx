import GoogleMapReact from 'google-map-react'
import React from 'react'
import './adress.styl'

const client = window._config

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

class Adress extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      center: {lat: 50.237100, lng: 28.736621},
      zoom: 14
    }
  }
  render () {
    return (
      <div id='adress'>
        <div id='google-map'>
          <GoogleMapReact defaultCenter={this.state.center} defaultZoom={this.state.zoom}>
            <AnyReactComponent
              lat={50.237100}
              lng={28.736621}
            />
          </GoogleMapReact>
        </div>
        <div className='adress-label'>{client.translations.adress}</div>
        <a href={'waze://?ll=' + client.data.intent_x + ', ' + client.data.intent_y + '&navigate=yes'}>{client.data.adress}</a>
      </div>
    )
  }
}
export default Adress
