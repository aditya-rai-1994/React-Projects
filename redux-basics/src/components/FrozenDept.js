import React, {Component} from "react";
// We want this component to know more about redux 
// to do that , we need to interact with react-redux, we need the connect function
import { connect } from "react-redux";
import updateFrozen from "../action/frozenInvUpdate";
import { bindActionCreators } from "redux";
class FrozenDept extends Component{
    increment=(operator, index)=>{
        // console.log(operator,index);
     this.props.updateFrozen(operator,index);
    }
   
    render(){
        const frozenInventory = this.props.frozenData.map((item,i)=>{
            return (
                <div key={i}>
                   <li >{item.food}-{item.quantity}</li>
                   <input type="button" onClick={()=>{this.increment('+',i)}} value='+'></input>
                   <input type="button" onClick={()=>{this.increment('-',i)}} value='-'></input>
                </div>
            )
        })
        return(
            <div className="froz">
                <h1>The Frozen Department</h1>
                <ul>
                    {frozenInventory}
                </ul>
            </div>
        )
    }
}// mapstateToProps takes one args i.e. "state" and that is root reducer/Store
function mapStateToProps(state){
    // mapStateToProps return an object with
    // property is the local prop name to this component 
    // value will be the property in the root reducer 
    return {
        frozenData: state.frozenReducer,
    }
}
// mapDispatchToProps is how we tie our component to the dispatch
// It takes 1 arg: dispatch
function mapDispatchToProps(dispatch){
    // this function returns, bindActionCreators
    // and we hand bindActionCreators on object:
    // each property will be a local prop
    // each value will be a function that is dispatch when run
    //2nd arg or bindActionCreators is teh dispatch
   return bindActionCreators({
    updateFrozen: updateFrozen
   }, dispatch)
}
// export default FrozenDept;
// connect take 2 args, the first one is a function that is going to map a piece of redux state to 
// this component props
// 2nd arg to connect: mapDispatchtoprops
export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);