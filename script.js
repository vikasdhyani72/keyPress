let paraKey = document.querySelector('#key')
let paraEl = document.querySelector('#code')

function showkey(event) {
  paraKey.innerHTML = event.key
  paraEl.innerHTML = event.keyCode
}
