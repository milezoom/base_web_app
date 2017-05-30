var sidebarOpened = false;

function openNav() {
    document.getElementById('sidebar').style.width = "300px";
    document.getElementById('main').style.marginLeft = "300px";
}

function closeNav() {
    document.getElementById('sidebar').style.width = "75px";
    document.getElementById('main').style.marginLeft = "75px";
}

function toggleNav() {
    if (sidebarOpened) {
        closeNav(); sidebarOpened = false;
    } else {
        openNav(); sidebarOpened = true;
    }
}

document.getElementById('toggle-nav').onclick = toggleNav;