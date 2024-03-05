const cervezasEspanolas = [
  { nombre: 'Estrella Galicia', tipo: 'Lager', alcohol: 5.5 },
  { nombre: 'Mahou Clásica', tipo: 'Pale Lager', alcohol: 5.0 },
  { nombre: 'Alhambra Reserva 1925', tipo: 'Amber Lager', alcohol: 6.4 },
  { nombre: 'San Miguel Especial', tipo: 'Lager', alcohol: 5.4 },
  { nombre: 'Cruzcampo Gran Reserva', tipo: 'Strong Lager', alcohol: 6.4 },
  { nombre: 'Estrella Damm', tipo: 'Pale Lager', alcohol: 5.4 },
  { nombre: 'Moritz', tipo: 'Pale Ale', alcohol: 5.4 },
  { nombre: 'Amstel Radler', tipo: 'Radler', alcohol: 2.0 },
  { nombre: 'La Virgen 360', tipo: 'IPA', alcohol: 6.0 },
  { nombre: 'Damm Inedit', tipo: 'Witbier', alcohol: 4.8 }
];

//Ejercicio 1 : (FILTER) Filtrar cervezas con alcohol mayor a 5.0
const cervezasConAlcoholMayorA5 = cervezasEspanolas.filter(cerveza => cerveza.alcohol > 5.0);
console.log("Cervezas con alcohol mayor a 5.0:  ", cervezasConAlcoholMayorA5);

//Ejercicio 2 : (MAP) Obtener un array con los nombres de todas las cervezas
const nombresCervezas = cervezasEspanolas.map(cerveza => cerveza.nombre);
console.log(nombresCervezas);

//Ejercicio 3: (SOME) Verificar si alguna cerveza es de tipo 'IPA'
const esIPAPresente = cervezasEspanolas.some(cerveza => cerveza.tipo === 'IPA');
const mensaje = esIPAPresente ? 'Sí, hay cervezas de tipo IPA.' : 'No hay cervezas de tipo IPA.';
console.log(mensaje);

//Ejercicio 4: (SORT) Ordenar las cervezas por su grado de alcohol de mayor a menor
cervezasEspanolas.sort((cervezaA, cervezaB) => cervezaB.alcohol - cervezaA.alcohol);
console.log(cervezasEspanolas);

//Ejercicio 5: (FILTER) Contar cuántas cervezas son de tipo 'Lager'
const cervezasLager = cervezasEspanolas.filter(cerveza => cerveza.tipo === 'Lager');
const cantidadCervezasLager = cervezasLager.length;
console.log(`Hay ${cantidadCervezasLager} cervezas de tipo 'Lager'.`);

//Ejercicio 6: (FIND) Encontrar la cerveza con nombre 'Estrella Damm'
const cervezaEstrellaDamm = cervezasEspanolas.find(cerveza => cerveza.nombre === 'Estrella Damm');
console.log(cervezaEstrellaDamm);

//Ejercicio 7: (FILTER) Obtener un array con las cervezas que tienen un nombre con más de 10 caracteres
const cervezasNombreLargo = cervezasEspanolas.filter(cerveza => cerveza.nombre.length > 10);
console.log(cervezasNombreLargo);

//Ejercicio 8: (MAP) Crear un nuevo array con el nombre y tipo de cada cerveza
const nombreYTipoCervezas = cervezasEspanolas.map(cerveza => ({ nombre: cerveza.nombre, tipo: cerveza.tipo }));
console.log(nombreYTipoCervezas);