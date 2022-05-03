const btns = document.querySelectorAll('.btn');
const screens = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

for(let i = 0;i<btns.length;i++){
    btns[i].addEventListener('click', function(){
        let number = btns[i].getAttribute('data-num');
        screens.value += number
    })
}

equalBtn.addEventListener('click', function(){
    if(screens.value === ''){
        alert('Input is empty')
    } else{
    let value = eval(screens.value);
    screens.value = value;
    }
})

clearBtn.addEventListener('click',function(){
    screens.value= ''; 
})