const inputText = document.querySelector('input')
const outputText = document.querySelector('#duplicateField')
const buttonclear = document.querySelector('button')


checkInput();

function duplicateText() {
    outputText.textContent = event.target.value;
    checkInput();
}

inputText.addEventListener('input', duplicateText)


buttonclear.addEventListener('click', function () {
        console.log(inputText.value)
        inputText.value = '';
        duplicateText();
})

function checkInput(){
    if (document.querySelector('input').value == '')
    {
        document.querySelector('button').disabled=true;
    }
    else 
    {
        document.querySelector('button').disabled=false;
    }
}