const TIMER = 1000;
const doc = document;

function classAdder(balls) {
  balls.value.forEach(ball => ball.classList.add('show'));
};

function classRemover(balls) {
  balls.value.forEach(ball => ball.classList.remove('show'));
};

(function animayion() {
  const colors = [
    { name: "gold", value: doc.querySelectorAll('.gold') },
    { name: "silver", value: doc.querySelectorAll('.silver') },
    { name: "red", value: doc.querySelectorAll('.red') },
    { name: "lime", value: doc.querySelectorAll('.lime') },
    { name: "pink", value: doc.querySelectorAll('.pink') },
    { name: "blue", value: doc.querySelectorAll('.blue') }
  ];
  const len = colors.length;
  function eachCallback (id) {
    setTimeout(function () {
      if (id > 0) {
        if (id === len) {
          console.log('t');
          // start();
        }
        else {
          classRemover(colors[id - 1]);
          classAdder(colors[id])
        }
      }
      else {
        classRemover(colors[len - 1]);
        classAdder(colors[id])
      }

    }, id * TIMER);
  };
  function start() {
    colors.forEach((_color, id) => eachCallback(id));
  }
  start();
})()