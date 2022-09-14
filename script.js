// let success = true;

// let promesse = new Promise(function (resolve, reject) {
//   if (success) {
//     let a = 5;
//     let b = 25;
//     let res = a + b;
//     resolve(res);
//   } else {
//     reject("error de calcul");
//   }
// });

// promesse.then((res) => {
//   console.log(res);
// }) 
// .catch(function(failure){
//   console.log(failure);
// });

 
// function nbrePaire(nombre) {
//   let promesse = new Promise(function (resolve, reject) {
//     if (nombre % 2 == 0) {
//       let result = nombre * nombre;
//       resolve(result);
//     } else {
//       reject("le nombre est impair");
//     }
//   });
//   return promesse;
// }

// let prom = nbrePaire(3);
// prom
//   .then((resultat) => {
//     console.log(resultat);
//   })
//   .catch((erreur) => {
//     console.log(erreur);
//   })


// function sommeTab(n) {
//   let nombres = [2, 10, 30, 4, -1, 0];
//   let somme = 0;
//   // creation de promesse
//   let promesse = new Promise(function (resolve, reject) {
//     // effectuer la somme
//     if (n <= nombres.length && n > 0) {
//       for (let i = 0; i < n; i++) {
//         somme = somme + nombres[i];
//       }
//       resolve(somme);
//     } else {
//       reject("Index of Array out of bounds");
//     }
//   });
//   return promesse;
// }

// let prom = sommeTab(1);
// prom
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   });

let promesse = new Promise(function (resolve, reject){
  let text= "My name is Salma Saidi";
  let regex= /(\w+)(\w+)(\w+)(\w+)(\w+){5,}/;
  
})