import {get, getEO} from 'project-components'
import moment from 'moment'
const getBirthdaysStatus = d => {
  const t = moment()
  let dl
  if (get(d, 'month') === get(t, 'month')) { dl = get(d, 'date') - get(t, 'date') } else
  if (get(d, 'month') + 1 === get(t, 'month')) { dl = -1 * (getEO(d) - get(d, 'date') + get(t, 'date')) } else
  if (get(d, 'month') - 1 === get(t, 'month')) { dl = getEO(t) - get(t, 'date') + get(d, 'date') }

  if (config.translations.dates.days[dl]) { return config.translations.dates.days[dl] } else
  if (dl < 31 && dl > 1) { return 'In ' + dl + ' days' } else
  if (dl > -8 && dl < -1) { return (-1 * dl) + ' days ago' }
}
export default getBirthdaysStatus
