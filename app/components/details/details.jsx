import React from 'react'
import './details.styl'

class Details extends React.Component {
  render () {
    return (
      <div id='details'>
        <div className='details-label'>Completion of the details by the customer</div>
        <button className='details-button'>Send</button>
        <h1>Submit a request to complete details</h1>
      </div>
    )
  }
}
export default Details
