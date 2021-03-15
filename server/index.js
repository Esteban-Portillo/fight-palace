const express = require ('express')
const app = express()
const controls = require('./controls')
app.use(express.json())




app.get('/api/characters',controls.showCharacters)
app.get('/api/characters/:id',controls.pickCharacter)
app.get('/api/coins',controls.showCoins)
app.get('/api/users',controls.users)
// app.get('api/characters/random', controls.randomCharacter)
app.put('/api/coins/up',controls.coinUp)
app.put('/api/coins/down',controls.coinDown)
app.put('/api/habilities/attack/:id',controls.attack)
app.put('/api/habilities/defense/:id',controls.defense)

app.post('/api/user/newName',controls.addName)


const port = 4020
app.listen(port,()=> console.log(`Server is running in ${port}`))
