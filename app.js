// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();

// ********** close links ************

const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const toggleBtn = document.querySelector(".nav-toggle");

toggleBtn.addEventListener("click", () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight == 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = "0";
  }
});

// ********** fixed navbar ************
const navbar = document.querySelector("nav");
const scrollToTopLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 600) {
    scrollToTopLink.classList.add("show-link");
  } else {
    scrollToTopLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    // prevented the default behaviour
    e.preventDefault();

    // get the id of the link you click
    const id = item.getAttribute("href").slice(1);

    // find the elemnent by using id
    const element = document.getElementById(id);

    // find the navbar height anc link container height
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    // check if the navbar is fixed
    const isNavFixed = navbar.classList.contains("fixed-nav");

    // get the top position of the element
    let position = element.offsetTop - navHeight;

    if (!isNavFixed) {
      position = position - navHeight;
    }

    if (navHeight > 82) {
      position = position + containerHeight;
    }

    // scroll to the position
    window.scrollTo({
      left: 0,
      top: position,
    });

    // close the navbar when you click on the nav links
    linksContainer.style.height = "0";
  });
});
