const EventEmitter = require('events')

const mainEvent = new EventEmitter()

mainEvent.on('call', () => {
    console.log(`data recieved `)
})
mainEvent.on('call', (name, id) => {
    console.log(`new user data: ${name} and ${id}`)
})

mainEvent.emit('call', 'oma', 25)