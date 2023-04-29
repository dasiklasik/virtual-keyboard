const englishKeyboardData = {
  h1Text: 'Hello! It\'s virtual keyboard for macOS',
  languageChangeInstruction: 'Press RU button to change language to Russian',
  keyboard: {
    firstLine: [
      {value: '§', secondValue: '±', type: 'symbol'},
      {value: '1', secondValue: '!', type: 'number'},
      {value: '2', secondValue: '@', type: 'number'},
      {value: '3', secondValue: '#', type: 'number'},
      {value: '4', secondValue: '$', type: 'number'},
      {value: '5', secondValue: '%', type: 'number'},
      {value: '6', secondValue: '^', type: 'number'},
      {value: '7', secondValue: '&', type: 'number'},
      {value: '8', secondValue: '*', type: 'number'},
      {value: '9', secondValue: '(', type: 'number'},
      {value: '0', secondValue: ')', type: 'number'},
      {value: '-', secondValue: '_', type: 'symbol'},
      {value: '=', secondValue: '+', type: 'symbol'},
      {value: 'backspace', secondValue: null, type: 'backspace'},
    ],
    secondLine: [
      {value: 'tab', secondValue: null, type: 'tab'},
      {value: 'q', secondValue: null, type: 'letter'},
      {value: 'w', secondValue: null, type: 'letter'},
      {value: 'e', secondValue: null, type: 'letter'},
      {value: 'r', secondValue: null, type: 'letter'},
      {value: 't', secondValue: null, type: 'letter'},
      {value: 'y', secondValue: null, type: 'letter'},
      {value: 'u', secondValue: null, type: 'letter'},
      {value: 'i', secondValue: null, type: 'letter'},
      {value: 'o', secondValue: null, type: 'letter'},
      {value: 'p', secondValue: null, type: 'letter'},
      {value: '[', secondValue: '{', type: 'symbol'},
      {value: ']', secondValue: '}', type: 'symbol'},
      {value: 'enter', secondValue: null, type: 'enter'},
    ],
    thirdLine: [
      {value: 'capslock', secondValue: null, type: 'capslock'},
      {value: 'a', secondValue: null, type: 'letter'},
      {value: 's', secondValue: null, type: 'letter'},
      {value: 'd', secondValue: null, type: 'letter'},
      {value: 'f', secondValue: null, type: 'letter'},
      {value: 'g', secondValue: null, type: 'letter'},
      {value: 'h', secondValue: null, type: 'letter'},
      {value: 'j', secondValue: null, type: 'letter'},
      {value: 'k', secondValue: null, type: 'letter'},
      {value: 'l', secondValue: null, type: 'letter'},
      {value: ';', secondValue: ':', type: 'symbol'},
      {value: '\'', secondValue: '"', type: 'symbol'},
      {value: '\\', secondValue: '|', type: 'symbol'},
    ],
    fourthLine: [
      {value: 'shift', secondValue: null, type: 'shift'},
      {value: '`', secondValue: '~', type: 'symbol'},
      {value: 'z', secondValue: null, type: 'letter'},
      {value: 'x', secondValue: null, type: 'letter'},
      {value: 'c', secondValue: null, type: 'letter'},
      {value: 'v', secondValue: null, type: 'letter'},
      {value: 'b', secondValue: null, type: 'letter'},
      {value: 'n', secondValue: null, type: 'letter'},
      {value: 'm', secondValue: null, type: 'letter'},
      {value: ',', secondValue: '<', type: 'symbol'},
      {value: '.', secondValue: '>', type: 'symbol'},
      {value: '/', secondValue: '?', type: 'symbol'},
      {value: 'shift', secondValue: null, type: 'shift'},
    ],
    fifthLine: [
      {value: 'RU', secondValue: null, type: 'RU'},
      {value: 'command', secondValue: null, type: 'command'},
      {value: 'space', secondValue: null, type: 'space'},
      {value: 'command', secondValue: null, type: 'command'},
      {value: 'arrows', secondValue: null, type: 'arrows'},
    ],
  },
};

