const menu = document.getElementById('menu')
menu.addEventListener('click', () => {
  const menuBar = document.getElementById('menu-bar')
  const esc = document.querySelector('#menu-bar p')
  esc.style.display = 'block'
  menuBar.style.display = 'flex'
})
const esc = document.querySelector('#menu-bar p')
esc.addEventListener('click', () => {
  esc.style.display = 'none'
  const menuBar = document.getElementById('menu-bar')
  menuBar.style.display = 'none'
})
