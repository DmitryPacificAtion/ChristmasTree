const TIMER = 1000;
const doc = document;

const classRemover = ball => ball.classList.remove('show');
const classAdder = ball => ball.classList.add('show');

(function() {
  const colors = [
    { name: "gold", value: doc.querySelectorAll('.gold') },
    { name: "silver", value: doc.querySelectorAll('.silver') },
    { name: "red", value: doc.querySelectorAll('.red') },
    { name: "lime", value: doc.querySelectorAll('.lime') },
    { name: "pink", value: doc.querySelectorAll('.pink') },
    { name: "blue", value: doc.querySelectorAll('.blue') }
  ];
  const len = colors.length;
  const infiniteTimeout = TIMER * len;

  const garlandSwitch = (prevBalls, nextBalls) => {
    prevBalls.forEach(classRemover);
    nextBalls.forEach(classAdder);
  };

  const infiniteTimer = (id) => {
    const prevBalls = id > 0 ? colors[id - 1].value : colors[len - 1].value;
    setInterval(garlandSwitch, infiniteTimeout, prevBalls, colors[id].value);
  };

  function start() {
    colors.forEach((_color, id) => setTimeout(infiniteTimer, (id) * TIMER, id));
  }
  start();
})();
