const ulAddress = document.getElementById("list_address");
const spanError = document.getElementById("span_error");
const cepInput = document.getElementById("cep");

cepInput.addEventListener('change', validateZipcode);

function validateZipcode(cep){
  let zipcode = cep.target.value.replace(/\D/g, '');
  const regexCEP = /^[0-9]{8}$/;

  if(regexCEP.test(zipcode)){
    spanError.style.visibility = "hidden";
    requestApiCorreios(zipcode);
  }else{
    renderErrorZipcode("Invalid format of zipcode")
  }
  ulAddress.textContent = '';
}

function requestApiCorreios(zipcode){
  const urlApi = `https://viacep.com.br/ws/${zipcode}/json`;

  fetch(urlApi, { mode: 'cors' })
    .then(response => {
      if(!response.ok) return new Error('Requisition failed');

      if(response.status == 404) return new Error('Zipcode not found');

      return response.json();
    })
    .then(data => {
      if(data.erro) {
        renderErrorZipcode("Zipcode not found")
      } else {
        fillInputsAddress(data);
      }
    })
    .catch(function(error){
      renderErrorZipcode("Error: " + error.message);
  })

  
}

function fillInputsAddress(addressValues){
  const values = Object.keys(addressValues);

  values.map(key => {
    let li = document.createElement("li");
    li.classList.add("li-address");
    li.innerHTML = `${key}: ${addressValues[key]}`;
    ulAddress.appendChild(li);
  })
}

function renderErrorZipcode(msgError){
  spanError.innerText = msgError;
  spanError.style.visibility = "visible";
}
