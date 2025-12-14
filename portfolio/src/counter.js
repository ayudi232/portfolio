const textArea = document.getElementById('area');
const counterSpan = document.querySelector('span');
const counterPara = document.querySelector('p');
const counter = function(){
   let charCount = textArea.value.length; 
   if (charCount > 49) {
    counterSpan.style.color = 'red';
    counterPara.style.color = 'red';
   } else {
    counterSpan.style.color = 'black';
    counterPara.style.color = 'black';
   }
   counterSpan.textContent = `${charCount}/50`;
}
textArea.addEventListener('input',counter)