import "./styles.css";

const curdate = document.getElementById("date");
curdate.innerHTML = new Date().getFullYear();

const navTog = document.querySelector(".nav-toggle");
const linkcontainer = document.querySelector(".links-container");
const link = document.querySelector(".links");

navTog.addEventListener("click", function () {
  // console.log(0);
  const contheight = linkcontainer.getBoundingClientRect().height;
  const linkheigh = link.getBoundingClientRect().height;

  // console.log(contheight);
  // console.log(linkheigh);

  if (contheight === 0) {
    linkcontainer.style.height = `${linkheigh}px`;
  } else {
    //  console.log(2);
    linkcontainer.style.height = 0;
  }
});

const navbar = document.getElementById("nav");
const toplink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollheight = window.pageYOffset;
  const navheight = navbar.getBoundingClientRect().height;

  if (scrollheight > navheight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollheight > 500) {
    toplink.classList.add("show-link");
  } else {
    toplink.classList.remove("show-link");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linkcontainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position
    });
    // close
    linkcontainer.style.height = 0;
  });
});
