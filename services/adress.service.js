import mainRequestService from './request.service'

const getService = async q => {
  const url = config.urls.adress.replace('{query}', q).replace('{language}', config.translations.language)
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  const r = await mainRequestService(url, options)
  const rs = await r.json()
  return rs.results
}

export default getService