const russianKeyboardData = {
  h1Text: 'Привет! Это виртуальная клавиатура для macOS',
  languageChangeInstruction: 'Нажми на кнопку EN, чтобы сменить язык на английский',
  keyboard: {
    firstLine: [
      {value: '>', secondValue: '<', type: 'symbol'},
      {value: '1', secondValue: '!', type: 'number'},
      {value: '2', secondValue: '"', type: 'number'},
      {value: '3', secondValue: '№', type: 'number'},
      {value: '4', secondValue: '%', type: 'number'},
      {value: '5', secondValue: ':', type: 'number'},
      {value: '6', secondValue: ',', type: 'number'},
      {value: '7', secondValue: '.', type: 'number'},
      {value: '8', secondValue: ';', type: 'number'},
      {value: '9', secondValue: '(', type: 'number'},
      {value: '0', secondValue: ')', type: 'number'},
      {value: '-', secondValue: '_', type: 'symbol'},
      {value: '=', secondValue: '+', type: 'symbol'},
      {value: 'backspace', secondValue: null, type: 'backspace'},
    ],
    secondLine: [
      {value: 'tab', secondValue: null, type: 'tab'},
      {value: 'й', secondValue: null, type: 'letter'},
      {value: 'ц', secondValue: null, type: 'letter'},
      {value: 'у', secondValue: null, type: 'letter'},
      {value: 'к', secondValue: null, type: 'letter'},
      {value: 'е', secondValue: null, type: 'letter'},
      {value: 'н', secondValue: null, type: 'letter'},
      {value: 'г', secondValue: null, type: 'letter'},
      {value: 'ш', secondValue: null, type: 'letter'},
      {value: 'щ', secondValue: null, type: 'letter'},
      {value: 'з', secondValue: null, type: 'letter'},
      {value: 'х', secondValue: null, type: 'letter'},
      {value: 'ъ', secondValue: null, type: 'letter'},
      {value: 'enter', secondValue: null, type: 'enter'},
    ],
    thirdLine: [
      {value: 'capslock', secondValue: null, type: 'capslock'},
      {value: 'ф', secondValue: null, type: 'letter'},
      {value: 'ы', secondValue: null, type: 'letter'},
      {value: 'в', secondValue: null, type: 'letter'},
      {value: 'а', secondValue: null, type: 'letter'},
      {value: 'п', secondValue: null, type: 'letter'},
      {value: 'р', secondValue: null, type: 'letter'},
      {value: 'о', secondValue: null, type: 'letter'},
      {value: 'л', secondValue: null, type: 'letter'},
      {value: 'д', secondValue: null, type: 'letter'},
      {value: 'ж', secondValue: null, type: 'letter'},
      {value: 'э', secondValue: null, type: 'letter'},
      {value: 'ё', secondValue: null, type: 'letter'},
    ],
    fourthLine: [
      {value: 'shift', secondValue: null, type: 'shift'},
      {value: ']', secondValue: '[', type: 'symbol'},
      {value: 'я', secondValue: null, type: 'letter'},
      {value: 'ч', secondValue: null, type: 'letter'},
      {value: 'с', secondValue: null, type: 'letter'},
      {value: 'м', secondValue: null, type: 'letter'},
      {value: 'и', secondValue: null, type: 'letter'},
      {value: 'т', secondValue: null, type: 'letter'},
      {value: 'ь', secondValue: null, type: 'letter'},
      {value: 'б', secondValue: null, type: 'letter'},
      {value: 'ю', secondValue: null, type: 'letter'},
      {value: '/', secondValue: '?', type: 'symbol'},
      {value: 'shift', secondValue: null, type: 'shift'},
    ],
    fifthLine: [
      {value: 'EN', secondValue: null, type: 'EN'},
      {value: 'command', secondValue: null, type: 'command'},
      {value: 'space', secondValue: null, type: 'space'},
      {value: 'command', secondValue: null, type: 'command'},
      {value: 'arrows', secondValue: null, type: 'arrows'},
    ],
  },
};

let isShiftActive = false;
let isCapslockActive = false;

let isEnglish;

if (localStorage.getItem('language')) {
  isEnglish = localStorage.getItem('language') === 'english';
} else {
  isEnglish = false;
  localStorage.setItem('language', 'russian');
}

function transitionendHandler(i) {
  i.classList.remove('key_pressed');
}

function changeValues() {
  const keys = document.querySelectorAll('.key');

  keys.forEach((i) => {
    const key = i;
    if (isShiftActive) {
      if (key.childNodes.length === 2) {
        key.childNodes[0].style.display = 'none';
        key.classList.add('key_active-shift');
      } else if (key.dataset.type === 'letter') {
        key.childNodes[0].innerHTML = key.childNodes[0].innerHTML.toUpperCase();
      }
    } else if (isCapslockActive) {
      if (key.dataset.type === 'letter') {
        key.childNodes[0].innerHTML = key.childNodes[0].innerHTML.toUpperCase();
      }
    } else if (key.childNodes.length === 2) {
      key.childNodes[0].style.display = '';
      key.classList.remove('key_active-shift');
    } else if (key.dataset.type === 'letter') {
      key.childNodes[0].innerHTML = key.childNodes[0].innerHTML.toLowerCase();
    }
  });
}

