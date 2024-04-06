const operateButton = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clr');
const delButton = document.querySelector('.del');
const pierwszaLiczba = document.querySelector('.dzialanie p');
const equalsButton = document.querySelector('.rownanie');
const CurrentNumber = document.querySelector('.currentNumber');
const matZnak = document.querySelector('.znak');
//Liczby
const liczby = document.querySelectorAll('.liczba');

let result = '';

function wyswietlLiczby() {
    CurrentNumber.innerHTML += this.textContent;
}

function showResult() {
    //jesli wprowadzimy jedna liczbe to zwroci nam funkcje
    if (pierwszaLiczba.innerHTML === '' || CurrentNumber.innerHTML === '') return;

    //Funkcja Number sluzy do konwersji z typu string na typ int 

    let liczba1 = Number(pierwszaLiczba.innerHTML);
    let liczba2 = Number(CurrentNumber.innerHTML);
    let operator = matZnak.innerHTML;

    switch (operator) {
        case '+':
            result = liczba1 + liczba2;
            break;
        case '-':
            result = liczba1 - liczba2;
            break;
        case '*':
            result = liczba1 * liczba2;
            break;
        case '/':
            result = liczba1 / liczba2;
            break;
        case '^2':
            result = liczba1 ** liczba2;
            break;
    }
    CurrentNumber.innerHTML = result;
    pierwszaLiczba.innerHTML = '';
    matZnak.innerHTML = '';

}

function clearScreen() {
    result = '';
    CurrentNumber.innerHTML = '';
    pierwszaLiczba.innerHTML = '';
    matZnak.innerHTML = '';
}
function operateFunction() {
    if (CurrentNumber.innerHTML === '' && this.textContent === '-') {
        CurrentNumber.innerHTML = '-'
        return;
    }
    else if (CurrentNumber.innerHTML === '') {
        return;

    }
    if (matZnak !== '') {
        showResult();
    }

    pierwszaLiczba.innerHTML = CurrentNumber.innerHTML;
    matZnak.innerHTML = this.textContent;
    CurrentNumber.innerHTML = '';

    //CurrentNumber.innerHTML += this.textContent;
}
function removeFunction() {

}
//Nasluchiwanie
operateButton.forEach((btn) => btn.addEventListener('click', operateFunction))
clearButton.addEventListener('click', clearScreen);
equalsButton.addEventListener('click', showResult);
//delButton.addEventListener('click', removeFunction);
//odejmij.addEventListener('click', operateFunction);
liczby.forEach((przycisk) => {
    przycisk.addEventListener('click', wyswietlLiczby)
})
