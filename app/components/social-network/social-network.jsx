import { clientReplaceService } from 'project-services'
import 'react-select/dist/react-select.css'
import React, { Component } from 'react'
import Select from 'react-select'
import './social-network.styl'

class SocialNetwork extends Component {
  constructor () {
    super()
    this.state = {
      isOpenSocial: false,
      selectedValue: config.data.soc_media
    }
    this.handleSource = this.handleSource.bind(this)
    this.logChange = this.logChange.bind(this)
    this.submit = this.submit.bind(this)
  }
  handleSource () {
    this.setState({ isOpenSocial: !this.state.isOpenSource })
  }
  logChange (val) {
    val ? this.setState({selectedValue: val.value}) : this.setState({selectedValue: 'default'})
  }
  async submit () {
    const body = `soc_media=${this.state.selectedValue}`
    let response = await clientReplaceService(body)
    if (response.status === 204) {
      config.data.soc_media = this.state.selectedValue
      this.forceUpdate()
    }
  }
  render () {
    const list = config.translations.soc_media_list
    const setValues = prop => ({value: list[prop], label: list[prop]})
    let options = [
      setValues(list.facebook),
      setValues(list.instagram),
      setValues(list.linkedin),
      setValues(list.twitter),
      setValues(list.pinterest),
      setValues(list.google),
      setValues(list.vk)
    ]
    return (
      <div id='social-network'>
        <div className={this.state.isOpenSource ? 'hidden' : config.data.soc_media ? 'hidden' : 'add-source-wrap'}>
          <img src='./dist/media/add.svg' onClick={this.handleSource} />
          <h1>{config.translations.add_social_net}</h1>
        </div>
        <div className={this.state.isOpenSource ? 'add-select-wrap' : config.data.soc_media ? 'add-select-wrap' : 'hidden'}>
          <h1>{config.translations.social_net}</h1>
          <div className='item-wrap'>
            <div className='button-wrap'>
              <button onClick={this.submit}>{config.translations.save}</button>
            </div>
            <div className='input-wrap'>
              <input type='text' />
              <div className='img-wrap'>
                <img src={config.urls.soc_net + '/' + this.state.selectedValue + '.png'} />
              </div>
            </div>
            <div className='select-wrap'>
              <Select
                value={this.state.selectedValue}
                onChange={this.logChange}
                options={options}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SocialNetwork
