const start = document.getElementById('start');
const stop = document.getElementById('stop');
const timer = document.getElementById('timer');
const commentArea = document.getElementById('commentArea');
const preCommentArea = document.getElementById('preCommentArea');
const resultImage = document.getElementById('resultImage');
const modal = document.querySelector('.modal');

const comments = [
  '「クリスティアーノ・ロナウドレベル」です',
  '「鉄板レベル」です',
  '「豆腐レベル」です',
  '「わたあめレベル」です',
];

const resultImages = [
  'ronaldo.jpg',
  'teppan.jpg',
  'tofu.jpg',
  'wataame.jpg',
];

function judgeTime(result){
  if(result >= "01:00:000"){
    comment = comments[0];
    resultImage.src = resultImages[0];
  }else if(result >= "00:40:000"){
    comment = comments[1];
    resultImage.src = resultImages[1];
  }else if(result >= "00:20:000"){
    comment = comments[2];
    resultImage.src = resultImages[2];
  }else{
    comment = comments[3];
    resultImage.src = resultImages[3];
  };
};

const difference = 0;
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
  start.style.display = 'none';
  stop.style.display = 'block';
});

stop.addEventListener('click', function(){
  clearTimeout(timerId);
  timeToAdd += Date.now() - startTime;
  judgeTime(timer.textContent);
  modal.style.left = '0px'
  preCommentArea.textContent = 'あなたの腹筋力は...';
  commentArea.textContent = comment;
})
