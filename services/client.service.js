import mainRequestService from './request.service'

// export const postService = async body => {
//   const url = config.urls.main + '/customers-details/clients/' + config.data.id
//   const options = {
//     mode: 'cors',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     method: 'POST',
//     body
//   }
//   return await mainRequestService(url, options)
// }
export const replaceService = async body => {
  const url = config.urls.main + '/customers-details/clients/' + config.data.id
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
// export const deleteService = async id => {
//   const url = config.urls.main + '/customers-details/clients/' + config.data.id + '/' + id
//   const options = {
//     mode: 'cors',
//     method: 'DELETE'
//   }
//   return await mainRequestService(url, options)
// }
export const getService = async query => {
  const url = config.urls.main + '/add-client/clients/?q=' + query
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return await mainRequestService(url, options)
}
