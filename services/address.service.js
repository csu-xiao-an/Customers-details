import mainRequestService from './request.service'

export const getService = q => {
  const url = config.urls.new_address.replace('{query}', q).replace('{language}', config.translations.language)
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}

export const addressService = () => {
  const url = config.urls.add_address
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options).then(r => r.json().then(r => ({ r })))
}
