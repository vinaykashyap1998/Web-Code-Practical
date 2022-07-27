
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null

    };
  }
  clickHandle() {
    alert("Your Username_Password are " + this.state.username + this.state.password);
  }

  render() {

    return (
      <div>
        <h3>{this.props.b}</h3>
        <form className="form-group">
          
          <label>Username:</label> <input type="text" className='form-control' onChange={(e) => this.setState({ username: e.target.value })} value={this.state.username}></input>
          <label>Password:</label> <input type="Password" className='form-control' onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password}></input>
          <button onClick={this.clickHandle.bind(this)} id="btn" className=" btn btn-success" >Submit</button><br></br>
        </form>

      </div>

    );
  }
}

