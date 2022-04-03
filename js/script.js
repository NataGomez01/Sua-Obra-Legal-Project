const btnMobile = document.getElementById('btn-mobile')
const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')
const link4 = document.getElementById('link4')

function toggleMenu(event) {
    if (event.type == 'touchstart') event.preventDefault()

    const nav = document.getElementById('nav')

    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

function removeClass () {
    nav.classList.remove('active')
}

link1.addEventListener('click', removeClass)
link2.addEventListener('click', removeClass)
link3.addEventListener('click', removeClass)
link4.addEventListener('click', removeClass)