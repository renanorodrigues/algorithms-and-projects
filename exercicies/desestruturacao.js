// Criando variável e acessando o valor da propriedade pelo mesmo nome
const company = {
  name_fantasy: "Hospital A",
  code: 123,
  role: "Admin"
}

const { name_fantasy } = company;
console.log(name_fantasy);

// Lendo somente atributos especificos por parametros para função
function apresentation({name_fantasy, code}){
  console.log(`${name_fantasy} has code ${code}`)
}

apresentation(company);

// Criando object e definindo mais um atributo
const new_company = {...company, function: "Sold medicines"};
console.log(new_company);

// Passando todos os valores para as variáveis
const [numbers, ...numbers2] = [1, 2, 3, 4, 5];
console.log(numbers, numbers2);