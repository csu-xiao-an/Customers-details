import mainRequestService from './request.service'

export default q => {
  const url = config.urls.address.replace('{query}', q).replace('{language}', config.translations.language)
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}
