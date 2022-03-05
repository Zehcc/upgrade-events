/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */

let btnToClick = document.querySelector('.btnToClick');

btnToClick.addEventListener('click', clickButton = () =>{
    console.log('Has pulsado el botón')
})

/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */

let focusInput = document.querySelector('.focus');

focusInput.addEventListener('focus', focusEvent = () =>{
    let focusValue = focusInput.value ;
    console.log(focusValue)
})

/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

let inputValue = document.querySelector('.value');

inputValue.addEventListener('input', inputEvent = ()=>{
    let inputText = inputValue.value ;
    console.log(inputText)
})
    








