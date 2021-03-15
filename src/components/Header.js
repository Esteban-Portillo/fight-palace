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
            <header>
                <h1>fight Palace</h1>
                <label>Introduce your name</label> 
                <input onChange = {(e)=>this.handleChange(e.target.value)}/>
                <button onClick = {this.handleClick}>Send your name </button>
                <h1>{this.props.usersName[this.props.usersName.length-1]}</h1>
                <h1>{this.props.coins}</h1>
            </header>
        )
    }
}
export default Header