// Make an alert
window.alert('Greetings Earthlings');

// Make a prompt => ask for input
const name = window.prompt('Plaese enter your name.', 'ex.: Philippe Al-Timide');
console.log(name);

// Make a confirm dialog
const approved = window.confirm('Are you sure you want to delete the article with id 65?');
if (approved) {
  console.log('Deleted the article with it 65.');
} else {
  console.log('I do not want to delete the article with id 65.');
}

// Console dialogs
const msgInfo = 'This is just information';
const msgWarning = 'Try not to use the var keyword';
const msgError = 'Can\'t fetch the data from the server.';
console.info(msgInfo);
console.warn(msgWarning);
console.error(msgError);