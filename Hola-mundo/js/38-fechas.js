"use strict"

var fecha = new Date();

var year =fecha.getFullYear();
var mes =fecha.getMonth();
var dia=fecha.getDate();
var hora=fecha.getHours();
var minutos=fecha.getMinutes();

var textoHora = `
    El año es: ${year}
    EL mes es: ${mes} //empieza desde el mes 0
    El dia es: ${dia}
    La hora es: ${hora}
    El minuto es: ${minutos}
`;

console.log(textoHora);

//Match JS
console.log(Math.ceil(Math.random()*10000)); //Math. random busca un numero al azar , math ceil redondea al mas alto