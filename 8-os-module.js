// Modules
// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimun)

const names = require('./4-names')
// const {john, peter} = require('./4-names') destructuring is another way 
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log(data)

require('./7-mind-granade')


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)