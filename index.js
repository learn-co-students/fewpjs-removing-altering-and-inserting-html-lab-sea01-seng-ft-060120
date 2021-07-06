// Write your code here!
let element = document.createElement('div')

document.body.appendChild(element)

let ul = document.createElement('ul')

for (let i = 0; i < 5; i++) {
    let li = document.createElement('li')
    li.innerHTML = (i + 1).toString()
    ul.appendChild(li)
}

element.appendChild(ul)

ul.removeChild(ul.querySelector('li:nth-child(2)'))
ul.remove()

let main = document.getElementById('main')
main.remove()

let newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "is the champion"