// All reducer have 2 Params
//1. current state, usually provide a default state
// 2. Info that come from any action
const seedData = [
    {
        food: "TV dinners",
        quantity: 10
    },
    {
        food: "Frozen Veggies",
        quantity: 21
    },
    {
        food: "Frozen Pizzas",
        quantity: 25
    }
]
export default (state = seedData, action)=>{
    console.log("Frozen Reducer is running!");
    console.log(action);
    if(action.type === 'updateFrozen'){
        console.log("I care about this action")
        // we make copy of state becuase we can never ever mutate state
        const newState = [...state];
        if(action.payload.operation === '+'){
            newState[action.payload.index].quantity++
        }else if(action.payload.operation === '-'){
            newState[action.payload.index].quantity--
        }
        return newState;
    }else{
        return state;
    }
    return state;
}