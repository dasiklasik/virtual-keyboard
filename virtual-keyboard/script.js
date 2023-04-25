const englishKeyboardData = {
    h1Text: 'Hello! It\'s virtual keyboard for macOS',
    keyboard: {
        firstLine: [
            {value: '§', secondValue: '±'},
            {value: '1', secondValue: '!'},
            {value: '2', secondValue: '@'},
            {value: '3', secondValue: '#'},
            {value: '4', secondValue: '$'},
            {value: '5', secondValue: '%'},
            {value: '6', secondValue: '^'},
            {value: '7', secondValue: '&'},
            {value: '8', secondValue: '*'},
            {value: '9', secondValue: '('},
            {value: '0', secondValue: ')'},
            {value: '-', secondValue: '_'},
            {value: '=', secondValue: '+'},
            {value: 'Backspace', secondValue: 'Delete'}
        ],
        secondLine: [
            {value: 'Tab', secondValue: null},
            {value: 'q', secondValue: null},
            {value: 'w', secondValue: null},
            {value: 'e', secondValue: null},
            {value: 'r', secondValue: null},
            {value: 't', secondValue: null},
            {value: 'y', secondValue: null},
            {value: 'u', secondValue: null},
            {value: 'i', secondValue: null},
            {value: 'o', secondValue: null},
            {value: 'p', secondValue: null},
            {value: '[', secondValue: '{'},
            {value: ']', secondValue: '}'},
            {value: 'Enter', secondValue: null},
        ],
        thirdLine: [
            {value: 'CapsLock', secondValue: null},
            {value: 'a', secondValue: null},
            {value: 's', secondValue: null},
            {value: 'd', secondValue: null},
            {value: 'f', secondValue: null},
            {value: 'g', secondValue: null},
            {value: 'h', secondValue: null},
            {value: 'j', secondValue: null},
            {value: 'k', secondValue: null},
            {value: 'l', secondValue: null},
            {value: ';', secondValue: ':'},
            {value: '\'', secondValue: '"'},
            {value: '\\', secondValue: '|'},
        ],
        fourthLine: [
            {value: 'Shift', secondValue: null},
            {value: '`', secondValue: '~'},
            {value: 'z', secondValue: null},
            {value: 'x', secondValue: null},
            {value: 'c', secondValue: null},
            {value: 'v', secondValue: null},
            {value: 'b', secondValue: null},
            {value: 'n', secondValue: null},
            {value: 'm', secondValue: null},
            {value: ',', secondValue: '<'},
            {value: '.', secondValue: '>'},
            {value: '/', secondValue: '?'},
            {value: 'Shift', secondValue: null},
        ],
        fifthLine: [
            {value: 'fn', secondValue: null},
            {value: 'control', secondValue: null},
            {value: 'option', secondValue: null},
            {value: 'command', secondValue: null},
            {value: 'Space', secondValue: null},
            {value: 'command', secondValue: null},
            {value: 'option', secondValue: null},
            {value: 'arrows', secondValue: null},
        ]
    }
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

createHeader()