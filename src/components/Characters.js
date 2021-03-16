import React,{Component} from 'react'

class Characters extends Component{
    render(){
        let mappedCharacters = this.props.characters.map((e,i)=>{
            return(
                
                    <figure className = 'figure'>
                        <img name = {this.props.characters[i].id}
                        src = {this.props.characters[i].imgUrl}
                        onClick={ (e) => this.props.choosingCharacter(e.target.name)}/>

                        <p>{this.props.characters.name}</p>
                        <p> Attack: {this.props.characters[i].attack}</p>

                        <p> Defense: {this.props.characters[i].defense}</p>

                        <button  name = {this.props.characters[i].id} 
                        onClick = { (e) => this.props.buyAttack(+e.target.name)}>Buy Attack</button>

                        <button name = {this.props.characters[i].id} 
                        onClick = { (e) => this.props.buyDefense(+e.target.name)}>Buy Defense</button>

                    </figure>
                
            )
        })
        return(
            <section>
                <p className ='characters'>{mappedCharacters}</p>
            </section>
        )
    }
}

export default Characters