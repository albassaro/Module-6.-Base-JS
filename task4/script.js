const linkText = document.querySelector('a')

linkText.addEventListener('click', function(){
    newText = prompt('Введите новый текст для ссылки')
    linkText.textContent = newText
})

linkText.preventDefault()