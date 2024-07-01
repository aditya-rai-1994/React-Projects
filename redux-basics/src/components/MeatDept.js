import React, {Component} from "react";
import { connect } from "react-redux";
import meatInvUpdate from "../action/meatInvUpdate";
class MeatDept extends Component{
    increment=(operator, index)=>{
        // console.log(operator,index);
        if(operator==='+'){

        }else if(operator==='-'){

        }
    }
    render(){
        const meatInventory = this.props.meatData.map((item,i)=>{
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
             <h1>The Meat Department</h1>
              <ul>
                {meatInventory}
             </ul>
           </div>
        )
    }
}
function mapStateToProps(state){
    return {
        meatData: state.meat
    }    
} 
export default connect(mapStateToProps)(MeatDept)