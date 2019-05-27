import './share.styl'

export default class Share extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired,
    opt: PropTypes.object.isRequired
  }

  componentDidMount () {
    if (!window.VanillaSharing) {
      let scriptTag = document.createElement('script')
      scriptTag.src = config.urls.vanilla_sharing
      document.body.appendChild(scriptTag)
    }
  }

  render () {
    return this.props.rights.timeline.share && (
      <div id='share'>
        <img src={config.urls.soc_net + 'facebook.svg'}
          onClick={() => {
            this.props.opt.urls.map(val => {
              VanillaSharing.fbButton({
                url: config.urls.gallery_sharing_base_url + val
              })
            })
          }}
          className={'icon-default facebook'}
        />
        <img className={'icon-default twitter'}
          onClick={() => {
            this.props.opt.urls.map(val => {
              VanillaSharing.whatsapp({
                url: config.urls.gallery_sharing_base_url + val,
                title: this.props.opt.title
              })
            })
          }}
          src={config.urls.soc_net + 'whatsapp.svg'}
        />
      </div>
    )
  }
}
