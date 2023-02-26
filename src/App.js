import './App.css';
import { GroceryList } from './PageOne';
import imageOne from './PhotoOne.jpg';




function App() {
  return (
    <div className='container'>
      <img src={ imageOne } alt='Grocery List' className='imageOne'/>
      <h1>Grocery List</h1>
      <GroceryList/>
    </div>
  );
}

export default App;
