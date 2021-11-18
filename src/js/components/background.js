import {refs} from '../refs/refs.js'

refs.pop.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -15 : 15),
    y: Math.random() * 20
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 5000,
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});