/*
Schrijf een JavaScript programma waarin student informatie wordt beschreven d.m.v. een object initalizer

(opens new window). Een student bevat:

    familienaam (string)
    voornaam (string)
    geslachtscode (number)
    geboortedatum (number t.o.v. 1970)
    cursussen (array van objecten)
        cursus (object)
            naam (string)
            docenten (array van strings)

Print alle eigenschappen naar de console om het volgende resultaat te genereren:

======================================================
|                STUDENT INFORMATION                 |
======================================================
PERSONAL
======================================================
Name: Olivier Pieters
Gender: Male
Day of birth: Fri Dec 12 1975
======================================================
COURSES
======================================================
Course: Computer Systems
Lecturers: Adriaan Glibert, Claire Geeraerts
------------------------------------------------
Course: Web Design
Lecturers: Wachem Huyge, Evelien Rutsaert
------------------------------------------------
Course: Programming
Lecturers: Philippe De Pauw - Waterschoot, Michael Vanderpoorten
======================================================

Stappenplan:

    Maak een bestand student_information.js aan in de reeds aangemaakt folder week-3.
    Schrijf een functie genaamd generateStringForStudent dat:
        1 argument bevat: het student object
        geeft de student informatie terug als string
    Schrijf een functie genaamd generateStringForGender dat:
        1 argument bevat: de genderCode (number)
        geeft leesbare formaat terug op basis van genderCode, bijv. 2 geeft Gender: Female
    Schrijf een functie genaamd generateStringForCourses dat:
        1 argument bevat: de courses (array)
        geeft leesbare formaat terug van de cursussen
    Schrijf een functie genaamd generateStringForLecturers dat:
        1 argument bevat: de lecturers (array)
        geeft leesbare formaat terug van de docenten
*/
const student = {
  lastName: 'Al-Timide',
  firstName: 'Tycho',
  genderCode: 1,
  dayOfBirth: 1083139354000,
  courses: [
    {
      name: 'Computer Systems',
      lecturers: [
        'Adriaan Glibert',
        'Claire Geraerts',
      ]
    },
    {
      name: 'Web Technology',
      lecturers: [
        'Evelien Rutsaert',
        'Wachem Huyge',
        'Mathieu Spillebeen',
      ]
    },
    {
      name: 'Programming 1: Essentials',
      lecturers: [
        'Michael Vanderpoorten',
        'Philippe De Pauw - Waterschoot',
      ]
    }
  ]
};

function generateStringForGender (genderCode) {
  let tmpStr = 'MIJNGESLACHTISMIJNGEHEIM';
  switch (genderCode) {
    case 1: tmpStr = 'Male'; break;
    case 2: tmpStr = 'Female'; break;
    default: tmpStr = 'Not known'; break;
  }
  return tmpStr;
}

function generateStringForLecturers (lecturers) {
  let tmpStr = `
Lecturers: ${lecturers.map((lecturer) => lecturer).join(', ')}`;
  return tmpStr;
}

function generateStringForCourses (courses) {
  let tmpStr = `
======================================================
COURSES
======================================================
${courses.map((course, index) => `Course: ${course.name}${generateStringForLecturers(course.lecturers)}`).join('\n------------------------------------------------\n')}
======================================================
`;
  return tmpStr;
}

function generateStringForStudent (student) {
  return `
======================================================
|                STUDENT INFORMATION                 |
======================================================
PERSONAL
======================================================
Name: ${student.firstName} ${student.lastName}
Gender: ${generateStringForGender(student.genderCode)}
Day of birth: Fri Dec 12 1975${ generateStringForCourses(student.courses)}
`
}

console.log(generateStringForStudent(student));