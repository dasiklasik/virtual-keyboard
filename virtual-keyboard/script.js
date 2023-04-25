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
            {value: 'backspace', secondValue: null, type: 'backspace'}
        ],
        secondLine: [
            {value: 'Tab', secondValue: null, type: 'tab'},
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
            {value: 'Enter', secondValue: null, type: 'enter'},
        ],
        thirdLine: [
            {value: 'CapsLock', secondValue: null, type: 'capslock'},
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
            {value: 'Shift', secondValue: null, type: 'shift'},
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
            {value: 'Shift', secondValue: null, type: 'shift'},
        ],
        fifthLine: [
            {value: 'fn', secondValue: null, type: 'fn'},
            {value: 'control', secondValue: null, type: 'control'},
            {value: 'option', secondValue: null, type: 'option'},
            {value: 'command', secondValue: null, type: 'command'},
            {value: 'Space', secondValue: null, type: 'space'},
            {value: 'command', secondValue: null, type: 'command'},
            {value: 'option', secondValue: null, type: 'option'},
            {value: 'arrows', secondValue: null, type: 'arrows'},
        ]
    }
}

function initApp() {
    createHeader()
    createKeyboard(englishKeyboardData.keyboard)
}


function createHeader() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    document.body.appendChild(wrapper)

    const header = document.createElement('header')
    wrapper.appendChild(header)

    const h1 = document.createElement('h1')
    h1.innerHTML = 'Hello! It\'s virtual keyboard for macOS'
    header.appendChild(h1)
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
        if(i.type !== 'arrows') {
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

    const firstValue = document.createElement('span')
    firstValue.innerHTML = keyData.value
    firstValue.classList.add('key__first-value')
    key.appendChild(firstValue)

    if(keyData.secondValue !== null) {
        const secondValue = document.createElement('span')
        secondValue.innerHTML = keyData.secondValue
        secondValue.classList.add('key__second-value')
        key.appendChild(secondValue)
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

initApp()