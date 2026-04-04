document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollSmoother.create({
    wrapper: "#wrapper",
    content: "#content",
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1,
  });

  const cards = gsap.utils.toArray(".card");
  const cardContainer = document.querySelector(".cards-container");
  const scrollContainer = document.querySelector(".scroll-section");

  gsap.set(cards[0], { opacity: 1 });

  const lastCard = cards[cards.length - 1];

  //   const totalScroll =
  //     cardContainer.scrollWidth +
  //     (window.innerWidth - lastCard.offsetWidth) / 2 -
  //     window.innerWidth / 2 +
  //     500;

  const totalScroll = cardContainer.scrollWidth - window.innerWidth + 50;

  const scrollTrack = gsap.to(".scroll-section .cards-container", {
    x: -1 * totalScroll,
    duration: totalScroll,
    ease: "none",
    scrollTrigger: {
      trigger: ".scroll-section",
      start: "top top",
      end: () => `+=${totalScroll}`,
      scrub: true,
      pin: true,
    },
  });

  cards.forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      scrollTrigger: {
        trigger: card,
        start: () => `left 95%`,
        end: () => `center 90%`,
        scrub: true,
        containerAnimation: scrollTrack,
      },
    });
  });
});

// -------------------------------Alternative approach without ScrollSmoother, using only ScrollTrigger for horizontal scrolling and opacity animation
// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//   const smoother = ScrollSmoother.create({
//     wrapper: "#wrapper",
//     content: "#content",
//     smooth: 1.5,
//     effects: true,
//     smoothTouch: 0.1,
//   });

//   const cards = gsap.utils.toArray(".card");
//   const cardContainer = document.querySelector(".cards-container");
//   const scrollContainer = document.querySelector(".scroll-section");

//   gsap.set(cards[0], { opacity: 1 });

//   const totalScroll = cardContainer.scrollWidth - window.innerWidth + 500;

//   const scrollTrack = gsap.to(cardContainer, {
//     x: -totalScroll,
//     ease: "none",
//     scrollTrigger: {
//       trigger: scrollContainer,
//       start: "top top", // ← no scroller:"body"
//       end: () => `+=${totalScroll}`,
//       scrub: true,
//       pin: true,
//       anticipatePin: 1, // ← helps prevent jump on pin
//     },
//   });

//   cards.forEach((card) => {
//     gsap.to(card, {
//       opacity: 1,
//       scrollTrigger: {
//         trigger: card,
//         start: "left 95%",
//         end: "center 90%",
//         scrub: true,
//         containerAnimation: scrollTrack,
//       },
//     });
//   });
// });
