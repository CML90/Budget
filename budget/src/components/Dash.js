import '../App.css';

function Dashboard() {
  return (
    <div id="Dashboard-Main">
      <div className='Dash'>
      <div id="Budget">
          <h3 className='Month'>January 2023</h3>
          <div>
            <p className='Left'>Total:</p>
            <p className='Total-Amount Right'>PHP 19,500</p>
          </div>
          <div>
            <p className='Left'>Save:</p>
            <p className='Save-Amount Right'>PHP 2,000</p>
          </div>
          <div>
            <p className='Left'>Month Budget:</p>
            <p className='MB-Amount Right'>PHP 15,500</p>
          </div>
          
          <div className="emphasize">
            <h3>Day Budget:</h3><h3 className='Budget'>PHP 500</h3>
          </div>
        </div>

        <div id="Expense">
          <h3 className='Month'>January 2023</h3>
          <div>
            <p className='Living Left'>Living:</p>
            <p className='Living-Expense Right'>PHP 500</p>
          </div>
          <div>
            <p className='Bills Left'>Bills:</p>
            <p className='Bills-Expense Right'>PHP 0</p>
          </div>
          <div>
            <p className='Other Left'>Others:</p>
            <p className='Other-Expense Right'>PHP 250</p>
          </div>
          
          <div className="emphasize">
            <h3>Total Spent:</h3><h3 className='Budget'>PHP 750</h3>
          </div>
        </div>

        <div id="Today">
          <div className='amounts'>
            <div className='first-div'>
              <h3>Today</h3>
              <h3 className='Today-Day'>2</h3>
            </div>

            <div className='SA'>
              <div>
                <p>Spent</p>
                <p className='Spent-amount Amount'>PHP 248</p>
              </div>
              <div>
                <p>Available</p>
                <p className='Available-amount Amount'>PHP 250</p>
              </div>
            </div>
            
          </div>
          
          <div className='inputting'>
            <select name='category' id='category'>
              <option value='none'>None</option>
              <option value='living'>Living Costs</option>
              <option value='bills'>Bills</option>
              <option value='other'>Others</option>
            </select>

            <input type='number'></input>
            <input type='date'></input>
            
            <div className='buttons-div'>
              <button className='Add'>Add</button>
              <button className='Subtract'>Subtract</button>
              <button className='Undo'>Undo</button>
            </div>
          </div>
        </div>

        <div id="Yesterday">
          <div>
            <h3>Yesterday</h3>
            <h3 className='Yesterday-Day'>1</h3>
          </div>
          
          <div>
            <p>Spent</p>
            <p className='YSpent-amount Amount'>PHP 502</p>
          </div>
          
        </div>

        <div id="Tomorrow">
          <div>
            <h3>Tomorrow</h3>
            <h3 className='Tomorrow-Day'>3</h3>
          </div>
          <div>
            <p>Spendable</p>
            <p className='TSpent-amount Amount'>PHP 508</p>
          </div>
          
        </div>

        <div id="To-Notes">
          <div>
            <h3 className='Month'>January 2023</h3>
            <a><h3>Notes and Calculations</h3></a>
          </div>
        </div>

      </div>
        
      <div id="Transaction-History">
        <h2>Transaction History</h2>
        <table>
          <tr>
            <div className='intable'>
              <p className='Trans-Date Left'>January 2, 2023</p>
              <p className='Trans-Amount Right'>-PHP 248</p>
            </div>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
