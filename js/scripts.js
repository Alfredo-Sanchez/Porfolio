const toogleTheme = document.getElementById('toogle-theme')
const toogleIcon = document.getElementById('toogle-icon')
const toogleText = document.getElementById('toogle-text')

const toogleColor = document.getElementById('toogle-color')
const rootStyle = document.documentElement.style 

toogleTheme.addEventListener('click', () =>{
    document.body.classList.toggle('dark')
    if(toogleIcon.classList.contains('fa-moon')){
        toogleIcon.classList.replace('fa-moon', 'fa-sun')
        toogleText.textContent = 'Light Mode'
    }else{
        toogleIcon.classList.replace('fa-sun', 'fa-moon')
        toogleText.textContent = 'Dark Mode'
    }
})

toogleColor.addEventListener('click', (e) =>{
    if(e.target.classList.contains('colors__item')){
        rootStyle.setProperty('--primary-color', e.target.dataset.color)
    }
})