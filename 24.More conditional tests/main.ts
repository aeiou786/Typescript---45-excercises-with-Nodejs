let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20
let cities = ['london','sialkot','lahore'];

// test for equality and inequality
console.log('is apple is eqaul to  apple');
console.log(apple == apple);

// test for inequality
console.log('is apple is not equal to apple');
console.log(apple != apple);

// using lowercase 
console.log('is APPLE is equal to apple after converting to lower case');
console.log(upperCaseApple.toLowerCase() =="apple");

console.log('is APPLE is not equal to apple after converting tolowercase');
console.log(upperCaseApple.toLowerCase() != apple);

// using numerical values to eq && ineq less then greater then 
console.log('is ten is equal to twenty');
console.log(ten == twenty);

// inequality
console.log('is ten is not equal to twenty ');
console.log(ten != twenty);

// greater then
console.log('is ten is greater then twenty');
console.log(ten > twenty);

// less then 
console.log('is ten is less then twenty');
console.log(ten < twenty);

// greater then or equal
console.log('is ten is greater then or equal to twenty');
console.log(ten >= twenty);

// less then or equal
console.log('is ten is less then or equal to twenty');
console.log(ten <= twenty);

// tests using && (and) or operators
console.log('twenty is not equal to ten and twenty is greater then ten');
console.log(twenty != ten && twenty > ten);

console.log('twenty is not equal to ten and twenty is greater then ten');
console.log(twenty != ten && twenty > 30);

// using || (or)
console.log('20 is greater then 50 or 20 is equal to 20');
console.log(20 > 50 || 20 == 20);

console.log('20 is greater then 50 or 20 is equal to 20');
console.log(20 > 50 || 20 != 20);

// test weither include  in array
console.log('is london is include in my array')
console.log(cities.includes('london'));

// test weither is not include in my array
console.log('is london is not include in my array');
console.log(!cities.includes('london'));

