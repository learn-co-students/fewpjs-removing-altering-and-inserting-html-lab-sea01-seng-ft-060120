// Write your code here!
main.remove();
let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';
let new_text = document.querySelector('h1#victory');
new_text.innerHTML = "bob is the champion"