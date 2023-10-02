const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=> {
    console.log(`data recieved from ${name} with ${id}`)
})

customEmitter.on('response', ()=> {
    console.log('Second data from test')
})

customEmitter.emit('response', 'Zubin', 43) 