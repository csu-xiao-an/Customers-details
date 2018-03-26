import {birthdaysStatus} from 'project-components'
import './birthday.styl'
export default () => (<div id={birthdaysStatus(config.data.birthdate) === undefined ? 'birthday-wrap-disabled' : 'birthday-wrap'}
  className={config.isRtL ? 'birthday-wrap-right' : 'birthday-wrap-left'}><img src={config.urls.media + 'ic_birthday.svg'} />&nbsp;<h1>{birthdaysStatus(config.data.birthdate)}</h1></div>)
