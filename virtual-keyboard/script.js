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