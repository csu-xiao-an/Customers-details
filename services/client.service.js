import mainRequestService from './request.service'

export const replaceService = async body => {
  const url = config.urls.main + config.urls.clients.replace('{client_id}', config.data.id)
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PATCH',
    body
  }
  return await mainRequestService(url, options)
}

export const getService = async q => {
  const url = config.urls.main + config.urls.add_client_url.replace('{query}', q)
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  const r = await mainRequestService(url, options)
  return r.json()
}
