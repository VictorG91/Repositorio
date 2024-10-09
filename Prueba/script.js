const listadoUsuarios = [
    {
    nombre: "Gabriel Pacheco",
    edad: 34,
    signoZodiaco: "Virgo"
    },
    {
    nombre: "Lola Rocha Tercero",
    edad: 30,
    signoZodiaco: "Capricornio"
    },
    {
    nombre: "Adrián Barcena",
    edad: 25,
    signoZodiaco: "Aries"
    },
    {
    nombre: "Victor",
    edad: 33,
    signoZodiaco: "Leo"
    }
];
   
const soloNombres = [];
listadoUsuarios.forEach(function(usuario){
soloNombres.push(usuario.nombre);
});

console.log(soloNombres);

const soloEdades = [];
listadoUsuarios.forEach((usuario) => soloEdades.push(usuario.edad));

console.log(soloEdades);
   
