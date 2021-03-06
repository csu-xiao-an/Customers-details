import './share.styl'

export default class Share extends React.Component {
  state = {
    isVisibleIcons: false
  }
  static propTypes = {
    rights: PropTypes.object.isRequired,
    opt: PropTypes.object.isRequired
  }

  // componentDidMount () {
  //   if (!window.VanillaSharing) {
  //     let scriptTag = document.createElement('script')
  //     scriptTag.src = config.urls.vanilla_sharing
  //     document.body.appendChild(scriptTag)
  //   }
  // }
  vanillaSharing = () => {
    if (!window.VanillaSharing) {
      let scriptTag = document.createElement('script')
      scriptTag.src = config.urls.vanilla_sharing
      document.body.appendChild(scriptTag)
    }
  }
  share = () => {
    this.vanillaSharing()
    this.setState({isVisibleIcons: !this.state.isVisibleIcons})
  }

  render () {
    return this.props.rights.timeline.share && (
      <div id='share'>
        <img className='share' src={config.urls.media + 'ic_share.svg'} onClick={this.share} />
        <img src={config.urls.soc_net + 'facebook.svg'}
          onClick={() => {
            console.log('fbButton', this.props.opt.url)
            VanillaSharing.fbButton({
              url: this.props.opt.url
            })
          }}
          className={'icon-default ' + (this.state.isVisibleIcons ? 'isVisible facebook' : '')} />
        <img className={'icon-default ' + (this.state.isVisibleIcons ? 'isVisible twitter' : '')}
          onClick={() => {
            console.log('whatsapp', this.props.opt.url, this.props.opt.title)
            VanillaSharing.whatsapp({
              url: this.props.opt.url,
              title: this.props.opt.title
            })
          }}
          src={config.urls.soc_net + 'whatsapp.svg'} />
      </div>
    )
  }
}
