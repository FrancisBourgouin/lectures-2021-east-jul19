

const roundANumber = (number, roundness) => {
  const factor = 10 ** roundness

  return Math.round(number * factor) / factor
}

console.log(roundANumber(3.14159265358979323846, 4))
console.log(roundANumber("🐔🐔🐔", 4))