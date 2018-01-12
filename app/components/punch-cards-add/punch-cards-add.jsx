import AccessRights from '../access-rights/access-rights.jsx'
import {ProceduresList} from 'project-components'
import {punchGetService} from 'project-services'
import Topnav from '../topnav/topnav.jsx'
import './punch-cards-add.styl'

class PunchCardsAdd extends React.Component {
  state = {
    data: []
  }
  componentWillMount = () => punchGetService().then(r => r.status === 200 && r.json().then(data => this.setState({data})))
  render () {
    return (
      <div id='punch_cards_adding'>
        <Topnav {...this.props} punchAdd />
        {this.state.data.length > 0 && <ProceduresList data={this.state.data} />}
        <div className='test' />
      </div>
    )
  }
}
export default AccessRights(PunchCardsAdd)
