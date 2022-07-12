# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
<!-- - **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_ -->

### Screenshot

![](./andresgrdn.github.io_rock-paper-scissors-game_.png)

### Links

- Solution URL: [https://github.com/andresgrdn/rock-paper-scissors-game](https://github.com/andresgrdn/rock-paper-scissors-game)
- Live Site URL: [https://andresgrdn.github.io/rock-paper-scissors-game/](https://andresgrdn.github.io/rock-paper-scissors-game/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Storage API

### What I learned

Storage API

There is an api that allows the websites to storage some data into the user local storage, I used this api to save the game score even when the browser is closed. But I have a problem when the page loads the score was not being updated with the value saved. The solution that I used, was the document DOMcontentloaded event listener, into the callback I could update the score view with the score saved.

I have a better understanding about grid sizing

Of reading the CSSWG grid draft I understand that when grid layout is used in every situation there are default sizes for the column and the rows, and that is for all the css properties, I think first think to do when a new property appear, is a good idea to see the defaults values first.

### Useful resources

- [Storage API | MDN docs site](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) - This helped me to saved the score value and use it when the user visit again the game website. It is a tutorial from the MDN docs, It has some examples that help me to understand how to use the Storage API.
- [DOMContentLoaded | MDN docs site](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) - This is the document event docs. It is good to learn how this event works. I used it for updating the score when the page is reload or first loaded.
- [Grid track-sizing | CSSWG draft](https://drafts.csswg.org/css-grid/#track-sizing) - This docs say something about explicit and implicit track sizing, more easy to understand there are default values whenever grid layout is used.

## Author

- Website - [Andres Gordon](https://andresgrdn.github.io)
- Frontend Mentor - [@andresgrdn](https://www.frontendmentor.io/profile/andresgrdn)
- Twitter - [@andresgrdn](https://www.twitter.com/andresgrdn)
