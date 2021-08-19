function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinstring = '' + pin;
    if (pinstring.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }

}


function genaratepin() {
    const pinnumbr = getPin();
    document.getElementById('pin-input').value = pinnumbr;
}

document.getElementById('key-pad').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbres');

    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value='';

        }
        console.log(number);
    }
    else{
        const priviousNumber =  calcInput.value ;
        const newNumber = priviousNumber + number;
        calcInput.value = newNumber;
    }
   



});


function verifyPin(){
const pin = document.getElementById('pin-input').value;
const typedNumbers = document.getElementById('typed-numbres').value;
if (pin == typedNumbers){
    
 const sucess =   document.getElementById('notify-sucess');
 sucess.style.display ='block';
}
else
{
    const failError =   document.getElementById('notify-fail');
    failError.style.display ='block';}

}