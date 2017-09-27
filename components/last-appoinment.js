import {get, getEO} from 'project-components'
import moment from 'moment'
const getla = d => {
  const format = d => ' ' + moment(d).format('HH:mm')
  let la
  let ml
  let dl
  const t = moment()
  if (get(d, 'year') === get(t, 'year')) {
    if (get(d, 'month') === get(t, 'month')) { dl = get(d, 'date') - get(t, 'date') } else
    if (get(d, 'month') + 1 === get(t, 'month')) { dl = -1 * (getEO(d) - get(d, 'date') + get(t, 'date')) } else
    if (get(d, 'month') - 1 === get(t, 'month')) { dl = getEO(t) - get(t, 'date') + get(d, 'date') }
    if (dl < 32 || dl > -32) {
      if (config.translations.dates.days[dl]) { la = config.translations.dates.days[dl] + format(d) } else
      if (dl < 8 && dl > 1) { la = config.translations.dates.weekdays[get(d, 'day')] + format(d) } else
      if (dl > -8 && dl < -1) { la = 'Last ' + config.translations.dates.weekdays[get(d, 'day')] + format(d) } else
      if (dl < 15 && dl > 7) { la = 'In ' + dl + ' days' } else
      if (dl > -15 && dl < -7) { la = (dl * -1) + ' days ago' } else
      if (dl < 32 && dl > 14) {
        if (dl > 14 && dl < 21) { la = 'In 2 weeks' } else
        if (dl > 20 && dl < 28) { la = 'In 3 weeks' } else
        if (dl > 27 && dl < 32) { la = 'In 4 weeks' }
      } else if (dl > -32 && dl < -14) {
        if (dl < -14 && dl > -21) { la = '2 weeks ago' } else
        if (dl < -20 && dl > -28) { la = '3 weeks ago' } else
        if (dl < -27 && dl > -32) { la = '4 weeks ago' }
      }
    }
    if (dl > 31 || dl < -31 || dl === undefined) { ml = get(d, 'month') - get(t, 'month') }
  } else
  if (get(d, 'year') + 1 === get(t, 'year')) { ml = -1 * (12 - get(d, 'month') + get(t, 'month')) } else
  if (get(d, 'year') - 1 === get(t, 'year')) { ml = 12 - get(t, 'month') + get(d, 'month') } else
  if (get(d, 'year') > get(t, 'year')) { la = 'In ' + Math.floor(moment.duration(moment(d) - t).asYears()) + ' years' } else
  if (get(d, 'year') < get(t, 'year')) { la = Math.floor(moment.duration(t - moment(d)).asYears()) + ' years ago' }
  if (ml > 0 && ml < 12) { la = 'In ' + ml + ' month' } else
  if (ml < 0 && ml > -12) { la = (-1 * ml) + ' month ago' } else
  if (ml > 11) { la = 'Next year' } else
  if (ml < -11) { la = 'last year' }
  return la
}
export default getla
