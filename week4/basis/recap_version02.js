
// Describe the data
const data = [
  {
    name: 'Business & Communication',
    color: 'rgb(0, 165, 217)',
    owner: {
      name: 'Claire Geraerts',
      initials: 'CGR',
    },
    courses: [
      {
        name: 'IT Business',
        code: 'ITBUS',
        studyPoints: 3,
        contactHours: 6,
      },
      {
        name: 'IT Communication',
        code: 'ITCOM',
        studyPoints: 3,
        contactHours: 6,
      },
      {
        name: 'Digital Marketing',
        code: 'DIGMARK',
        studyPoints: 3,
        contactHours: 6,
      }
    ]
  },
  {
    name: 'Applied Information Technology',
    color: 'rgb(90, 185, 70)',
    owner: {
      name: 'Dieter De Weirdt',
      initials: 'DDW',
    },
    courses: [
      {
        name: 'Computer Systems',
        code: 'CS',
        studyPoints: 3,
        contactHours: 6,
      },
      {
        name: 'Data Management',
        code: 'DATAMAN',
        studyPoints: 6,
        contactHours: 10,
      },
      {
        name: 'Digital Marketing',
        code: 'DIGMARK',
        studyPoints: 3,
        contactHours: 6,
      }
    ]
  }
];

function generateStringForProgrammingLine(programmingLine) {
  let tmpStr = '';
  tmpStr += `${programmingLine.name} (${programmingLine.owner.name} - ${programmingLine.owner.initials})`;
  tmpStr += `
----------------------------------------------------------------
COURSES
----------------------------------------------------------------
${generateStringForCourses(programmingLine.courses)}`
  return tmpStr;
}

function generateStringForCourses(courses) {
  return courses.map((course) => `${course.name} (${course.studyPoints}sp - ${course.contactHours}h/w)`).join('\n..............................................\n');
}

function generateStringForProgrammingLines (data) {
  return `
============================================================
PRORAMMINGLINES
============================================================
${data.map((programmeLine) => {
  return generateStringForProgrammingLine(programmeLine);
}).join('\n\n\n')}
============================================================
  `
};

const output = generateStringForProgrammingLines(data);
console.log(output);