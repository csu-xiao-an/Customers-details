import { detailsReplaceService } from 'project-services'
import React from 'react'
import './details.styl'

class Details extends React.Component {
  constructor () {
    super()
    this.submit = this.submit.bind(this)
  }
  submit () {
    const response = detailsReplaceService()
    if (response.status === 204) {
      config.data.details_link_active = true
      this.forceUpdate()
    }
  }
  render () {
    return (
      <div id='details'>
        <div className='details-wrap'>
          <div className='details-label'>{config.translations.completion}</div>
        </div>
        <div className='data-wrap'>
          <button className='details-button' disabled={config.data.details_link_active} onClick={this.submit}>{config.data.details_link_active ? config.translations.sent : config.translations.send}</button>
          <img className={config.data.details_link_active ? '' : 'hidden'} src={config.urls.media + 'ok.png'} />
          <h1>{config.translations.request_to_detail}</h1>
        </div>
      </div>
    )
  }
}
export default Details
