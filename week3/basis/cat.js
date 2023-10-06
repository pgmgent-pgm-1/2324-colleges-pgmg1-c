/*
Programming 1: Essentials
Week: 3
Date: 06-10-2023
=========================
Cats
*/
// Create a new cat with the object literal notation
const cat = {
  age: 2,
  color: 'ginger',
  gender: 'female',
  amountOfLegs: 4,
  race: 'Fergal',
  lives: 9,
  eat(amountOfFood) {
    if(amountOfFood > 300) {
      console.log('BEEEUGH');
    } else  {
      console.log('MJAMMIE');
    }
  },
  jump(distance) {
    if (distance > 1) {
      if (this.lives - 1 > 0) {
        this.lives--;
        console.log('You lost another life')
      } else {
        console.log('You are Dead Meat :)')
      } 
    } else {
      console.log('Ik ben een konijn op steriods')
    }
  }
};
cat.age = 3;
console.log(cat);
const nLives = cat.lives;
cat.eat(350);
cat.jump(4);
cat.jump(4);
cat.jump(4);
cat.jump(4);
cat.jump(4);
cat.jump(4);
cat.jump(4);
cat.jump(4);
cat.jump(4);