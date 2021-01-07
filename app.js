// const arry=[
//     {namee:"aasim",age:24,class:"BSIT"},
//     {namee:"Maheen",age:23,class:"BSCS"},
// ]
// // console.log(arry.map(user=>{{user.namee}}))
// document.write(arry.map(user=>{<li>{user.name}</li>}));
// let namee="aasim";
// let caste ="soomro";
// let designation="CS Student"
// let sentence=`${namee} ${caste} is ${designation}`;
// console.log(sentence);
// console.log(arry.map(arr=>{arr.age}))
let aasim = ["Muhammad Aasim", "Soomro", 24];

let [Name, Caste, Age] = aasim;
document.write(
  `My Name is ${Name} & My Caste is ${Caste} & My Age is ${Age} \n`
);
aasim.push(" pushed item in rear");
document.write(aasim);
let pval = aasim.pop();
document.write(pval);
document.write(aasim);
aasim.unshift(" Namee");
document.write(aasim);
let sval = aasim.shift();
document.write(sval + "\n");

let asim = {
  name: "Muhammad Asim",
  caste: "Soomro",
};

let { name, caste } = asim;
console.log(`my name is ${name} ${caste}`);

for (var i = 0; i < aasim.length; i++) {
  console.log(`${i} ${aasim[i]}`);
}

for (index in aasim) document.write(aasim[index]);

let keys = Object.keys(asim);
// console.log(keys);
let Values = Object.values(asim);
// console.log(Values);

let obj1 = {
  name: "Muhammad Aasim",
  caste: "Soomro",
};
let obj2 = {
  age:23,
  city: "Shikarpur",
};
let obj3 = {
  job: "Developer",
  Uni: "SAUS",
};

let newObjects=Object.assign(obj1,obj2,obj3);
console.log(newObjects);

const myfunction=param => console.log("Hello "+param);
myfunction("Maheen");