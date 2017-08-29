import moment from 'moment'
export const viewDate = date => {
  const months = {
    0: config.translations.dates.months.January,
    1: config.translations.dates.months.February,
    2: config.translations.dates.months.March,
    3: config.translations.dates.months.April,
    4: config.translations.dates.months.May,
    5: config.translations.dates.months.June,
    6: config.translations.dates.months.July,
    7: config.translations.dates.months.August,
    8: config.translations.dates.months.September,
    9: config.translations.dates.months.October,
    10: config.translations.dates.months.November,
    11: config.translations.dates.months.December
  }
  return (moment(date).hours() + ':' + moment(date).format('mm') + ' | ' +
    moment(date).date() + ' ' + months[moment(date).month()]
  )
}
