import WinBox from './winbox.bundle.js';

let sourceCode = '';
const textBody = document.querySelector('.textBody');
const body = document.body;

const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const moreInfo = document.querySelector('#more-info');

anime({
  targets: textBody,
  opacity: () => {
    let random = Math.random() + 0.4;
    if (random > 0.9) {
      return random - 0.3;
    }
    return random;
  },
  loop: true,
  duration: 75,
});

function load_source_code() {
  var request = new XMLHttpRequest();
  request.open('GET', './code.txt');
  request.onreadystatechange = () => {
    sourceCode = request.responseText;
    console.log(sourceCode);
  };
  request.send();
}

load_source_code();

let CHAR_SPEED = 5;
let startIdx = 0;
let endIdx = 0;

document.addEventListener('keydown', () => {
  console.log(textBody.scrollHeight, window.innerHeight);
  textBody.innerText = sourceCode.substring(startIdx, endIdx + CHAR_SPEED);
  endIdx += CHAR_SPEED;
  if (endIdx > sourceCode.length) {
    startIdx = 0;
    endIdx = 0;
  }
  if (textBody.scrollHeight > window.innerHeight) {
    window.scroll(0, textBody.scrollHeight + 20);
  }
});

//Footer Menu

about.addEventListener('onclick', () => {
  new WinBox('About');
});
