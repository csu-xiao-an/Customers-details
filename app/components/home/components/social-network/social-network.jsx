import {socialPostService, socialDeleteService} from 'project-services'
import {Select} from 'project-components'
import Line from '../line/line.jsx'
import './social-network.styl'

export default class SocialNetwork extends React.Component {
  state = {
    selectedValue: config.translations.social_list[0].value,
    selectedLabel: config.translations.social_list[0].label,
    isEditSocial: false,
    inputValue: ''
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  submit = () => {
    if (!Array.isArray(config.data.soc_media)) config.data.soc_media = []
    const body = `type=${this.state.selectedValue}&url=${this.state.inputValue}`
    socialPostService(body).then(r => {
      if (r.status === 201) {
        config.data.soc_media.push({
          type: this.state.selectedValue,
          url: this.state.inputValue
        })
        r.json().then(id => { config.data.soc_media[config.data.soc_media.length - 1].id = id })
        this.setState({ isEditSocial: !this.state.isEditSocial, selectedValue: 'facebook', inputValue: '' })
      }
    })
  }
  delete = (id, k) => {
    socialDeleteService(id).then(r => {
      if (r.status === 204) {
        config.data.soc_media.splice(k, 1)
        this.setState({inputValue: ''})
      }
    })
  }
  componentWillMount = () => { if (!Array.isArray(config.data.soc_media)) config.data.soc_media = [] }
  render () {
    return (
      <div id='social-network'>
        <h1 className={config.data.soc_media && config.data.soc_media.length > 0 ? 'soc-media-label' : 'hidden'}>{config.translations.social_net}</h1>
        <div className={config.data.soc_media && config.data.soc_media.length > 0 ? 'social-network-list' : 'hidden'}>
          {config.data.soc_media.map((i, k) => (
            <div key={k} className='social-item-wrap'>
              <div className='delete-wrap'>
                {this.props.rights.soc_links.delete &&
                  <img className='delete' src={config.urls.media + 'add.svg'} onClick={() => this.delete(i.id, k)} />}
              </div>
              <div className='img-wrap'><img src={config.urls.soc_net + i.type + '.png'} /></div>
              <div className='url-wrap' onClick={this.props.rights.soc_links.edit ? () => this.setState({isEditSocial: true, selectedValue: i.type}) : () => {}}>
                <h1>{i.url}</h1></div>
            </div>)
          )}
        </div>
        <div className={this.state.isEditSocial ? 'add-select-wrap' : 'hidden'}>
          <div className='item-wrap'>
            <div className='select-wrap'>
              <Select onChange={e => this.setState({selectedValue: e.value, selectedLabel: e.label})}
                value={this.state.selectedLabel} options={config.translations.social_list} />
            </div>
            <div className='img-wrap'><img src={config.urls.soc_net + '/' + this.state.selectedValue + '.png'} /></div>
            <div className='input-wrap'>
              <input type='text' value={this.state.inputValue} placeholder={config.translations.url}
                onChange={e => this.setState({inputValue: e.target.value})} />
            </div>
          </div>
          <div className='button-wrap'><button onClick={this.submit}>{config.translations.save}</button></div>
        </div>
        {this.props.rights.soc_links.edit &&
          <div className={this.state.isEditSocial ? 'hidden' : 'add-source-wrap'} onClick={() => this.setState({isEditSocial: !this.state.isEditSocial})} >
            <img className={config.isRtL ? 'left' : 'right'} src={config.urls.media + 'add.svg'} />
            <h1 className={config.isRtL ? 'left' : 'right'} >{config.translations.add_social_net}</h1>
          </div>}
        <Line />
      </div>
    )
  }
}
