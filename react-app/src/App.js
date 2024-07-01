import react , {Component} from 'react';
// import StateInAction from './StateInAction';
// import SimpleEvents from './SimpleEvents';
// import StateAndEvent from './StateAndEvent';
// import StatePractice from './StatePractice';
import CardSet from './CardSet';
import cards from './cards.js'
import './App.css';
console.log(cards);
class App extends Component  {
  render(){
  return (
    <div className="App">
      <div className='row'>
      <CardSet cards = {cards}/>
      </div>
    </div>
  );
}
}

export default App;
