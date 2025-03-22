let btnAlert = document.querySelector('.btn-alert')

btnAlert.addEventListener('click',()=>{
    alert('Ok brother !')
})

// dark mode

let darkMode = document.getElementById('light-theme');
let darkSpan = document.querySelector('.theme-span');

darkMode.addEventListener('click', () => {
    if (darkMode.id === 'light-theme') {
        document.documentElement.id = 'dark-theme'; 
        darkMode.id = 'dark-theme';
        darkMode.classList.remove('fa-moon');
        darkMode.classList.add('fa-sun'); 
        darkMode.style.color = 'white' 
        darkSpan.innerText = 'Light mode'
    } else {
        document.documentElement.id = 'light-theme'; 
        darkMode.id = 'light-theme';
        darkMode.classList.remove('fa-sun');
        darkMode.classList.add('fa-moon'); 
        darkMode.style.color = 'black' 
        darkSpan.innerText = 'Dark mode'
    }
});

// auto type

var typed = new Typed('.auto-type',{
    strings : ['Web developer'],
    typeSpeed : 50,
    backSpeed : 30,
    loop : true
})


// Move to top button

let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

