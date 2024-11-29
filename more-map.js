const numbers = [ 12, 3, 4, 23, 4];
const doubled = numbers.map(num => num *2);
// console.log(doubled);
const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);

const half = numbers.map(num=> num / 2);
// console.log(half);

const friends = ['faisal', 'haque', 'ayat', 'hosaain'];
const lengths = friends.map(frnd => friends.length)
// console.log(lengths);
const firstLetter = friends.map(friend =>friends[3])
console.log(firstLetter);