function createArrows() {
  const arrowsWrapper = document.createElement('div');
  arrowsWrapper.classList.add('arrows');

  const firstLine = document.createElement('div');
  firstLine.classList.add('arrows__line');
  const upKey = createKey({
    value: 'arrowup', secondValue: null, type: 'arrow', image: './assets/up.png',
  });
  firstLine.appendChild(upKey);
  arrowsWrapper.appendChild(firstLine);

  const secondLine = document.createElement('div');
  secondLine.classList.add('arrows__line');
  const leftKey = createKey({
    value: 'arrowleft', secondValue: null, type: 'arrow', image: './assets/left.png',
  });
  secondLine.appendChild(leftKey);
  const downKey = createKey({
    value: 'arrowdown', secondValue: null, type: 'arrow', image: './assets/down.png',
  });
  secondLine.appendChild(downKey);
  const rightKey = createKey({
    value: 'arrowright', secondValue: null, type: 'arrow', image: './assets/right.png',
  });
  secondLine.appendChild(rightKey);
  arrowsWrapper.appendChild(secondLine);

  return arrowsWrapper;
}

function createKeyboard(keyboardData) {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  document.querySelector('.wrapper').appendChild(keyboard);

  const firstLine = document.createElement('div');
  firstLine.classList.add('keyboard__line');
  for (let i = 0; i < keyboardData.firstLine.length; i += 1) {
    const elem = createKey(keyboardData.firstLine[i]);
    firstLine.appendChild(elem);
  }
  keyboard.appendChild(firstLine);

  const secondLine = document.createElement('div');
  secondLine.classList.add('keyboard__line');
  for (let i = 0; i < keyboardData.secondLine.length; i += 1) {
    const elem = createKey(keyboardData.secondLine[i]);
    secondLine.appendChild(elem);
  }
  keyboard.appendChild(secondLine);

  const thirdLine = document.createElement('div');
  thirdLine.classList.add('keyboard__line');
  for (let i = 0; i < keyboardData.thirdLine.length; i += 1) {
    const elem = createKey(keyboardData.thirdLine[i]);
    thirdLine.appendChild(elem);
  }
  keyboard.appendChild(thirdLine);

  const fourthLine = document.createElement('div');
  fourthLine.classList.add('keyboard__line');

  for (let i = 0; i < keyboardData.fourthLine.length; i += 1) {
    const elem = createKey(keyboardData.fourthLine[i]);
    fourthLine.appendChild(elem);
  }

  keyboard.appendChild(fourthLine);

  const fifthLine = document.createElement('div');
  fifthLine.classList.add('keyboard__line');

  for (let i = 0; i < keyboardData.fifthLine.length; i += 1) {
    const item = keyboardData.fifthLine[i];
    if (item.type !== 'arrows') {
      const elem = createKey(item);
      fifthLine.appendChild(elem);
    } else {
      const elem = createArrows();
      fifthLine.appendChild(elem);
    }
  }

  keyboard.appendChild(fifthLine);
}

function createHeader(text, instruction) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  document.body.appendChild(wrapper);

  const header = document.createElement('header');
  wrapper.appendChild(header);

  const h1 = document.createElement('h1');
  h1.innerHTML = text;
  header.appendChild(h1);

  const p = document.createElement('p');
  p.classList.add('description');
  p.innerHTML = instruction;
  wrapper.appendChild(p);

  const textBlock = document.createElement('textarea');
  textBlock.classList.add('text-block');
  textBlock.innerHTML = '';
  textBlock.disabled = true;

  wrapper.appendChild(textBlock);
}

function initApp() {
  if (document.querySelector('.wrapper')) {
    document.querySelector('.wrapper').remove();
  }
  const data = isEnglish ? englishKeyboardData : russianKeyboardData;
  createHeader(data.h1Text, data.languageChangeInstruction);
  createKeyboard(data.keyboard);
}

function clickKeyHandler(e) {
  const value = e.target.dataset.value
    ? e.target.dataset.value : e.target.parentElement.dataset.value;
  const secondValue = e.target.dataset.secondValue
    ? e.target.dataset.secondValue : e.target.parentElement.dataset.secondValue;
  const type = e.target.dataset.type ? e.target.dataset.type : e.target.parentElement.dataset.type;

  printKey(value, type, secondValue);
}

