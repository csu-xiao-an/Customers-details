if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err))
}

let deferredPrompt
window.addEventListener('beforeinstallprompt', e => {
  console.log('beforeinstallprompt from groups')
  e.preventDefault()
  deferredPrompt = e
  const install_btn = document.querySelector('.install')
  install_btn.classList.remove('installed')
  install_btn.addEventListener('click', e => {
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        install_btn.classList.add('installed')
        console.log('User accepted the A2HS prompt')
      } else {
        console.log('User dismissed the A2HS prompt')
      }
      deferredPrompt = null
    })
  })
})
