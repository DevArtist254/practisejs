console.log("Hello world")

/**
 * Formula for data analysis
 * BMI = mass / (height * height)
 *
 * Data for Body Mass index
 *
 * Marks
 * Weights 78 kg, 1.69 m
 * Weights 95 kg, 1.88 m
 *
 * John
 * Weights 92 kg, 1.95 m
 * Weights 85 kg, 1.76 m
 *
 */
const mark = [
 {
  weight: 78,
  height: 1.69,
 },
 {
  weight: 95,
  height: 1.88,
 },
]

const john = [
 {
  weight: 92,
  height: 1.92,
 },
 {
  weight: 82,
  height: 1.76,
 },
]

let johnBMI
let markBMI

//Display their data
for (let i = 0; i < john.length; i++) {
 const el = john[i]

 console.log(`john's test data ${el.weight}kg ${el.height}m`)

 //BMI = mass / (height * height)
 johnBMI = el.weight / (el.height * el.height)

 //console.log(`john's BMI ${johnBMI}`)
}

for (let i = 0; i < mark.length; i++) {
 const el = mark[i]

 console.log(`mark's test data ${el.weight}kg ${el.height}m`)

 //BMI = mass / (height * height)
 markBMI = el.weight / (el.height * el.height)

 //  console.log(`mark's BMI ${markBMI}`)
}

if (markBMI > johnBMI) {
 console.log(`Mark has a higher BMI`)
} else {
 console.log(`John has a higher BMI`)
}
