const arry=[
    {namee:"aasim",age:24,class:"BSIT"},
    {namee:"Maheen",age:23,class:"BSCS"},
]
// console.log(arry.map(user=>{{user.namee}}))
document.write(arry.map(user=>{<li>{user.name}</li>}));