const express = require('express')
const app = express()
const people = require('./routes/people')

//static assets
app.use(express.static('./methods-public'))
// parse from data
app.use(express.urlencoded({extended:false}))
// parse json
app.use(express.json())

app.use('/api/people', people)

app.post('/login', (req, res) => {
  const {name} = req.body;
  if(name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})


app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})