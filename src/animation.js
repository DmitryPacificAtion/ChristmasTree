const TIMER = 4000;
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
  function setRepeatedTimer(id) {
    
    const timerId = setInterval(() => {
      console.log(id);

      // classRemover(colors[id - 1]);
      // classAdder(colors[id]);
    }, TIMER);
  }

  function start() {
    function timeoutCallback(__color, id) {
      setTimeout(setRepeatedTimer.bind(this, id), id * TIMER)
    } 
    colors.forEach(timeoutCallback);
  };
  start();
})()