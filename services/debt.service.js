import mainRequestService from './request.service'

const mainUrl = config.urls.main + config.urls.debt.replace('{client_id}', config.data.id)

export const postService = body => {
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    body
  }
  return mainRequestService(mainUrl, options).then(r => r.json().then(data => ({
    status: r.status,
    data
  })))
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
