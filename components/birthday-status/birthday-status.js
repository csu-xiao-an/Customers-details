import moment from 'moment'

const getBirthdaysStatus = date => {
  let dayLeft
  const today = moment()
  if (moment(date).get('month') === moment(today).get('month')) {
    dayLeft = moment(date).get('date') - moment(today).get('date')
  } else if (moment(date).get('month') + 1 === moment(today).get('month')) {
    dayLeft = -1 * (moment(date).endOf('month').get('date') - moment(date).get('date') + moment(today).get('date'))
  } else if (moment(date).get('month') - 1 === moment(today).get('month')) {
    dayLeft = moment(today).endOf('month').get('date') - moment(today).get('date') + moment(date).get('date')
  }
  const day = {
    '-1': 'Yesterday',
    '1': 'Tomorrow',
    '0': 'Today'
  }
  let birthdayStatus
  if (day[dayLeft]) {
    birthdayStatus = day[dayLeft]
  } else if (dayLeft < 8 && dayLeft > 1) {
    birthdayStatus = 'In ' + dayLeft + ' days'
  } else if (dayLeft > -8 && dayLeft < -1) {
    birthdayStatus = dayLeft * -1 + ' days ago'
  }
  return birthdayStatus
}
export default getBirthdaysStatus
