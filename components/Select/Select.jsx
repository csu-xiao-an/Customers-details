import PropTypes from 'prop-types'
import './Select.styl'

class Select extends React.Component {
  constructor () {
    super()
    this.state = {
      isVisibleList: false
    }
  }
  selectVal = i => {
    this.props.onChange && this.props.onChange(i)
    this.setState({isVisibleList: false})
  }
  render () {
    return (
      <div id='select-main' ref='active' tabIndex='1' onBlur={() => this.setState({isVisibleList: false})}>
        <div className='active' onClick={() => this.setState({isVisibleList: true}, () => this.refs.active.focus())}>
          {this.props.value && this.props.value}
          <img className={'icon ' + (this.state.isVisibleList && 'icon-active')}
            src={config.urls.media + 'select-icon.png'} />
        </div>
        <div className={this.state.isVisibleList ? 'options' : 'hidden'}>
          {this.props.options && this.props.options.map(i => (
            <div onClick={() => this.selectVal(i)}>{i.label}</div>
          ))}
        </div>
      </div>
    )
  }
}
Select.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.arr
}

export default Select
