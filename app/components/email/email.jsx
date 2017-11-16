import {clientReplaceService} from 'project-services'
import './email.styl'

export default class Email extends React.Component {
  state = {
    emailEdit: false,
    email: ''
  }
  submit = () => {
    const body = `${config.urls.email}=${this.state.email}`
    clientReplaceService(body).then(r => {
      if (r.status === 204) {
        config.data.email = this.state.email
        this.setState({emailEdit: !this.state.emailEdit, email: ''})
      }
    })
  }
  render () {
    return (
      <div id='email'>
        <div className={config.data.email ? this.state.emailEdit ? 'hidden' : 'email' : 'hidden'}>
          <div className='link-wrap'><a href={'mailto:' + config.data.email}><img src={config.urls.media + 'mail.svg'} /></a></div>
          <div className='data-wrap'>
            <div className='label-wrap'><div className={'email-label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.email}</div></div>
            <h1 className={config.isRtL ? 'left' : 'right'}
              onClick={() => this.setState({emailEdit: !this.state.emailEdit, email: config.data.email})} >{config.data.email}</h1>
          </div>
        </div>
        <div onClick={() => this.setState({emailEdit: !this.state.emailEdit})}
          className={config.data.email || this.state.emailEdit ? 'hidden' : 'add-email'}>
          <img className={config.isRtL ? 'left' : 'right'} src={config.urls.media + 'add.svg'} />
          <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.add_email}</h1>
        </div>
        <div className={this.state.emailEdit ? 'email-edit' : 'hidden'}>
          <div className='edit'>
            <input className='edit-input' type='email' value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
            <h1 className='edit-label'>{config.translations.email}</h1>
          </div>
          <div className='button'><button onClick={this.submit}>{config.translations.save}</button></div>
        </div>
      </div>
    )
  }
}
