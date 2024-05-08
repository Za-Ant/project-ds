
// Index (main page)
const accordion = document.getElementsByClassName('accordion');
for (let a of accordion) {
    a.addEventListener('click', function(){
        this.classList.toggle('active')
    });
}

// Cookie kreatívny bod

const cookie = document.querySelector('#cookie')
const cookieBtn = document.getElementById('cookie-btn')

if (!localStorage.getItem('cookie')) {
    cookie.classList.remove('hide')
}

cookieBtn.addEventListener('click', () => {
    cookie.classList.add('hide')
    localStorage.setItem('cookie', true)
})


// Alert 
function myFunction() {
    alert("Presmerujte na inú stránku.\nPotvrďte?");
}

