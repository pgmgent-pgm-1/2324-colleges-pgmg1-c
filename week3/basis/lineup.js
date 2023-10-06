/*
Programming 1: Essentials
Week: 3
Date: 06-10-2023
=========================
Lineup
*/
const lineup =  [
  {
    band: {
      name: 'Billie Eilish'
    },
    stage: 'Main Stage',
    from: 1692997200000,
    to: 1693002600000,
    socials: {
      instagram: 'https://www.instagram.com/billieeilish/',
      spotify: 'https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH'
    } 
  }
];
let insta = lineup[0].socials.instagram;
console.log(insta);


function convertTimeMillisToTime (timeMillis) {
  // Convert timemillis to readable date and time
  const date = new Date(timeMillis);
  return (date.toTimeString().split(' ')[0].split(':').slice(0, 2).join(':'));
}
let time = convertTimeMillisToTime(lineup[0].from);
console.log(time);
time = convertTimeMillisToTime(lineup[0].to);
console.log(time);