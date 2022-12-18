/**
 * gymnastics teams the winner with the highest average score wins a trophy!
 *
 * Dolphins 96, 108 and 89
 * Koalas 88, 91 and 110
 */

//test:1 There is no team that won

// const dolphins = [96, 108, 89]
// const koalas = [88, 91, 110]

//test:2 The koalas win the cup

// const dolphins = [97, 112, 101]
// const koalas = [109, 95, 123]

//test:3 Both teams draw

const dolphins = [97, 112, 101]
const koalas = [109, 95, 106]

//#refactoring

const sumAv = (arr) => {
 const sumAvForTheTeam = Math.round(
  arr.reduce((acc, cur) => acc + cur) / arr.length
 )

 return sumAvForTheTeam
}

// Total score
// const sumAvForDolphins = Math.round(
//  dolphins.reduce((acc, cur) => acc + cur) / dolphins.length
// )

console.log(`Dolphins average score ${sumAv(dolphins)}`)

// const sumAvForKoalas = Math.round(
//  koalas.reduce((acc, cur) => acc + cur) / koalas.length
// )

console.log(`Koalas average score ${sumAv(koalas)}`)

if ((sumAv(koalas) > sumAv(dolphins)) & (sumAv(koalas) > 100)) {
 console.log(`The koalas win the cup`)
} else if ((sumAv(dolphins) > sumAv(koalas)) & (sumAv(dolphins) > 100)) {
 console.log(`The dolphins win the cup`)
} else if ((sumAv(dolphins) > 100) & (sumAv(koalas) > 100)) {
 console.log(`Both teams draw with a score more than 100`)
} else {
 console.log(`There is no team that won`)
}
