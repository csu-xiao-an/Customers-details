import moment from 'moment'
const viewDate = d =>
  moment(d).hours() + ':' + moment(d).format('mm') + ' | ' + moment(d).date() + ' ' + config.translations.dates.months[moment(d).month()]
export default viewDate
