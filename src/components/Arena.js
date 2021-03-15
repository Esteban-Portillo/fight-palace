import React,{Component} from 'react'

class Arena extends Component{
  
    randomChoiser = () =>{
        let randomNumber = Math.floor(Math.random()*4)+1
        this.props.randomChoise(randomNumber)
    }
    
    render(){
        console.log(this.props.randomCharacter)
        console.log('choose character',this.props.choosedCharacter)
        return(
            <section>
                <h1>This is the arean </h1>
                <p>this guy you choosed</p>
                <section>
                    <img src= {this.props.choosedCharacter.imgUrl}/>
                    <p>Name {this.props.choosedCharacter.name}</p>
                    <p>Attack: {this.props.choosedCharacter.attack}</p>
                    <p>Defense: {this.props.choosedCharacter.defense}</p>
                </section>


                <p>VS</p>
                
                
                <p>this other guy </p>
                <section>
                    <img src= {this.props.randomCharacter.imgUrl}/>
                    <p>Name {this.props.randomCharacter.name}</p>
                    <p>Attack: {this.props.randomCharacter.attack}</p>
                    <p>Defense: {this.props.randomCharacter.defense}</p>
                    <button onClick={this.randomChoiser}>Random Chooser</button>
                </section>
                <button>FIGHT</button>
                   
            </section>
                
        )
    }
}

export default Arena