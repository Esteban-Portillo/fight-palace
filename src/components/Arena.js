import React,{Component} from 'react'

class Arena extends Component{

    constructor(props){
        super(props)
        this.state = {
            winner:''
        }
    }
  
    randomChoiser = () =>{
        let randomNumber = Math.floor(Math.random()*4)+1
        this.props.randomChoise(randomNumber)
    }

    figth = () => {
        
        if((this.props.randomCharacter.defense/this.props.choosedCharacter.attack) < (this.props.choosedCharacter.defense/this.props.randomCharacter.attack)){
            this.setState({winner: 'You are the winner'}, this.props.coinsUp())
            
        }
        else{
            this.setState({winner:'sorry bro you loose'})
        }
            
        }
    
    
    render(){
        console.log(this.props.randomCharacter)
        console.log('choose character',this.props.choosedCharacter)
        return(
            
            
            <section>
                
                <h1>This is the ARENA</h1>
                <section>
                    <p>this guy you choosed</p>
                    <img src= {this.props.choosedCharacter.imgUrl}/>
                    <p>Name {this.props.choosedCharacter.name}</p>
                    <p>Attack: {this.props.choosedCharacter.attack}</p>
                    <p>Defense: {this.props.choosedCharacter.defense}</p>
                </section>


                <p>VS</p>
                
                
                
                <section>
                    <p>this other guy </p>
                    <img src= {this.props.randomCharacter.imgUrl}/>
                    <p>Name {this.props.randomCharacter.name}</p>
                    <p>Attack: {this.props.randomCharacter.attack}</p>
                    <p>Defense: {this.props.randomCharacter.defense}</p>
                    <button onClick={this.randomChoiser}>Random Chooser</button>
                </section>
                <button onClick = {this.figth}>FIGHT</button>

                <h1>{this.state.winner}</h1>
                   
            </section>
                
        )
    }
}

export default Arena