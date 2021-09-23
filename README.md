# 15 Vanilla JavaScript Projects

This project is a part of 15 vanilla JavaScript projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

![preview of project](./preview.gif)

### Links

- [View live](https://junaidshaikh-js.github.io/scroll/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- CSS Flexbox
- JavaScript

### What I learned

I learned multiple things in this mini project. Everything is dynamically calculate here. Such as navbar height, element position from top, etc

1. getBoundingClientRect() method

This method returns an object with the information about the position of the element on your screen.

Syntax

```js
element.getBoundingClientRect();
```

I used this method to calculate the height of navigation links, so that we can dynamically decide the height for toggle menu on mobile screen rather than guessing and hard coding it.

2. pageYOffset

This is read-only window property that return a number indicating how much we scrolled vertically in pixels. The value is calculated at the very top of the viewport.

Syntax

```js
let verticalScrollHeight = window.pageYOffset;
```

In this project, this method is used to fixed the navbar once the user scrolled more than the height of the navbar and to show the scroll to top button once user scrolled more than 600px

3. offsetTop

offsetTop is the element read-only property that return the number of pixels from the top for the element from the closest relatively positioned parent element.

Syntax

```js
const topPos = element.offsetTop;
```

This method is used to properly scroll to the specific section.

## Author

- Twitter - [@junaidshaikh_js](https://twitter.com/junaidshaikh_js)
- Linkedin - [@junaidshaikhjs](https://www.linkedin.com/in/junaidshaikhjs/)
