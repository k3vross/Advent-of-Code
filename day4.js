const fs = require('fs');
const passports = fs.readFileSync('day4.txt', {encoding: 'utf-8'}).split("\n\n");

function countPassports(passports) {
  let count = 0;
  passports.forEach(passport => {
    if (passport.includes('pid') && passport.includes('byr') && passport.includes('hgt') && passport.includes('iyr') && passport.includes('hcl') && passport.includes('eyr') && passport.includes('ecl')) {
      count++
    }
  })
  return count;
}

console.log(countPassports(passports));