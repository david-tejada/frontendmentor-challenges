# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![Desktop](./screenshots/desktop.png)

### Links

- Solution URL: [frontendmentor-challenges/05-stats-preview-card-component](https://github.com/david-tejada/05-stats-preview-card-component)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Responsive design
- Mobile-first workflow

### What I learned

Blend image with a background color using the css property `mix-blend-mode`. I have added some transparency to better match the design:

```css
.card picture {
  background-color: var(--c-accent-600);
}

.card img {
  mix-blend-mode: multiply;
  opacity: 0.8;
}
```

Responsive paddings using clamp:

```css
padding: clamp(2rem, 6vw, 4.5rem);
```

For the desktop implementation, in order to have the image cover the entire side I used `object-fit: cover` and `object-position: top right`. This makes the image adapt to its container and always show this smiling girl when the entire picture can be shown.

### Useful resources

- [mix-blend-mode - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode)
- [Creating squishy padding and margin that adapt to the viewport - YouTube](https://www.youtube.com/watch?v=7khSaA91e04)

## Author

- Frontend Mentor - [@david-tejada](https://www.frontendmentor.io/profile/david-tejada)
- Twitter - [@david_tejada](https://www.twitter.com/david_tejada)
