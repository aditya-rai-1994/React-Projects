// this file is an action creator!
// action creators return actions
// action is an object that has at LEAST a property of type
// this action creator is going to be handed to the dispatch
export default (operator, index)=>{
    console.log(operator,index)
    return{
        type: 'updateFrozen',
        payload:{ 
            operator,
            index
        }
    }
}