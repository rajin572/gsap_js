gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// const smoother = ScrollSmoother.create({
//   wrapper: "body",
//   content: "#main",
//   smooth: 2,
//   normalizeScroll: true,
//   ignoreMobileResize: true,
//   preventDefault: true,
// });

const section = document.getElementsByClassName("image-section");
const container = document.getElementsByClassName("image-container");

console.log(section[0]?.scrollWidth);
