const moonSun=document.getElementById('moonSun')


function change(){
    let boxLogin=document.getElementById('boxLogin')
    boxLogin.classList.toggle('on')

const iSunMoon=document.getElementById('iSunMoon')
    if(iSunMoon.classList.contains('fa-moon')){
        iSunMoon.classList.remove('fa-moon')
        iSunMoon.classList.add('fa-sun')
    } else{
        iSunMoon.classList.remove('fa-sun')
        iSunMoon.classList.add('fa-moon')
    }
}

moonSun.addEventListener('click', change)




