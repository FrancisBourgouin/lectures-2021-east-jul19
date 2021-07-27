
// Water drop torture thingy.
const drip = () => console.log("drip")

drip()

const dripInterval = setInterval(drip, 1000)

setTimeout(() => clearInterval(dripInterval), 5000)
