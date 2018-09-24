import mainRequestService from './request.service'

export const replaceService = body => {
  const url = config.urls.main + config.urls.clients.replace('{client_id}', config.data.id)
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PATCH',
    body
  }
  return mainRequestService(url, options)
}

export const getService = q => {
  const url = config.urls.main + config.urls.add_client_url.replace('{query}', q)
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}

export const deleteService = q => {
  const url = config.urls.main + config.urls.clients.replace('{client_id}', q)
  const options = {
    mode: 'cors',
    method: 'DELETE'
  }
  return mainRequestService(url, options)
}

export const postServiceTest = body => {
  const url = config.urls.main + config.urls.clients.replace('{client_id}', config.data.id) + '/profile_image'
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    body
  }
  return mainRequestService(url, options)
}
