// Author: Minatisleeping

const topMenu = document.getElementById('minat-top-menu')
const toggleTopMenuIcon = document.getElementById('minat-toggle-top-menu-icon')

document.addEventListener('click', (e) => {

    if (toggleTopMenuIcon.contains(e.target)) {
        // Click to Toggle top menu icon    
        topMenu.classList.toggle('minat-topmenu-expanded')
        topMenu.classList.toggle('hidden')

    } else {
        // Click outside from Toggle menu icon
        if (topMenu.classList.contains('minat-topmenu-expanded')) {
            topMenu.classList.remove('minat-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }

})