# 50 Projects in 50 Days - Double Vertical Slider

This is a code along project in the [50 Projects In 50 Days - HTML, CSS & JavaScript Udemy Course](https://www.udemy.com/course/50-projects-50-days/). Sharpen your skills by building 50 quick, unique & fun mini projects.

## Table of contents 😌

- [Overview](#overview)
  - [The project](#the-project)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Code snippets](#im-really-proud-of-these-code-snippets%EF%B8%8F)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview👋🏾

Welcome to the 26<sup>th</sup> mini-project of the course!

### The project😥

In this project users will be able to:

- Build a vertical slider that displays an image on one side and text on the opposite side. When user clicks an arrow one side scrolls up and the other side scrolls down.

### Screenshot🌇

![](./screenshot.gif)

### Links👩🏾‍💻

- Live Site URL: (https://majestic-axolotl-9ce7b5.netlify.app/)

## My process💭

This is a simple project that I started by marking out initial structure, and classes in HTML. Next I finalized the UI by styling the CSS. I styled both the left and right slides as well as the buttons. I then added functionality by way of JavaScript to rotate through the left and right slides on the Y axis. The right slide rotates up while the left slide rotates down.

### Built with👷🏾‍♀️

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned👩🏾‍🏫

I learned the logic behind making a visually stimulating vertical slider functional.

### Continued development🔮

In the future I plan on continuing to practice accessing elements in the DOM to make my pages more dynamic.

I also plan on continuing to practice using event listeners to make my pages more functional.

I also plan on continuing to learn the best ways to phrase git commits, so that future viewers can fully understand the changes that have occurred.

### I'm really proud of these code snippets✂️

```css
.slider-container .action-buttons .down-button {
  transform: translateX(-100%);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.slider-container .action-buttons .up-button {
  transform: translateY(-100%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
```

```js
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
```

### Useful resources📖

- [Resource](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) - This is an amazing article which helped me write better commit messages. I'd recommend it to anyone still learning this concept.

## Author🔎

- Website - [Portfolio Site](https://maiannethornton.netlify.app/)
- Frontend Mentor - [@MaianneThornton](https://www.frontendmentor.io/profile/MaianneThornton)
- GitHub - [@MaianneThornton](GitHub.com/MaianneThornton)
- Twitter - [@MaianneThornton](https://twitter.com/MaianneThornton)
- LinkedIn - [@MaianneThornton](https://www.linkedin.com/in/maiannethornton/)

## Acknowledgments🙏🏾

Special Thanks go to [Brad Traversy](http://www.traversymedia.com/) and [Florin Pop](http://www.florin-pop.com/) creating the course and making reviewing concepts fun 😊.
