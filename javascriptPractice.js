// anonymous fn
(function(a,b) { return a + b + 100;});
// anonymous arrow fn
(a, b) => a + b + 100;
// without parameters
() => a + b + 100;
// traditional named fn
function bob(a) { return a + 100; }
// named arrow fn
const bobA = a => a + 100;
console.log(bobA(10));

// example switch syntax look into how this works better
const fruits = ['banana', 'apple', 'banana', 'cherry'];
switch(fruits) {
  case 'banana':
    console.log("hello");
    break;
  default:
    console.log("none");
}

const users = [
  {name: "Brett", isActive: true, age: 21},
  {name: "Tom", isActive: false, age: 24},
  {name: "Chad", isActive: true, age: 18},
  {name: "Harry", isActive: true, age: 30}
]

// example get names out of obj
// noob way
const namesNoob = [];
for (let i = 0; i < users.length; i++) {
  if(users[i].isActive) {
    namesNoob.push(users[i].name);
  }
}
console.log('noob', namesNoob);
// medium way
const namesMed = [];
users.forEach(user => {namesMed.push(user.name)})
console.log('med', namesMed);
//best way
const names = users
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .filter(user => user.isActive)
  .map(user => user.name);
console.log('best and sorted by age descending', names);



// get vowels or numbers or whatever out of a str
// noob way
const findVowelsNoob = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let v = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      v++
    }
  }
  return v;
}
console.log('noob way', findVowelsNoob('aDdgrEttwo')); // 3
// next way
const findVowelsNext = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  // console.log('make str array', str.toLowerCase().split(""))
  return str.toLowerCase().split("").reduce((v, char) => {
    // if (vowels.includes(char)) {
    //   v++
    // }
    // return v;
    return vowels.includes(char) ? v + 1 : v
  }, 0);
}
console.log('next way', findVowelsNext('aDEUI dgrE tt wo')); // 6
// best way remove return
const findVowelsBest = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.toLowerCase().split("").reduce((v, char) => (vowels.includes(char) ? v + 1 : v), 0);
}
console.log('best way', findVowelsBest('aDEE IIoouuuuusdfhessp')); // 13

// reverse a string
const str = "I'm Danielle and I'm trying this out";
const reverseStr = str => str.split(" ").reverse().join(" ");
console.log(reverseStr(str));

// find most frequent str
const str2 = "some letters to turn into an array makesureit's not a spaceby typeingtogethersoItshouldBeT";
const a = str2.toLowerCase().split("");
const mostFrequent = arr => {
  const mapping = arr.reduce((c, e) => {
    c[e] = c[e] ? c[e] + 1 : 1;  
    // console.log('show loop counting each e', c)
    return c;
  }, {});
  // console.log('Object.entries(mapping)', Object.entries(mapping))
  return Object.entries(mapping).reduce(
    // (a, b) => {
    //   console.log('what are a?', a);
    //   console.log('what are b?', b);
    //   return b[1] > a[1] ? b : a
    // }, [null, 0]
    (a, b) => (b[1] > a[1] ? b : a),
    [null,0]
  )[0];
}
console.log('most frequent str/char is', mostFrequent(a)); // t