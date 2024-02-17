const insert = document.getElementsByClassName('first')[0]
console.log(insert.innerText)
window.addEventListener('keydown', (e) =>{
    insert.innerHTML = `
    <div class="key">
            <small>event.key</small>
            <div class="box">${e.key === ' ' ? 'Space' : e.key}</div>
          </div>
          <div class="key">
            <small>event.keycode</small>
            <div class="box">${e.keyCode}</div>
          </div>
          <div class="key">
            <small>event.code</small>
            <div class="box">${e.code}</div>
          </div>
      </div>`
})