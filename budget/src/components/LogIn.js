import '../App.css';

function LogIn() {
  return (
    <div id="LogIn-main">
      <form className="LS-Form">
        <h1 id="logo">BT</h1>
        <label>Username:</label><input/>
        <label>Password:</label><input />
        <button>Log In</button>
      </form>
        <p>No account yet? Sign Up</p>
    </div>
  );
}

export default LogIn;