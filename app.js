const inputNome = document.querySelector('#inputNome');
const inputAlt = document.querySelector('#inputAlt');
const inputPeso = document.querySelector('#inputPeso');
const btn = document.querySelector('#btnCalc');
const res = document.querySelector('#res');


btn.addEventListener('click', calcular);

function calcular(){
    const nome = inputNome  .value;
    const altura = Number(inputAlt.value);
    const peso = Number(inputPeso.value);
    const imc = peso/(altura * altura);
    const imc2 = imc.toFixed(2);

    if (nome == '' || altura == '' || peso == ''){
        alert('Favor, complete os campos abaixo!')
    } else if (imc < 18.5) {
        res.textContent = nome + ', seu IMC é ' + imc2 + ' e você está abaixo do peso!'
    } else if (imc == 18.5 || imc <= 24.9) {
        res.innerHTML = nome + ', seu IMC é ' + imc2 + ' e você está com peso normal!'
    } else if (imc == 25 || imc <= 29.9) {
        res.innerHTML = nome + ', seu IMC é ' + imc2 + ' e você está com excesso de peso!'
    } else if (imc == 30 || imc <= 34.9) {
        res.innerHTML = nome + ', seu IMC é ' + imc2 + ' e você está com obesidade classe I!'
    } else if (imc == 35 || imc <= 39.9) {
        res.innerHTML = nome + ', seu IMC é ' + imc2 + ' e você está com obesidade classe II!'
    } else {
        res.innerHTML = nome + ', seu IMC é ' + imc2 + ' e você está com obesidade classe III!'
    };
};

inputPeso.addEventListener('keyup', (e) =>{
    if(e.key === 'Enter') {
        e.preventDefault();
        calcular();
    }
})