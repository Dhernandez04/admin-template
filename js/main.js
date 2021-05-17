
/* EXPAND-MENU */

const menu = (toogleId, navbarId,bodyId) => {
    const toggle = document.getElementById(toogleId),
        navbar = document.getElementById(navbarId),
        Bodypadding = document.getElementById(bodyId);

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('expander');
            Bodypadding.classList.toggle('body-pd')
        })
    }
}

menu('nav-toggle', 'navbar','body')

// LINK ACTIVE
const link = document.querySelectorAll('.nav__link')

function colorLink() {
    link.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

link.forEach(l=>l.addEventListener('click',colorLink))


// COLLAPSE MENU

const collapse = document.getElementsByClassName('collapse__link')
var i;
for (i = 0; i < collapse.length; i++){
    console.log(collapse[i]);
    collapse[i].addEventListener('click', function () {
        console.log('hola');
        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('show');
        const rotate = collapseMenu.previousElementSibling;
        rotate.classList.toggle('rotate')
    })
}



// FOCUS
const input = document.querySelectorAll('.input')
// ADD FOCUS
function addfocus() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus')
    console.log('hola');
}
// REMOVE FOCUS

function removefocus() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove('focus')
    }
}

input.forEach(input => {
    input.addEventListener('focus',addfocus)
    input.addEventListener('blur',removefocus)
})
