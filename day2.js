const fs = require('fs');
const passwords = fs.readFileSync('day2.txt', {encoding: 'utf-8'}).split('\n');


function getCount(passwords) {
  let count = 0;
  for (const password of passwords) {
    const obj = {};
    let text = password.split(': ')
    let rules = text[0].split(' ')[0];
    let low = parseInt(rules.split('-')[0])
    let high = parseInt(rules.split('-')[1])
    let letter = text[0].split(' ')[1];
    let entry = text[1]
    if ((entry[low-1] === letter && entry[high-1] !== letter) || (entry[low-1] !== letter && entry[high-1] === letter)) {
      count++
    }
  }
  return count;
}

console.log(getCount(passwords))