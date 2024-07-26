document.addEventListener('DOMContentLoaded', () => {
    const contactEmail = document.getElementById('contactEmail');
    const contactPhone = document.getElementById('contactPhone');
    const emailInput = document.getElementById('emailInput');
    const phoneInput = document.getElementById('phoneInput');

    contactEmail.addEventListener('change', () => {
        if (contactEmail.checked) {
            emailInput.style.display = 'block';
            phoneInput.style.display = 'none';
        }
    });

    contactPhone.addEventListener('change', () => {
        if (contactPhone.checked) {
            phoneInput.style.display = 'block';
            emailInput.style.display = 'none';
        }
    });
});

function handleSubmit() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const message = document.getElementById('message').value;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;

    if (contactMethod === 'email') {
        const email = document.getElementById('email').value;
        const mailtoLink = `mailto:boyzantshuxeko@icloud.com?subject=Contact from ${firstName} ${lastName}&body=${message}`;
        window.location.href = mailtoLink;
    } else if (contactMethod === 'phone') {
        const whatsappMessage = `https://wa.me/27791092816?text=Hello, my name is ${firstName} ${lastName}. ${message}`;
        window.open(whatsappMessage, '_blank');
    }
}

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
        const top = window.scrollY;
        const height = section.offsetHeight;
        const offset = section.offsetTop - 150;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            currentSectionId = id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  loop: true,
});

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut;