// Dados do BD
const users = [
  {
    "id": 1,
    "email": "dburdon0@1und1.de",
    "genero": "Agender",
    "nome": "Debor Burdon"
  }, {
    "id": 2,
    "email": "ngally1@irs.gov",
    "genero": "Female",
    "nome": "Nolie Gally"
  }, {
    "id": 3,
    "email": "pbonner2@yelp.com",
    "genero": "Non-binary",
    "nome": "Pietra Bonner"
  }, {
    "id": 4,
    "email": "tcaltun3@discovery.com",
    "genero": "Genderfluid",
    "nome": "Trenna Caltun"
  }, {
    "id": 5,
    "email": "hmillichap4@weebly.com",
    "genero": "Genderqueer",
    "nome": "Harriett Millichap"
  }, {
    "id": 6,
    "email": "sparton5@umich.edu",
    "genero": "Agender",
    "nome": "Stefan Parton"
  }, {
    "id": 7,
    "email": "ccunio6@theatlantic.com",
    "genero": "Genderfluid",
    "nome": "Charla Cunio"
  }, {
    "id": 8,
    "email": "ejefford7@wp.com",
    "genero": "Male",
    "nome": "Elenore Jefford"
  }, {
    "id": 9,
    "email": "mcayley8@wired.com",
    "genero": "Male",
    "nome": "Mycah Cayley"
  }, {
    "id": 10,
    "email": "bdoodson9@time.com",
    "genero": "Polygender",
    "nome": "Byran Doodson"
  }
]

let tableBody = document.querySelector("tbody")
tableBody.innerHTML = "<tr>"

for(let user of users){
  tableBody.innerHTML +=  `<td> ${user.id} </td> <td> ${user.nome} </td> <td> ${user.email} </td> <td> ${user.genero} </td>`
}

tableBody.innerHTML += "</tr>"