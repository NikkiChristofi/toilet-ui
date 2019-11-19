function apiFetch (url, options) {
  return window.fetch(url, options)
    .then(response => response.json())
    .catch(error => {
      console.log('apiFetch error', error)
      throw error
    })
}

export default apiFetch