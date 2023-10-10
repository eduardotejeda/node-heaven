const express = require('express')
const app = express()
const {people} = require('./data')

//static assets
app.use(express.static('./methods-public'))
// parse from data
app.get('/api/people', (req, res)=> {
  res.status(200).json({success:true, data:people})
})

app.post('/login', (req, res) => {
  res.send('POST')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})