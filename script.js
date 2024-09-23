function initSwiper() {
    new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 16,
        slidesPerView: 1.25,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

if (document.body.clientWidth < 768) {
    initSwiper()
}


// Переменные
const showButton = document.querySelector(".show-more")
const brands = document.querySelector(".brands")
const showButtonText = document.getElementById("show")
const showButtonImage = document.getElementById("arrows")


function showHide() {
    brands.classList.toggle("brands-hidden")
    showButtonImage.classList.toggle("arrows-rotated")

    if (brands.classList.contains("brands-hidden"))
        showButtonText.textContent = "Показать все"
    else
        showButtonText.textContent = "Скрыть"

}

showButton.onclick = showHide
