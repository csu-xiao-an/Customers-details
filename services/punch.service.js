import mainRequestService from './request.service'

const mainUrl = config.urls.main + config.urls.punch_cards_req.replace('{client_id}', config.data.id)

export const getPunchCards = () => {
  const url = config.urls.main + config.urls.get_punch_cards_list.replace('{client_id}', config.data.id)
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}

export const getService = () => {
  const url = config.urls.main + config.urls.punch_cards_get
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}

export const postServiceUse = (id, body) => {
  const url = mainUrl + '/' + id + '/use'
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

export const postService = body => {
  const url = mainUrl
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

export const deleteService = id => {
  const url = mainUrl + '/' + id
  const options = {
    mode: 'cors',
    method: 'DELETE'
  }
  return mainRequestService(url, options)
}

export const deleteServiceUse = (Pid, Uid) => {
  const url = mainUrl + '/' + Pid + '/use/' + Uid
  const options = {
    mode: 'cors',
    method: 'DELETE'
  }
  return mainRequestService(url, options)
}
