var months = ['Jan', 'Feb', 'Mar', 'Apr', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// Not possible. As 6 is type of number.
// months.push(6);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var years = [2020, 2021, 2022];
years.splice(0, 2018, 2019);
console.log(years);
