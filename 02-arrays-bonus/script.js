const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

console.log(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [] //sostituisco null con [] per indicargli che è un'array vuoto

for (let i = teachers.length - 1; i >= 0; i--) {// ciclo al rovescio teachers
  reversedTeachers.push(teachers[i])
}

console.log(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  const thisTeacher = teachers[i]

  if (thisTeacher.length >= 5) {
    longNames.push(thisTeacher)
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf("Ed"), 1)
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf("Fabio") !== -1;
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = null; // modifico const in let in quanto devo modificare la variabile 

for (i = 0; i < teachers.length; i++) {
  thisTeacher = teachers[i];

  if (i === 0) {
    teachersString = thisTeacher + ","
  } else if (i < (teachers.length - 1)) {
    teachersString = teachersString + thisTeacher + ","
  } else {
    teachersString = teachersString + thisTeacher
  }
}

console.log(teachersString);

/* metodo usando la funzione concat()
for (i = 0; i < teachers.length; i++) {
  thisTeacher = teachers[i];
  if (i === 0) {
    teachersString = thisTeacher.concat(",")
  } else if (i < (teachers.length - 1)) {
    teachersString = teachersString.concat(thisTeacher, ",")
  } else {
    teachersString = teachersString.concat(thisTeacher)
  }
} 
*/