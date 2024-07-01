import react, {Component} from "react";
class StateAndEvent extends Component{
    constructor(){
        super()
        this.state = {
            inputtext :""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick=()=>{
        this.setState({
            inputtext: ""
        })
        //console.log("Test")
    }
    handleChange(event){
        this.setState({
            inputtext: event.target.value
        })
        console.log(this.state.inputtext);
    }
    handleSubmit=(event)=>{
        this.setState({
            inputtext:"State is cool"
        })
        event.preventDefault();
    }
    render(){
         return (
            <div>
                <h1>{this.state.inputtext}</h1>
                <form onSubmit={this.handleSubmit}>
                  <button onClick={this.handleClick}> click Me!</button>
                  <input onChange={this.handleChange} type="text" placeholder="Enter Some Text"/>
                </form>
            </div>
         )
    }
}
export default StateAndEvent;