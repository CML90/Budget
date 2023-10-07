// import './App.css';
import Dashboard from './components/Dash';
import LogIn from './components/LogIn';

function App() {
  return (
    <div id="IncomePage">
      <div className="Input">
        <div className='labels'>
          <label>Month's Income:</label>
          <label>Month's Bills:</label>
          <label>Month's Budget:</label>
        </div>

        <div className='inps'>
          <div>
            <input type="number"></input>
            <button className='SetIncome'>Set</button>
          </div>

          <div>
            <input type="number"></input>
            <button className='SetCost'>Set</button>
          </div>

          <div>
            <input type="number"></input>
            <button className='SetBudget'>Set</button>
          </div>
        </div>

        
      </div>

      <div className='Categories'>
        <h2>Categories</h2>
        <div>
          <p className='Category Left'>Living</p><p className='Del Right'>Del</p>
        </div>

        <div>
          <p className='Category Left'>Bills</p><p className='Del Right'>Del</p>
        </div>

        <div>
          <p className='Category Left'>Others</p><p className='Del Right'>Del</p>
        </div>

        <div>
          <input className='CategoryAdd'></input>
          <button className='Add'>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
