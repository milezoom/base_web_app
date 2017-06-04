let sidebarOpened = true
let element = document.getElementById('sidebar')

function openNav() {
    document.getElementById('sidebar').style.width = "250px"
    document.getElementById('main').style.marginLeft = "250px"
}

function closeNav() {
    document.getElementById('sidebar').style.width = "40px"
    document.getElementById('main').style.marginLeft = "40px"
}

function toggleNav() {
    if (sidebarOpened) {
        closeNav()
        sidebarOpened = false
        element.classList.toggle('mini')
    } else {
        openNav()
        sidebarOpened = true
        element.classList.toggle('mini')
    }
}

document.getElementById('toggle-nav').onclick = toggleNav
