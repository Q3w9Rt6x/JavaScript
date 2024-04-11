var element = document.getElementById('foo');
element.innerHTML = 'こんばんは';
var element = document.querySelector('.weather');
element.style.color = "#ff7c89";
var element = document.createElement("p");
var text = document.createTextNode("いいお天気ですね");
document.body.appendChild(element).appendChild(text);