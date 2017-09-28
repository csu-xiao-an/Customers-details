import {socialPostService, socialDeleteService} from 'project-services'
import React, {Component} from 'react'
import Select from 'react-select'
import './social-network.styl'

class SocialNetwork extends Component {
  constructor () {
    super()
    this.state = {
      selectedValue: config.translations.social_list[0].value,
      isEditSocial: false,
      inputValue: ''
    }
  }
  submit = async () => {
    config.data.soc_media ? '' : config.data.soc_media = []
    const body = `type=${this.state.selectedValue}&url=${this.state.inputValue}`
    let response = await socialPostService(body)
    if (response.status === 201) {
      config.data.soc_media.push({
        id: await response.json().then(id => id),
        type: this.state.selectedValue,
        url: this.state.inputValue
      })
      this.setState({ isEditSocial: !this.state.isEditSocial, selectedValue: 'facebook', inputValue: '' })
    }
  }
  delete = async (id, k) => {
    let response = await socialDeleteService(id)
    if (response.status === 204) {
      config.data.soc_media.splice(k, 1)
      this.setState({inputValue: ''})
    }
  }
  render () {
    return (
      <div id='social-network'>
        <h1 className={config.data.soc_media && config.data.soc_media[0] ? 'soc-media-label' : 'hidden'}>{config.translations.social_net}</h1>
        <div className={config.data.soc_media && config.data.soc_media[0] ? 'social-network-list' : 'hidden'}>
          {config.data.soc_media && config.data.soc_media[0] && config.data.soc_media.map((i, k) => (
            <div key={k} className='social-item-wrap'>
              <div className='delete-wrap'><img className='delete' src={config.urls.media + 'add.svg'} onClick={() => { this.delete(i.id, k) }} /></div>
              <div className='img-wrap'><img src={config.urls.soc_net + '/' + i.type + '.png'} /></div>
              <div className='url-wrap' onClick={() => { this.setState({ isEditSocial: true, selectedValue: i.type }) }}><h1>{i.url}</h1></div>
            </div>)
          )}
        </div>
        <div className={this.state.isEditSocial ? 'add-select-wrap' : 'hidden'}>
          <div className='item-wrap'>
            <div className='select-wrap'>
              <Select className={config.isRtL ? 'left' : 'right'} onChange={e => { this.setState({ selectedValue: e.value }) }}
                value={this.state.selectedValue} options={config.translations.social_list} />
            </div>
            <div className='img-wrap'><img src={config.urls.soc_net + '/' + this.state.selectedValue + '.png'} /></div>
            <div className='input-wrap'>
              <input type='text' value={this.state.inputValue} onChange={e => { this.setState({inputValue: e.target.value}) }} placeholder={config.translations.url} />
            </div>
          </div>
          <div className='button-wrap'><button onClick={this.submit}>{config.translations.save}</button></div>
        </div>
        <div className={this.state.isEditSocial ? 'hidden' : 'add-source-wrap'}>
          <img className={config.isRtL ? 'left' : 'right'} src='./dist/media/add.svg' onClick={() => { this.setState({ isEditSocial: !this.state.isEditSocial }) }} />
          <h1 className={config.isRtL ? 'left' : 'right'} >{config.translations.add_social_net}</h1>
        </div>
      </div>
    )
  }
}
export default SocialNetwork