function createKey(keyData) {
  const key = document.createElement('div');
  key.classList.add('key');
  key.dataset.type = keyData.type;
  key.addEventListener('click', clickKeyHandler);
  key.addEventListener('transitionend', () => transitionendHandler(key));

  if (keyData.image) {
    const image = document.createElement('img');
    image.classList.add('key__icon');
    image.src = keyData.image;
    key.appendChild(image);
    key.dataset.value = keyData.value;
    return key;
  }

  const firstValue = document.createElement('span');
  firstValue.innerHTML = keyData.value;
  firstValue.classList.add('key__first-value');
  key.appendChild(firstValue);
  key.dataset.value = keyData.value;

  if (keyData.secondValue !== null) {
    const secondValue = document.createElement('span');
    secondValue.innerHTML = keyData.secondValue;
    secondValue.classList.add('key__second-value');
    key.appendChild(secondValue);
    key.dataset.secondValue = keyData.secondValue;
  }

  return key;
}

function printKey(value, type, secondValue) {
  const textBlock = document.querySelector('.text-block');
  let innerValue = value;

  switch (value) {
    case 'shift':
      isShiftActive = !isShiftActive;
      document.querySelectorAll('.key[data-type="shift"]').forEach((i) => {
        i.classList.toggle('key_active');
      });
      changeValues();
      return;
    case 'tab':
      innerValue = '\t';
      break;
    case 'enter':
      innerValue = '\n';
      break;
    case 'capslock':
      isCapslockActive = !isCapslockActive;
      document.querySelector('.key[data-type="capslock"]').classList.toggle('key_active');
      changeValues();
      return;
    case 'backspace':
      textBlock.innerHTML = textBlock.innerHTML.slice(0, textBlock.innerHTML.length - 1);
      return;
    case 'EN':
    case 'RU':
      isEnglish = !isEnglish;
      localStorage.setItem('language', isEnglish ? 'english' : 'russian');
      initApp();
      return;
    case 'arrowup':
      innerValue = '&uarr;';
      break;
    case 'arrowdown':
      innerValue = '&darr;';
      break;
    case 'arrowleft':
      innerValue = '&larr;';
      break;
    case 'arrowright':
      innerValue = '&rarr;';
      break;
    case 'command':
      return;
    case 'space':
      innerValue = ' ';
      break;
    default:
      break;
  }

  if (type === 'letter' && isShiftActive) {
    innerValue = innerValue.toUpperCase();
    isShiftActive = false;
    document.querySelectorAll('.key[data-type="shift"]').forEach((i) => {
      i.classList.remove('key_active');
    });
    changeValues();
  } else if (type === 'letter' && isCapslockActive) {
    innerValue = innerValue.toUpperCase();
  } else if ((type === 'symbol' || type === 'number') && isShiftActive) {
    innerValue = secondValue;
  }
  textBlock.innerHTML += innerValue;
}

function printTypedLetter(e) {
  const value = e.key.toLowerCase() === 'meta' ? 'command' : e.key.toLowerCase();
  const secondValue = e.target.dataset.secondValue
    ? e.target.dataset.secondValue : e.target.parentElement.dataset.secondValue;
  let type;

  for (const key in englishKeyboardData.keyboard) {
    for (let i = 0; i < englishKeyboardData.keyboard[key].length; i += 1) {
      const item = englishKeyboardData.keyboard[key][i];
      if (item.value === e.key.toLowerCase()) {
        type = item.type;
      }
    }
  }

  printKey(value, type, secondValue);
}

function highlightKey(e) {

  console.log(e.key.toLowerCase())

  switch (e.key.toLowerCase()) {
    case 'arrowup':
      document.querySelector('.key[data-value="arrowup"]').classList.add('key_pressed');
      break;
    case 'arrowleft':
      document.querySelector('.key[data-value="arrowleft"]').classList.add('key_pressed');
      break;
    case 'arrowright':
      document.querySelector('.key[data-value="arrowright"]').classList.add('key_pressed');
      break;
    case 'arrowdown':
      document.querySelector('.key[data-value="arrowdown"]').classList.add('key_pressed');
    case ' ':
      document.querySelector('.key[data-value="space"]').classList.add('key_pressed');
      break;
    case 'meta':
      document.querySelectorAll('.key[data-value="command"]').forEach((i) => {
        i.classList.add('key_pressed');
      })
      break;
    default: break;
  }

  const lines = document.querySelectorAll('.keyboard__line');
  lines.forEach((line) => {
    line.childNodes.forEach((child) => {
      if (child.dataset.value === e.key.toLowerCase()) {
        child.classList.add('key_pressed');
      }
    });
  });

  printTypedLetter(e);
}

window.addEventListener('keydown', highlightKey);

initApp();
