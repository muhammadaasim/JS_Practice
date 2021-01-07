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
document.write(`My Name is ${Name} & My Caste is ${Caste} & My Age is ${Age} \n`);
aasim.push(" pushed item in rear")
document.write(aasim);
let pval=aasim.pop();
document.write(pval);
document.write(aasim);
aasim.unshift(" Namee")
document.write(aasim);
let sval=aasim.shift();
document.write(sval+"\n");

let asim={
name:"Muhammad Asim",
caste:"Soomro"
}

let {name,caste}=asim;
console.log(`my name is ${name} ${caste}`);


