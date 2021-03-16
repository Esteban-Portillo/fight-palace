import React,{Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            userInput:''
        }
    }

    handleChange = (value) => {
        this.setState({userInput: value},console.log(this.state.userInput))
    }

    handleClick = ()=> {
        this.props.addUserName(this.state.userInput)
    }
    
    

    render(){
        return(
            <header className = 'header'>
                <section className = 'introduceName'>
                    
                    <input onChange = {(e)=>this.handleChange(e.target.value)}/>
                <button onClick = {this.handleClick}>Send your name </button>
                </section>

                <h1>FIGTH PALACE</h1>
                
                <section>
                    <h1>{this.props.usersName[this.props.usersName.length-1]}</h1>
                    <h1>{this.props.coins}</h1>
                </section>
                
            </header>
        )
    }
}
export default Header