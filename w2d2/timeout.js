const francisFridge = ['🍟', '🥟', '🥔', '🎂', '☕']

const decentDelay = list => list.length * 1000 + 1500

const listFridgeContent = fridge => {
  fridge.forEach((ingredient, index) => {
    setTimeout(() => {
      const sentence = `There is some ${ingredient}`
      console.log(sentence)
    }, 1000 * index)
  })

}

const listTheFridgeOfFrancisButThatsALongFunctionName = () => listFridgeContent(francisFridge)
// pause for 2 seconds

// Somebody asks for the fridge
// Start your walk and start to whistle
console.log('🎶🎶')
setTimeout(() => {

  // Start to list the ingredients, slowly because partner has difficulty hearing
  listFridgeContent(francisFridge)
  // Ingredient (0s)
  // Ingredient (1s)
  // Ingredient (2s)
  // Ingredient (3s)
  // Ingredient (4s)

  // Let's make a meal (5s + 1.5s)
  setTimeout(() => console.log(`Let's make a meal!`), decentDelay(francisFridge))
}, 1500)



