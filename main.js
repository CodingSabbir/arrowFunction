// const  add=function(firstName,lastName) {
//     return firstName+lastName
// }
// console.log( add('Sabbir',' Rahman'));


const data=(id,name,age)=>{
return `id number ${id} name ${name} age ${age}`
}
console.log(data(100,'sabbir',20));


// String method 4 prokar= starstWith,endsWith,includes,repeat


const cuntary="i love my bangladesh";
console.log(cuntary.startsWith('i'));


// const address="mirpur dhaka bangladesh";
// console.log(cuntary.endsWith('bangladesh'));


// const name='md sabbir rahman';
// console.log(name.includes('rohim'));  // false karon ai khane amar name sate mil nei


// repeate akta jinis k bar bar dekano kei repeat bole

const god=' Allah ';
console.log(god.repeat( 10 ));


const year=['1930','1750','2000','2010'];
const crruntAge=year.map((datilse)=>{
return 2022-datilse
});
console.log(crruntAge)



