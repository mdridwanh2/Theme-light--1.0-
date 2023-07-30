let menu = document.querySelector (`#menu-bar`)
let navItem = document.querySelector (`.nav-item`)

menu.onclick = () =>{
    menu.classList.toggle (`bx-x`);
    navItem.classList.toggle (`show`);
}