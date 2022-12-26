const resturants = {
 name: "classtic",
 location: "nairobi",
}

const {name = [], location} = resturants

const xyz = {
 x: {
  a: 1,
  b: 2,
 },
}

const {
 x: {a, b},
} = xyz

console.log(a)

const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8]

console.log([...arr1, ...arr2])

/**
 * Works with all iterables
 * like arrays, strings, maps & sets
 *
 * This is a form of data struture
 *
 */

const [s, c, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(others)

//fn

const add = function (...numbers) {
 console.log(numbers)
}

add(1, 2, 3, 4, 5, 5)
