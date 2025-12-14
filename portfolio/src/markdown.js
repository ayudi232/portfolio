const input = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');
function convertmarkdown(markdownText) {
    let html = markdownText;
    html = html.replace(/^\#\#\#(.*)$/gm,'<h3>$1</h3>');
    html = html.replace(/^\#\#(.*)$/gm,'<h2>$1</h2>');
    html = html.replace(/^\#(.*)$/gm,'<h1>$1</h1>');
    html = html.replace(/(\*\*|_ _)([\s\S]*?)\1/g,'<strong>$2</strong>');
    html = html.replace(/(\*|_)(.*?)\1/g,'<em>$2</em>');
    html = html.replace(/\!\[(.*)\]\((.*?)\)/g,'<img alt ="$1" src="$2">');
    html = html.replace(/\[(.*?)\]\((.*?)\)/g,'<a href = "$2">$1</a>');
    html = html.replace(/^\>(.*?)$/gm,'<blockquote>$1</blockquote>');
    return html
}
function updateOutput(){
    let userText = input.value;
    let convertedHtml = convertmarkdown(userText);
    htmlOutput.textContent = convertedHtml;
    preview.innerHTML = convertedHtml;
}
input.addEventListener('input',updateOutput);
updateOutput()
































// function convertmarkdown(markdownText) {
//     let html = markdownText;
//     html = html.replace(/\*(.*?)\*/g,'<em>$1</em>');
//     html = html.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
//     html = html.replace(/^#(.*)$/gm,'<h1>$1</h1>');
//     html = html.replace(/^##(.*)$/gm,'<h2>$1</h2>');
//     html = 
//     return html
// }
// function updateOutput() {
//     let userText = input.value;
//     let convertedHtml = convertmarkdown(userText);
//     htmlOutput.textContent = convertedHtml;
//     preview.innerHTML = convertedHtml;
// }
// input.addEventListener('input',updateOutput);
// updateOutput()