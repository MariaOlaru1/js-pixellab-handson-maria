var object = {
  name: 'Maria',
  surname: 'Olaru',
  age: 27,
  petOwner: false,
};

console.warn(
  'Folosind codul din index.html, introdu datele tale si afiseaza in consola numele mic si varsta',
);
console.log(object.name);
console.log(object.age.toString());

console.warn(`
Afiseaza fraza “Ma numesc xxx yyy si am xx ani.” in consola folosind operatorul de concatenare
`);

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' ani.',
);

console.warn(`
Afiseaza anul in care te ai nascut etc etc
`);
console.log((2022 - object.age).toString());
