const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

let startTime;
let elapsedTime = 0;
let timerId;
let timeToAdd = 0;

function updateTimeText(){
  let m = Math.floor(elapsedTime / 60000);
  let s = Math.floor(elapsedTime % 60000 / 1000);
  let ms = elapsedTime % 1000;
  
  m = ('0' + m).slice(-2);
  s = ('0' + s).slice(-2);
  ms = ('0' + ms).slice(-3);
  
  timer.textContent = m + ':' + s + ':' + ms;
};

function countUp(){
  timerId = setTimeout(function(){
    elapsedTime = Date.now() - startTime + timeToAdd;
    updateTimeText();
    countUp();
  },10);
}

start.addEventListener('click', function(){
  startTime = Date.now();
  countUp();
});

stop.addEventListener('click', function(){
  clearTimeout(timerId);
  timeToAdd += Date.now() - startTime;
})

reset.addEventListener('click', ()=>{
  elapsedTime = 0;
  timeToAdd = 0;
  updateTimeText();
})

