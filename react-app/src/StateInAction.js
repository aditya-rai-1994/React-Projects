import react, {Component} from 'react';

class StateInAction extends Component{
    constructor(){
        super();
        this.state = {
            text: "State in Action",
            name: "Bob"
        }
        setTimeout(()=>{
            this.setState({
                text: "State Changed!!"
            })
        },2000)
    }
    render(){
        return(
            <h1>{this.state.text} - {this.state.name}</h1>
        )
    }
}
export default StateInAction;