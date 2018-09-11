import mainRequestService from './request.service'

const mainUrl = config.urls.main + config.urls.notes.replace('{client_id}', config.data.id)

export const postService = (body, id) => {
  const url = mainUrl + '/' + id
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

export const replaceService = (body, id) => {
  const url = mainUrl + '/' + id
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PUT',
    body
  }
  return mainRequestService(url, options)
}

export const deleteService = id => {
  const url = mainUrl + '/' + id
  const options = {
    mode: 'cors',
    method: 'DELETE'
  }
  return mainRequestService(url, options)
}
