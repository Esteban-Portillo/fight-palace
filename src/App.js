import React, {Component} from 'react'
import axios from 'axios'
import Header from './components/Header'
import Characters from './components/Characters'
import Arena from './components/Arena'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      coins:'',
      usersName:[],
      characters:[],
      choosedCharacter: [],
      randomCharacter:[]
    }
  }
  
  componentDidMount(){
    
    axios.get('/api/characters')
      .then( res => {
        // console.log( res.data )
        this.setState({ characters : res.data })
      })
      .catch(err => console.log(err));
      
    axios.get('/api/coins')
      .then(res => {
        this.setState({coins: res.data[0]})
        })
      .catch(err => console.log(err))

    axios.get('/api/users')
      .then(res => {
        // console.log(res)
        this.setState({usersName : res.data[0]})
      })
      .catch( err => console.log(err))
  }

  addUserName = (name)=>{
    axios.post('/api/user/newName',{ newName: name })
      .then(res => {
        this.setState({usersName: res.data})
      })
      .catch( err => console.log(err))
  }

  choosingCharacter = (id) =>{
    console.log(id)
    console.log(this.state.characters)
    this.setState({choosedCharacter: this.state.characters[id-1]})
  }
  buyAttack =(id) => {
    if(this.state.coins >= 100){
      axios.put(`/api/habilities/attack/${id}`)
      .then( (res) => {
        this.setState({characters: res.data})
      })
      .catch( err => console.log(err));
    axios.put('/api/coins/down')
      .then( res => this.setState({coins:res.data[0]}))
      .catch( err => console.log(err));
      
    }
    else{
      alert('you don t have coins to buy')
    }
    
  }
  buyDefense =(id) => {
    if (this.state.coins >= 100){
      axios.put(`/api/habilities/defense/${id}`)
      .then( (res) => this.setState({characters:res.data}))
      .catch( err => console.log(err));
      axios.put('/api/coins/down')
      .then( res => this.setState({coins:res.data[0]}))
      .catch( err => console.log(err));
      
    }
    else{
      alert('you don t have coins')
    }
  }


  randomChoise =(id) => {
    this.setState({randomCharacter : this.state.characters[+id-1]})
  }

  coinsUp = () =>{
    axios.put('/api/coins/up')
     .then(res => this.setState({coins: res.data[0]}))
     .catch( err => console.log(err));
     
  }

  render(){
    console.log(this.state.cho)
    return(
      <main>

        <Header 
          coins = {this.state.coins}
          usersName = {this.state.usersName}
          addUserName = {this.addUserName}/>

        <Characters 
          characters = {this.state.characters}
          choosingCharacter = {this.choosingCharacter}
          buyAttack = {this.buyAttack}
          buyDefense = {this.buyDefense}/>

        <Arena 
          choosedCharacter = {this.state.choosedCharacter}
          characters = {this.state.characters}
          randomCharacter = {this.state.randomCharacter}
          randomChoise = {this.randomChoise}
          coinsUp = {this.coinsUp}/>
      </main>
      
    )
  }
}

export default App;
