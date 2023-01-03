const btnMobile = document.getElementById('btn-mobile')
const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')
const link4 = document.getElementById('link4')
const next = document.getElementById('next')
const previous = document.getElementById('previous')
const first = document.querySelector('.firstBackground')
const second = document.querySelector('.secondBackground')

window.setInterval(verifyBackground, 10000)

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

function verifyBackground() {
    const haveFirst = first.classList.contains('active')
    if (haveFirst) {
        first.classList.remove('active')
        second.classList.add('active')
    } else {
        second.classList.remove('active')
        first.classList.add('active')
    }
}

function handleButton() {
    verifyBackground()
}

next.addEventListener('click', handleButton)
previous.addEventListener('click', handleButton)