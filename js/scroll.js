const menuItems = document.querySelectorAll('#nav a');
const logo = document.querySelectorAll('#logotipo a');

const getScrollTopByHref = (element) => {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

const scrollToIdOnClick = (event) =>{
    event.preventDefault();

    const to = getScrollTopByHref(event.target) - 80;
    scrollToPosition(to)
}

const scrollToPosition = (to) => {
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

logo.addEventListener('click', scrollToIdOnClick);
