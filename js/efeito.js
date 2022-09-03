
function typeWriter (elemento) {
    const textArray = elemento.innerText.split('');
    console.log(textArray)
    elemento.innerText = '';
    
    textArray.forEach((letra, i) => {
        setTimeout(()=> elemento.innerText += letra, 75 * i);
    });
}
const title = document.querySelector('h1');

typeWriter(title);