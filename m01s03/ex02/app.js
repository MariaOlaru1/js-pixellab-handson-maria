var person = {
  name: 'Maria',
  surname: 'Olaru',
  age: 27,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: true,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.warn(`Afiseaza varsta prietenei Carol`);

console.log(person.friends.carol.age.toString());

console.warn(`Folosind anul curent calculeaza si afiseaza anul de nastere al lui Larry
`);

console.log((2022 - person.friends.larry.age).toString());

console.warn(`
Caslculeaza diferenta si afiseaza propozitia 'steva are`);

console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.larry.age) +
    ' ani mai mare decat ' +
    person.friends.larry.name +
    '.',
);

console.warn(`
Afiseaza : prietenul meu are x ani folosind doar proproetatile`);

console.log(
  `Prietenul meu${person.friends.steven.name} ${person.friends.steven.surname} are ${person.friends.steven.age} ani.`,
);

console.warn(`
afiseaza prietenii mei sunt steven carol si larry`);
console.log(
  'Prietenii mei sunt: ' +
    person.friends.steven.name +
    ', ' +
    person.friends.carol.name +
    ' si ' +
    person.friends.larry.name +
    '.',
);

console.warn(`afiseaza nr de caractere al numelui de fam al lui steven`);
console.log(person.friends.steven.surname.length.toString());
