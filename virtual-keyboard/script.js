const englishKeyboardData = {
    h1Text: 'Hello! It\'s virtual keyboard for macOS',
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
            {value: 'fn', secondValue: null, type: 'fn'},
            {value: 'command', secondValue: null, type: 'command'},
            {value: 'space', secondValue: null, type: 'space'},
            {value: 'command', secondValue: null, type: 'command'},
            {value: 'arrows', secondValue: null, type: 'arrows'},
        ]
    }
}

const russianKeyboardData = {
    h1Text: 'Привет! Это виртуальная клавиатура для macOS',
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
            {value: 'fn', secondValue: null, type: 'fn'},
            {value: 'command', secondValue: null, type: 'command'},
            {value: 'space', secondValue: null, type: 'space'},
            {value: 'command', secondValue: null, type: 'command'},
            {value: 'arrows', secondValue: null, type: 'arrows'},
        ],
    }
}

let isShiftActive = false
let isControlActive = false
let isOptionActive = false
let isCommandActive = false
let isCapslockActive = false

let isEnglish = false

function initApp() {
    let data = isEnglish ? englishKeyboardData : russianKeyboardData
    createHeader(data.h1Text)
    createKeyboard(data.keyboard)
}


function createHeader(text) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    document.body.appendChild(wrapper)

    const header = document.createElement('header')
    wrapper.appendChild(header)

    const h1 = document.createElement('h1')
    h1.innerHTML = text
    header.appendChild(h1)

    const textBlock = document.createElement('textarea')
    textBlock.classList.add('text-block')
    textBlock.innerHTML = ''
    textBlock.disabled = true

    wrapper.appendChild(textBlock)
}

function createKeyboard(keyboardData) {

    const keyboard = document.createElement('div')
    keyboard.classList.add('keyboard')
    document.querySelector('.wrapper').appendChild(keyboard)

    const firstLine = document.createElement('div')
    firstLine.classList.add('keyboard__line')
    keyboardData.firstLine.map(i => {
        const elem = createKey(i)
        firstLine.appendChild(elem)
    })
    keyboard.appendChild(firstLine)

    const secondLine = document.createElement('div')
    secondLine.classList.add('keyboard__line')
    keyboardData.secondLine.map(i => {
        const elem = createKey(i)
        secondLine.appendChild(elem)
    })
    keyboard.appendChild(secondLine)


    const thirdLine = document.createElement('div')
    thirdLine.classList.add('keyboard__line')
    keyboardData.thirdLine.map(i => {
        const elem = createKey(i)
        thirdLine.appendChild(elem)
    })
    keyboard.appendChild(thirdLine)

    const fourthLine = document.createElement('div')
    fourthLine.classList.add('keyboard__line')
    keyboardData.fourthLine.map(i => {
        const elem = createKey(i)
        fourthLine.appendChild(elem)
    })
    keyboard.appendChild(fourthLine)

    const fifthLine = document.createElement('div')
    fifthLine.classList.add('keyboard__line')
    keyboardData.fifthLine.map(i => {
        if (i.type !== 'arrows') {
            const elem = createKey(i)
            fifthLine.appendChild(elem)
        } else {
            const elem = createArrows()
            fifthLine.appendChild(elem)
        }
    })
    keyboard.appendChild(fifthLine)
}

function createKey(keyData) {
    const key = document.createElement('div')
    key.classList.add('key')
    key.dataset.type = keyData.type
    key.addEventListener('click', clickKeyHandler)
    key.addEventListener('transitionend', () => transitionendHandler(key))

    const firstValue = document.createElement('span')
    firstValue.innerHTML = keyData.value
    firstValue.classList.add('key__first-value')
    key.appendChild(firstValue)
    key.dataset.value = keyData.value

    if (keyData.secondValue !== null) {
        const secondValue = document.createElement('span')
        secondValue.innerHTML = keyData.secondValue
        secondValue.classList.add('key__second-value')
        key.appendChild(secondValue)
        key.dataset.secondValue = keyData.secondValue
    }

    return key
}

function createArrows() {
    const arrowsWrapper = document.createElement('div')
    arrowsWrapper.classList.add('arrows')

    const firstLine = document.createElement('div')
    firstLine.classList.add('arrows__line')
    const upKey = createKey({value: 'up', secondValue: null, type: 'arrow'})
    firstLine.appendChild(upKey)

    const secondLine = document.createElement('div')
    secondLine.classList.add('arrows__line')
    const leftKey = createKey({value: 'left', secondValue: null, type: 'arrow'})
    secondLine.appendChild(leftKey)
    const downKey = createKey({value: 'down', secondValue: null, type: 'arrow'})
    secondLine.appendChild(downKey)
    const rightKey = createKey({value: 'right', secondValue: null, type: 'arrow'})
    secondLine.appendChild(rightKey)

    return arrowsWrapper
}

function printKey(value, type) {
    const textBlock = document.querySelector('.text-block')

    switch (value) {
        case 'shift':
            isShiftActive = !isShiftActive
            document.querySelector('.key[data-type="shift"]').classList.toggle('key_active')
            return;
        case 'tab':
            value = '\t'
            break;
        case 'enter':
            value = '\n'
            break;
        case 'capslock':
            isCapslockActive = !isCapslockActive
            document.querySelector('.key[data-type="capslock"]').classList.toggle('key_active')
            return;
        case 'backspace':
            textBlock.innerHTML = textBlock.innerHTML.slice(0, textBlock.innerHTML.length - 1)
            return;
        case 'fn':
            return;
        case 'control':
            return;
        case 'option':
            return;
        case 'command':
            return;
        case 'space':
            value = ' '
            break;
    }

    if(type === 'letter' && isShiftActive) {
        value = value.toUpperCase()
        isShiftActive = false
        document.querySelector('.key[data-type="shift"]').classList.remove('key_active')
    } else if(type === 'letter' && isCapslockActive) {
        value = value.toUpperCase()
    } else if (type === 'symbol' || type === 'number' && isShiftActive) {
        value = e.target.dataset.secondValue ? e.target.dataset.secondValue : e.target.parentElement.dataset.secondValue
    }
    textBlock.innerHTML = textBlock.innerHTML + value
}

function clickKeyHandler(e) {
    let value = e.target.dataset.value ? e.target.dataset.value : e.target.parentElement.dataset.value
    const type = e.target.dataset.type ? e.target.dataset.type : e.target.parentElement.dataset.type

    printKey(value, type)
}

function highlightKey(e) {
    const lines = document.querySelectorAll('.keyboard__line')
    lines.forEach(line => {
        line.childNodes.forEach(child => {
            if(child.dataset.value === e.key.toLowerCase()) {
                child.classList.add('key_pressed')
            }
        })
    })

    printTypedLetter(e)
}

function printTypedLetter(e) {
    debugger
    const value = e.key.toLowerCase()
    let type;

    for (let key in englishKeyboardData.keyboard) {
        englishKeyboardData.keyboard[key].map(i => i.value === e.key.toLowerCase() ? type = i.type : null)
    }

    printKey(value, type)
}

window.addEventListener('keydown', highlightKey)
document.querySelectorAll('.key').forEach(i => {

})

function transitionendHandler(i) {
    i.classList.remove('key_pressed')
}

initApp()