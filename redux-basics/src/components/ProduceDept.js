import React, {Component} from "react";
import { connect } from "react-redux";
import produceInvUpdate from "../action/produceInvUpdate";
class ProduceDept extends Component{
    increment=(operator, index)=>{
        // console.log(operator,index);
        if(operator==='+'){

        }else if(operator==='-'){

        }
    }
    render(){
        const produceInventory = this.props.produceData.map((item,i)=>{
            return (
                <div key={i}>
                   <li >{item.food}-{item.quantity}</li>
                   <input type="button" onClick={()=>{this.increment('+',i)}} value='+'></input>
                   <input type="button" onClick={()=>{this.increment('-',i)}} value='-'></input>
                </div>
            )
        })
        return (
            <div>
             <h1>The produce Department</h1>
              <ul>
                {produceInventory}
             </ul>
           </div>
        )
    }
}
function mapStateToProps(state){
    return {
        produceData: state.produce
    }    
} 
export default connect(mapStateToProps)(ProduceDept)