const bill = 430

const tip =
 bill >= 50 && bill <= 300
  ? console.log(`Your tip is$ ${bill * 0.15} the total bill is ${bill * 1.15}`)
  : console.log(`Your tip is$ ${bill * 0.2} the total bill is ${bill * 1.2}`)

const airlineNo = {
 num: 2024,
}

const mutat = (no) => {
 console.log(`${no.num * 2}`)
}

mutat(airlineNo)
mutat(airlineNo)

console.log(airlineNo.num)
