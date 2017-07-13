import moment from 'moment'
const client = window._config

const getLastAppoinment = date => {
  let lastAppoinment
  let dayLeft
  let monthLeft
  const today = moment()
  const weekdays = {
    '1': client.translations.dates.weekdays.Monday,
    '2': client.translations.dates.weekdays.Tuesday,
    '3': client.translations.dates.weekdays.Wednesday,
    '4': client.translations.dates.weekdays.Thursday,
    '5': client.translations.dates.weekdays.Friday,
    '6': client.translations.dates.weekdays.Saturday,
    '7': client.translations.dates.weekdays.Sunday
  }
  const day = {
    '-1': client.translations.dates.days.Yesterday + ' ' + moment(date).hour() + ':' + moment(date).format('mm'),
    '1': client.translations.dates.days.Tommorow + ' ' + moment(date).hour() + ':' + moment(date).format('mm'),
    '0': client.translations.dates.days.Today + ' ' + moment(date).hour() + ':' + moment(date).format('mm')
  }
  if (moment(date).get('year') === moment(today).get('year')) {
    if (moment(date).get('month') === moment(today).get('month')) {
      dayLeft = moment(date).get('date') - moment(today).get('date')
    } else if (moment(date).get('month') + 1 === moment(today).get('month')) {
      dayLeft = -1 * (moment(date).endOf('month').get('date') - moment(date).get('date') + moment(today).get('date'))
    } else if (moment(date).get('month') - 1 === moment(today).get('month')) {
      dayLeft = moment(today).endOf('month').get('date') - moment(today).get('date') + moment(date).get('date')
    }
    if (dayLeft < 32 || dayLeft > -32) {
      if (day[dayLeft]) {
        lastAppoinment = day[dayLeft]
      } else if (dayLeft < 8 && dayLeft > 1) {
        lastAppoinment = weekdays[moment(date).get('day')] + ' ' + moment(date).hour() + ':' + moment(date).format('mm')
      } else if (dayLeft > -8 && dayLeft < -1) {
        lastAppoinment = 'Last' + ' ' + weekdays[moment(date).get('day')] + ' ' + moment(date).hour() + ':' + moment(date).format('mm')
      } else if (dayLeft < 15 && dayLeft > 7) {
        lastAppoinment = 'In ' + dayLeft + ' days'
      } else if (dayLeft > -15 && dayLeft < -7) {
        lastAppoinment = (dayLeft * -1) + ' days ago'
      } else if (dayLeft < 32 && dayLeft > 14) {
        if (dayLeft > 14 && dayLeft < 21) {
          lastAppoinment = 'In 2 weeks'
        } else if (dayLeft > 20 && dayLeft < 28) {
          lastAppoinment = 'In 3 weeks'
        } else if (dayLeft > 27 && dayLeft < 32) {
          lastAppoinment = 'In 4 weeks'
        }
      } else if (dayLeft > -32 && dayLeft < -14) {
        if (dayLeft < -14 && dayLeft > -21) {
          lastAppoinment = '2 weeks ago'
        } else if (dayLeft < -20 && dayLeft > -28) {
          lastAppoinment = '3 weeks ago'
        } else if (dayLeft < -27 && dayLeft > -32) {
          lastAppoinment = '4 weeks ago'
        }
      }
    }
    if (dayLeft > 31 || dayLeft < -31 || dayLeft === undefined) {
      monthLeft = moment(date).get('month') - moment(today).get('month')
    }
  } else if (moment(date).get('year') + 1 === moment(today).get('year')) {
    monthLeft = -1 * (12 - moment(date).get('month') + moment(today).get('month'))
  } else if (moment(date).get('year') - 1 === moment(today).get('year')) {
    monthLeft = 12 - moment(today).get('month') + moment(date).get('month')
  } else if (moment(date).get('year') > moment(today).get('year')) {
    lastAppoinment = 'In ' + Math.floor(moment.duration(moment(date) - moment()).asYears()) + ' years'
  } else if (moment(date).get('year') < moment(today).get('year')) {
    lastAppoinment = Math.floor(moment.duration(moment() - moment(date)).asYears()) + ' years ago'
  }

  if (monthLeft > 0 && monthLeft < 12) {
    lastAppoinment = 'In ' + monthLeft + ' month'
  } else if (monthLeft < 0 && monthLeft > -12) {
    lastAppoinment = (-1 * monthLeft) + ' month ago'
  } else if (monthLeft > 11) {
    lastAppoinment = 'Next year'
  } else if (monthLeft < -11) {
    lastAppoinment = 'Last year'
  }
  return lastAppoinment
}
export default getLastAppoinment
