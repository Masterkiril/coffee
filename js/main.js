// Мобильное меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация при скролле
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.menu-item, .contact-form, .gallery img');
    
    elements.forEach(el => {
        const elPosition = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elPosition < screenPosition) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Изначально прячем элементы
document.querySelectorAll('.menu-item, .contact-form, .gallery img').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s, transform 0.5s';
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Инициализация при загрузке

// --- Модальное окно для увеличения фото ---
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.querySelector('.image-modal-close');

// Открытие модального окна по клику на фото
if (galleryImages.length && modal && modalImg && modalClose) {
    galleryImages.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function() {
            modal.classList.add('active');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });
    // Закрытие по крестику
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        modalImg.src = '';
    });
    // Закрытие по клику вне картинки
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            modalImg.src = '';
        }
    });
    // Закрытие по Esc
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            modalImg.src = '';
        }
    });
}