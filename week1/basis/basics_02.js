// Vergelijkingsoperatoren (En. comparison operators)
let x = y = z = 0;
x = 3;
y = 6;
z = 2;
let v;
v = x > y; // false
console.log(v);
v = z < x; // true
v = x == y; // false
v = z >= 2; // true
v = y <= 4; // false
v = z != x; // true
z = '3';
v = x != z;
console.log(v);
v = x !== z;
console.log(v);
v = y === '6';
console.log(v);

// Logische operatoren (En. logical operators)
// AND => &&, OR => ||, NOT => !
x = true;
y = false;
/*
AND
true AND true => true
true AND false => false
false AND false => false
*/
v = x && y; // false
/*
OR
true OR true => true
true OR false => true
false OR false => false
*/
v = x || y; // true
v = !x; // false
// Combinatie van meer dan twee condities
v = x && !y && x === 3;