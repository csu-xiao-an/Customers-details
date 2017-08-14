import { socialPostService, socialDeleteService } from 'project-services'
import 'react-select/dist/react-select.css'
import React, { Component } from 'react'
import Select from 'react-select'
import './social-network.styl'

class SocialNetwork extends Component {
  constructor () {
    super()
    this.state = {
      selectedValue: config.data.soc_media && config.data.soc_media[0] && config.data.soc_media[0].type,
      inputValue: config.data.soc_media && config.data.soc_media[0] && config.data.soc_media[0].url,
      isOpenSocial: false,
      itemId: 0,
      key: 0
    }
    this.logChange = this.logChange.bind(this)
    this.submit = this.submit.bind(this)
    this.delete = this.delete.bind(this)
  }
  logChange (val) {
    config.data.soc_media && config.data.soc_media.every((el, key) => {
      if (el.type === val.value) {
        this.setState({inputValue: el.url, itemId: el.id, key: key})
        return false
      } else {
        this.setState({inputValue: '', itemId: 0, key: 0})
        return true
      }
    })
    val ? this.setState({selectedValue: val.value}) : this.setState({selectedValue: 'default'})
  }
  async submit () {
    const body = `type=${this.state.selectedValue}&url=${this.state.inputValue}`
    let response = await socialPostService(body)
    if (response.status === 201) {
      config.data.soc_media.push(
        {
          id: 123123,
          type: this.state.selectedValue,
          url: this.state.inputValue
        }
      )
      this.forceUpdate()
    }
  }
  async delete () {
    let response = await socialDeleteService(this.state.itemId)
    if (response.status === 204) {
      config.data.soc_media.splice(this.state.key, 1)
      this.setState({inputValue: ''})
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
        <div className={this.state.isOpenSocial ? 'hidden' : config.data.soc_media && config.data.soc_media[0] ? 'hidden' : 'add-source-wrap'}>
          <img src='./dist/media/add.svg' onClick={() => { this.setState({ isOpenSocial: !this.state.isOpenSocial }) }} />
          <h1>{config.translations.add_social_net}</h1>
        </div>
        <div className={this.state.isOpenSocial ? 'add-select-wrap' : config.data.soc_media && config.data.soc_media[0] ? 'add-select-wrap' : 'hidden'}>
          <h1>{config.translations.social_net}</h1>
          <div className='item-wrap'>
            <div className='delete-wrap'>
              <img className={this.state.inputValue ? 'delete' : 'hidden'} src={config.urls.media + 'add.svg'} onClick={this.delete} />
            </div>
            <div className='select-wrap'>
              <Select
                value={this.state.selectedValue}
                onChange={this.logChange}
                options={options}
              />
            </div>
            <div className='img-wrap'>
              <img src={config.urls.soc_net + '/' + this.state.selectedValue + '.png'} onClick={this.delete} />
            </div>
            <div className='input-wrap'>
              <input type='text' value={this.state.inputValue} onChange={e => { this.setState({inputValue: e.target.value}) }} />
            </div>
          </div>
          <div className='button-wrap'>
            <button onClick={this.submit}>{config.translations.save}</button>
          </div>
        </div>
      </div>
    )
  }
}
export default SocialNetwork
