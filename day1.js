const fs = require('fs');
const years = fs.readFileSync('day1.txt', {encoding: 'utf-8'}).split('\n').map(x => parseInt(x));

const obj = {};

function getYears(years) {
  for (const year of years) {
    if (!obj[year]) {
      obj[2020-year] = year;
    } else {
      return year * obj[year]
    }
  }
}

function threeNumberSum(years, targetSum) {
	let sums = []
  years = years.sort((a,b) => a - b)
	for (let i = 0; i < years.length - 2; i++) {
		let left = i + 1;
		let right = years.length - 1;
		while (left < right) {
			let sum = years[i] + years[left] + years[right]
			if (sum === targetSum) {
				sums.push([years[i], years[left], years[right]]);
				left++;
				right--;
			} else if (sum < targetSum) {
				left++
			} else if (sum > targetSum) {
				right--
			}
		}
	}
	return sums.flat().reduce((a, b) => a * b)
}

console.log(threeNumberSum(years, 2020))