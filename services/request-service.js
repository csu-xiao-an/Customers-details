const requestService = async (url, options) => {
  await fetch(url, options).then(response => {
    if (response.status === 404) {
      throw response
    } else {
      return response.json()
    }
  }).catch(err => {
    console.error('Fetch Error: ', err)
  })
}

export default requestService
