const divResult = document.getElementById('result');
const factorialInput = document.getElementById('number_input');
var factorialResponse = [];

factorialInput.addEventListener('change', calcFactorial);

function calcFactorial(e){
  let number = e.target.value;
  const result = new Promise((resolve, reject) => {
    let value = factorial(number);

    if(value){
      resolve(value);
    }else{
      reject(new Error("Impossible for calculation"));
    }
  })
  
  result.then(factorial => renderValue(factorial))
    .catch(error => console.log(error));

}

function factorial(number) {
  if (number == 0 || number == 1)
    return 1;
  if (factorialResponse[number] > 0)
    return factorialResponse[number];
  return factorialResponse[number] = factorial(number-1) * number;
}

function renderValue(factorialValue){
  divResult.textContent = '';
  let pResult = document.createElement('p');
  pResult.innerHTML = "R = " + factorialValue;
  divResult.appendChild(pResult);
}