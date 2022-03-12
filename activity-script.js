const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.mobile-menu')

toggle.addEventListener('click', () => {
    menu.classList.toggle('active')
    toggle.classList.toggle('toggle-close')
})

const activityBody = document.querySelector('.activity-body')

activityBody.addEventListener('click', () => {
    menu.classList.remove('active')
    toggle.classList.remove('toggle-close')
})