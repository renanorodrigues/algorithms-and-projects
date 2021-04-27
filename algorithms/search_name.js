function search_name(names, value){
  let collection_names = names.concat(); 
  collection_names.sort(function(a, b){
    return a.localeCompare(b);
  });

  let lower = 0; 
  let high = collection_names.length - 1;

  while(lower <= high){
    let middle = Math.floor((lower + high) / 2);
    let kick = collection_names[middle];

    if(kick === value){
      console.log(`${collection_names[middle]} está na posição: ${middle}`);
      return middle;
    }else if(kick > value){
      high = middle - 1;
    }else{
      lower = middle + 1;
    }
  }

  return null;
}

names = ['Jair', 'Valdir', 'Carlos', 'Jorge', 'Bia', 'Ana', 'Zélia', 'Manoel', 'Carla'];
search_name(names, 'Manoel')