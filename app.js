const start = document.getElementById('start');
const h1 = document.getElementById('output');
const stop = document.getElementById('stop');
const count = document.getElementById('count');
const lader = document.querySelector('.loader');


let counter_value;

let counter;

start.addEventListener('click', () => {

    counter_value = count.value;
    
   
   counter = setInterval(() => {
       
        h1.innerHTML = counter_value;
let width = loader(count.value, counter_value);
       lader.style.width = `${width}%`;

      if( width >50 && width <= 100){
        lader.style.backgroundColor = 'green';
      }else if( width >30 && width <= 50){
lader.style.backgroundColor = 'orange';
      }else if(width <=30)
lader.style.backgroundColor = 'red';
      

        if(counter_value == 0){
        clearInterval(counter);
}
        counter_value--;
    } ,1000);
});
