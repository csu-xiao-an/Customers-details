import SocialNetwork from '../social-network/social-network.jsx'
import Birthdate from '../birthdate/birthdate.jsx'
import Events from '../events/events.jsx'
import Source from '../source/source.jsx'
import Groups from '../groups/groups.jsx'
import Adress from '../adress/adress.jsx'
import Email from '../email/email.jsx'
import Media from '../media/media.jsx'
import Notes from '../notes/notes.jsx'
import Debts from '../debts/debts.jsx'
import Sex from '../sex/sex.jsx'
import './hidden-fields.styl'

export default class HiddenFields extends React.Component {
  state = {
    isVisibleFields: false
  }
  render () {
    return (
      <div id='hidden-fields'>
        <div className={this.state.isVisibleFields ? 'hidden' : 'main-button'}>
          <button onClick={() => this.setState({isVisibleFields: true})}>{config.translations.show_more_fields}</button>
        </div>
        {this.state.isVisibleFields &&
          <div className=''>
            {!config.data.recent_appoinments && <Events />}
            {!config.data.email && <Email />}
            {!config.data.adress && <Adress />}
            {!config.data.debts && <Debts />}
            {!config.data.notes && <Notes />}
            {!config.data.gallery && <Media />}
            {!config.data.source && <Source />}
            {!config.data.soc_media && <SocialNetwork />}
            {!config.data.groups && <Groups />}
            {!config.data.gender && <Sex />}
            {!config.data.birthdate && <Birthdate />}
          </div>}
      </div>
    )
  }
}
