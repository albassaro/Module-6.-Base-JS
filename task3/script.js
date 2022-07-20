let i = -1;
const trafficLightEl = document.querySelectorAll('.trafficLight')
trafficLightEl.forEach(bulb=>{
    bulb.addEventListener('click', element)
})
function element() {
    i++;
    let arr = ['red', 'yellow', 'green'];

        if (trafficLightEl[i-1]) 
        {
            trafficLightEl[i - 1].style.backgroundColor = '';
        }

        if (i == arr.length)
        {
            i=0;
        }

        trafficLightEl[i].style.backgroundColor = arr[i];
        
        
}