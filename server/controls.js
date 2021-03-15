const characters = [
    {
        id : 1,
        name:'naruto',
        attack : 1000,
        defense : 200,
        imgUrl:'http://www.bbc.co.uk/staticarchive/d395982682e2d7326304e5a56480aed25711e165.jpg'

    },
    {
        id : 2,
        name:'Zazuke',
        attack : 1800,
        defense : 1200,
        imgUrl:'https://i.pinimg.com/originals/24/12/a4/2412a4942e1f850fbffbe41ef8882d7d.jpg'

    },
    {
        id : 3,
        name:'Goku',
        attack : 5000,
        defense : 1800,
        imgUrl:'https://dragonball.blog/wp-content/uploads/2020/04/goku-imagen.jpg'

    },
    {
        id : 4,
        name:'Gohan',
        attack : 4500,
        defense : 2000,
        imgUrl : 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/01/Gohan.jpg?fit=1280%2C720&quality=80&ssl=1'

    }
]

let coins = [200] 
let name = ['esteban']

module.exports = {

    showCharacters:(req,res)=>{
        // console.log(characters)
        res.status(200).send(characters)
    },
    pickCharacter: (req,res)=> {
        const {id} = req.params
        let choosenCharacter = []
        choosenCharacter.push(characters[id-1])
        res.status(200).send(choosenCharacter)
    },

    coinUp:(req,res)=>{
        // console.log(characters)
        coins[0] = coins[0]+50
        res.status(200).send(coins)
    },
    coinDown:(req,res)=>{
        coins[0] = coins[0] -100
        res.status(200).send(coins)
    },
    
    addName:(req,res)=>{
        const {newName} =req.body
        name.push(newName)
        res.status(200).send(name)
        
    },
    attack:(req,res) => {
        const {id} = req.params
        characters[id-1].attack += 1000 
        res.status(200).send(characters)
    },
    defense:(req,res) => {
        const {id} = req.params
        characters[id-1].defense += 1000 
        res.status(200).send(characters)
    },
    showCoins : (req,res) => {
        res.status(200).send(coins)
    },
    users : (req,res) => {
        res.status(200).send(name)
    }



}