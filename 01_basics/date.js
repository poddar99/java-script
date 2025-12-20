let myDate=new Date()
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON());
console.log(typeof myDate);

const newDate=new Date("2025-12-15")
console.log(newDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDatee = new Date()
console.log(newDatee);
console.log(newDatee.getMonth() );
console.log(newDatee.getDay());
//1=monday


//`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})