import moment from 'moment'

export const getBirthdaysStatus = date => {
  const today = moment()
  let birthdayStatus
  let dayLeft
  const day = {
    '-1': 'Yesterday',
    '1': 'Tomorrow',
    '0': 'Today'
  }
  if (moment(date).get('month') === moment(today).get('month')) {
    dayLeft = moment(date).get('date') - moment(today).get('date')
  } else if (moment(date).get('month') + 1 === moment(today).get('month')) {
    dayLeft = -1 * (moment(date).endOf('month').get('date') - moment(date).get('date') + moment(today).get('date'))
  } else if (moment(date).get('month') - 1 === moment(today).get('month')) {
    dayLeft = moment(today).endOf('month').get('date') - moment(today).get('date') + moment(date).get('date')
  }
  if (day[dayLeft]) {
    birthdayStatus = day[dayLeft]
  } else if (dayLeft < 31 && dayLeft > 1) {
    birthdayStatus = 'In ' + dayLeft + ' days'
  } else if (dayLeft > -8 && dayLeft < -1) {
    birthdayStatus = (-1 * dayLeft) + ' days ago'
  }
  return birthdayStatus
}
