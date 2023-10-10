const express = require('express')
const app = express()
const {people} = require('./data')
const { fa } = require("@faker-js/faker")

//static assets
app.use(express.static('./methods-public'))
// parse from data
app.use(express.urlencoded({extended:false}))
app.get('/api/people', (req, res)=> {
  res.status(200).json({success:true, data:people})
})

app.post('/login', (req, res) => {
  const {name} = req.body;
  if(name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')


  res.send('POST')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})