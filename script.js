// common js
document
  .querySelectorAll(".watch-controls, .controls a, .iphone-btn")
  .forEach((control) => {
    control.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

// end of common js

// cube
let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;

const cube = document.querySelector(".cube");

document.querySelector(".top-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".bottom-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".left-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".right-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".top-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg)`;
});

document.querySelector(".bottom-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg)`;
});

const playPause = () => {
  if (bool) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};
playPause();

document.querySelector(".controls").addEventListener("mouseover", () => {
  bool = false;
  playPause();
});

document.querySelector(".controls").addEventListener("mouseout", () => {
  bool = true;
  playPause();
});
// end of cube

// slide show
// we will develop 5 div elements and give each element a background image
const slideshowDivs = () => {
  // we will loop through fron 1-5 to enable us iterate through all the images.
  for (let i = 1; i <= 5; i++) {
    // create div using a DOM element called (createElement).
    const div = document.createElement("div");
    // use a style property to asign a proper background image to the div
    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

    i === 1 && div.classList.add("change");
    // we use append child to include the element we created in html
    document.querySelector(".slideshow").appendChild(div);
  }
};
slideshowDivs();
// in other to make this banner changing to work, we add change to the div element.
// by creating a div element

const divs = document.querySelectorAll(".slideshow div");

// to avoid the throwing of an erow after the banner is executed, we need to set an increment operator
// which will be acompanied by IF statement
let a = 1;

// create a new function called slide show
const slideshow = () => {
  setInterval(() => {
    //increment operator
    a++;
    const div = document.querySelector(".slideshow .change");
    div.classList.remove("change");
    // the IF statement
    if (a < divs.length) {
      // next is to attch it to the next div element
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      a = 1;
    }
  }, 20000);
};
slideshow();
// end of slide show

// section 3
const section3content = document.querySelector(".section-3-content");

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset + window.innerHeight >=
    section3content.offsetTop + section3content.offsetHeight / 2
  ) {
    section3content.classList.add("change");
  }
});
// end of section 3

// section-4
const watchBands = document.querySelector(".watch-bands");
const watchCases = document.querySelector(".watch-cases");

const watchTopControl = document.querySelector(".watch-top-control");
const watchRightControl = document.querySelector(".watch-right-control");
const watchBottomControl = document.querySelector(".watch-bottom-control");
const watchLeftControl = document.querySelector(".watch-left-control");

// **create control for the X nd Y direction**
let axisY = 0;
let axisX = 0;

// to stop the watch from scrolling on the last img
const hideControl = () => {
  if (axisY === -280) {
    watchTopControl.classList.add("hideControl");
  } else {
    watchTopControl.classList.remove("hideControl");
  }

  if (axisY === 280) {
    watchBottomControl.classList.add("hideControl");
  } else {
    watchBottomControl.classList.remove("hideControl");
  }

  if (axisX === -280) {
    watchRightControl.classList.add("hideControl");
  } else {
    watchRightControl.classList.remove("hideControl");
  }

  if (axisX === 280) {
    watchLeftControl.classList.add("hideControl");
  } else {
    watchLeftControl.classList.remove("hideControl");
  }
};

// reducing the vh size which makes an object to come in for another
watchTopControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY -= 70)}rem`;
  hideControl();
});

watchBottomControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY += 70)}rem`;
  hideControl();
});

watchRightControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX -= 70)}rem`;
  hideControl();
});

watchLeftControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX += 70)}rem`;
  hideControl();
});

// end of secction-4
