
//import
var moment = require('moment');
/*
console.log("Hola!");

let ahora = moment().format();
console.log("ahora: ",ahora);

let febrero = moment("2020-02-29").isValid();
console.log("febrero",febrero);

let hoy = moment().format("YYYY-mm-d");
console.log("hoy",hoy);*/

moment().locale('es');

let p1 = moment().format("MMMM D YYYY");
console.log("1:",p1);

let p2 = moment("1988-10-19").format('dddd');
console.log("2:",p2);

let p3 = moment("1988-10-19", "YYYYMMDD").fromNow();
console.log("3:",p3);

let p4 = moment().add(258, 'days').calendar(); ;
console.log("4:",p4);

let p5 = moment().add(4, 'week').calendar(); ;
console.log("5:",p5);