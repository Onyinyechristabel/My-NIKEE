const hero = document.querySelector(".hero");
const curtain = document.querySelector(".curtain");
const nike = document.querySelector(".nike");
const hide = document.querySelector(".hide");
const nav = document.querySelector(".navbar");
const hidden = document.querySelector(".nav__suggestions");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");
const circular = document.querySelector(".circular");
let inspect = "closed";
let nikky = "tapped";
const myFunction = function () {
  document.querySelector(".hero").classList.remove("hide");
  document.querySelector(".curtain").classList.add("hide");
};

nav.onclick = function () {
  if (inspect === "closed") {
    content.classList.add("hide");
    hidden.classList.remove("hidden");
    inspect = "opened";
  } else if (inspect === "opened") {
    hidden.classList.add("hidden");
    content.classList.remove("hide");
    inspect = "closed";
  }
};
circular.onclick = function () {
  gsap.to(".hero", { backgroundColor: "black", color: "white" });

  if (nikky === "tapped") {
    gsap.to(".hero", { backgroundColor: "black", color: "white" });
    nikky = "untapped";
  } else {
    gsap.to(".hero", { backgroundColor: "white", color: "black" });
    nikky = "tapped";
  }
};

const animation = gsap
  .timeline()
  .to(".curtain", {
    delay: 0.2,
    height: "25vh",
    duration: 2,
    ease: "power2",
    backgroundColor: " #7f76c7",
  })
  .to(".curtain", {
    height: "50vh",
    duration: 2,
    delay: 0.2,
    ease: "power2",
    backgroundColor: "#42a189",
  })
  .to(".curtain", {
    height: "75vh",
    duration: 2,
    delay: 0.2,
    ease: "power2",
    backgroundColor: "#cf6c83",
  })
  .to(".curtain", {
    height: "100vh",
    duration: 2,
    delay: 0.2,
    ease: "power2",
    backgroundColor: "#a6a6a6",
  });

gsap
  .timeline({ onComplete: myFunction })
  .to(".nike", {
    filter: "hue-rotate(252deg)",
    duration: 2,
    delay: 0.2,
  })
  .to(".nike", {
    filter: "hue-rotate(105deg)",
    duration: 2,
    delay: 0.2,
  })
  .to(".nike", {
    filter: "hue-rotate(-10deg)",
    duration: 2,
    delay: 0.2,
  })
  .to(".nike", {
    filter: "grayscale(1)",
    duration: 2,
    delay: 0.2,
  });
myFunction;

gsap
  .timeline({ delay: 9 })
  .from(".nikename", {
    yPercent: 100,
    duration: 1,
  })
  .from(
    ".airmax",
    {
      yPercent: 100,
      duration: 1,
    },
    "<"
  )
  .from(".nikeshoe", { rotate: -180, yPercent: 100, duration: 1 }, "<");
