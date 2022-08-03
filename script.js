const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

// gets the index of the last slide * 100% vh to display the correct text for the active right slide
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        // if index > length subtract index of 1 and reset index to 0
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        // if index > zero set index to the index of the last slide
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }
    // move right slide up on Y axis
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    // move right slide up on X axis
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}