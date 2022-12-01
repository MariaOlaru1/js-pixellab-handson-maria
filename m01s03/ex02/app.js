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
  'Prietenul meu ' +
    person.friends.steven.name +
    ' ' +
    person.friends.steven.surname +
    ' are ' +
    person.friends.steven.age +
    ' ani' +
    '.',
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

console.warn(`Prietena mea Carol Carolson are 29 ani.`);

console.log(
  'Prietena mea ' +
    person.friends.carol.name +
    ' ' +
    person.friends.carol.surname +
    ' are ' +
    person.friends.carol.age +
    ' ani' +
    '.',
);

console.warn(`Prietenii mei sunt: Larry, Carol si Steven.`);

console.log(
  'Prietenii mei sunt: ' +
    person.friends.larry.name +
    ', ' +
    person.friends.carol.name +
    ' si ' +
    person.friends.steven.name +
    '.',
);

console.warn(`Metoda console.log trebuie invocata cu textul "8".`);

console.log((person.friends.carol.age - 21).toString());

console.warn(`Metoda console.log trebuie invocata cu textul "1".`);

console.log((person.friends.steven.age - person.friends.larry.age).toString());

console.warn(`afiseaza nr de caractere al numelui de fam al lui steven`);

console.log(person.friends.steven.surname.length.toString());

console.log((2022 - person.friends.steven.age).toString());

console.warn(`Steven este cu 2 ani mai mare decat Carol.`);

console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.carol.age) +
    ' ani mai mare decat ' +
    person.friends.carol.name +
    '.',
);
