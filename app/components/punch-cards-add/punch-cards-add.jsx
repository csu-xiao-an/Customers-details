import AccessRights from '../access-rights/access-rights.jsx'
import {punchGetService} from 'project-services'
import './punch-cards-add.styl'

class PunchCardsAdd extends React.Component {
  state = {
    data: []
  }
  componentWillMount = () => {
    punchGetService().then(r => r.json().then(data => this.setState({data})))
  }
  render () {
    return (
      <div id=''>
        {this.state.data.map(i => <div>{i.id} => {i.name}</div>)}
        <div className='test' />
      </div>
    )
  }
}
export default AccessRights(PunchCardsAdd)
