import react, {Component} from "react";
class SimpleEvents extends Component{
    handleClick(){
        console.log("Test")
    }
    handleChange(){
        console.log("User changed the input")
    }
    handleSubmit(event){
        console.log("Form submitted");
        event.preventDefault();
    }
    render(){
         return (
            <div>
                <form onSubmit={this.handleSubmit}>
                  <button onClick={this.handleClick}> click Me!</button>
                  <input onChange={this.handleChange} type="text" placeholder="Enter Some Text"/>
                </form>
            </div>
         )
    }
}
export default SimpleEvents;