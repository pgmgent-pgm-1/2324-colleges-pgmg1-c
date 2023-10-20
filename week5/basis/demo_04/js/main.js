// Select the element with class name emojis-list
const $emojisListElement = document.querySelector('.emojis-list');
console.log($emojisListElement);

// Transform an array of emojis (object) into an array of strings
// Join all elements together
const $emojisHTML = emojisArr.map((emo) => {
  return `
    <div class="emoji">
      <span class="emoji__symbol">${emo.symbol}</span>
      <span class="emoji__title">${emo.title}</span>
    </div>`
}).join('');

// Set the HTML of the element $emojisListElement
$emojisListElement.innerHTML = $emojisHTML;

// Describe the programmelines
const programmeLinesArr = [
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

// Select the element with the class name programmelines-list
const $programmelinesListElement = document.querySelector('.programmelines-list');
console.log($programmelinesListElement);

function generateHTMLForProgrammeLines (programmeLines) {
  // Transform an array of programmeline (object) into an array of strings
  // Join all elements together
  const programmLineHTML = programmeLines.map((programmeLine) => {
    return `
    <div class="programmeline">
      <h3 style="color:${programmeLine.color};">${programmeLine.name}</h3>
      <div class="courses">
        ${generateHTMLForCourses(programmeLine.courses)}
      </div>
    </div>
    `;
  }).join('');

  return programmLineHTML;
}

function generateHTMLForCourses (courses) {
  // Transform an array of course (object) into an array of strings
  // Join all elements together
  const coursesHTML = courses.map((course) => {
    return `
    <div class="course">
      <h4>${course.name}</h4>
    </div>
    `;
  }).join('');

  return coursesHTML;
}

function initialize () {
  // Set the HTML of the element $programmelinesListElement
  $programmelinesListElement.innerHTML = generateHTMLForProgrammeLines(programmeLinesArr);
}

// Initialize the application
initialize();