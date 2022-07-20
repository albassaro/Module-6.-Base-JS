document.querySelector('#consoleLog').addEventListener('click', function ()
{
    alert('Метод для вывода сообщений в консоль. \n \np.s.\nпосмотри в консоль');
    console.log('Хэй, ты нажал на слово console.log и я вывел об этом сообщение!')
})

document.querySelector('#alert').addEventListener('click', function ()
{
    alert('Метод предназначенный для отображения информации пользователям через вот такое диалоговое окно с сообщением и кнопкой OK.');

})
document.querySelector('#prompt').addEventListener('click', function ()
{
    prompt('Метод предназначенный для отображения информации пользователям через вот такое диалоговое окно с запросом на ввод текста', 'Здесь пользователем вводится текст');

})