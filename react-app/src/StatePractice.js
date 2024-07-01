import react, {Component} from "react";
class StatePractice extends Component{
    constructor(){
        super()
        this.state = {
            message :""
        }
    }
    hanleFocus=(event)=>{
        this.setState({
            message: "you agree to our term and service"
        })
    }
    handleEnter=(event)=>{
        this.setState({
            message:""
        })
    }
    render(){
        return(
            <div>
            
            <input onFocus={this.hanleFocus} type = "text"/>
            <h3 onMouseEnter={this.handleEnter}>{this.state.message}</h3>
            </div>
        )
    }
}
export default StatePractice;