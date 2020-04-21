const floatButton = document.getElementById('float-button');
const hamburger = document.getElementById('float-button__hamburger');
const bar = document.getElementById('float-button__social');
const closeBar = document.getElementById('float-button__close-bar');
const menuIcon = document.getElementById('hamburger-icon');
const menuList = document.getElementById('menu-nav__list');
const modal = document.getElementById('modal');
const closeB = document.getElementById('closeGallery');
const modalPic = document.getElementById('modalP');
const nextB = document.getElementById('nextB');
const prevB = document.getElementById('prevB');
var i = 0;

menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('menu-nav__list--open');
    menuList.style.transition = 'right 0.3s ease';
});

window.onresize = () => {
    menuList.classList.remove('menu-nav__list--open');
    menuList.style.transition = 'right 0s ease';
}

window.onscroll = () => {
    menuList.classList.remove('menu-nav__list--open');
    menuList.style.transition = 'right 0.3s ease';
}

window.onload = () => {
    document.getElementById('container-L').style.display = "none";
    document.getElementById('body').classList.remove('hidden');
}
closeB.onclick = () => {
    showModal();
    document.getElementById('body').classList.remove('hidden');
    modal.style.zIndex = "0";
}

function showModal(num) {
    modal.classList.toggle('hidde');
    changePhoto(num);
    document.getElementById('body').classList.add('hidden');
    modal.style.zIndex = "4";
}

nextB.onclick = () => {
    if (i <= 5) {
        i++;
        changePhoto(i);
    } else {
        changePhoto(1);
    }
}

prevB.onclick = () => {
    if (i >= 2) {
        --i;
        changePhoto(i);
    } else {
        changePhoto(6);
    }
}

function changePhoto(num) {
    modalPic.setAttribute('src', "../source/img/gallery_" + num + ".webp");
    i = num;
}

hamburger.onclick = () => {
    float_button_social();
}

closeBar.onclick = () => {
    float_button_social();
}

function float_button_social() {
    floatButton.classList.toggle('float-button--bar');
    hamburger.classList.toggle('float-button--hidden');
    bar.classList.toggle('float-button--hidden');
}