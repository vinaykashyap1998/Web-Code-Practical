import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class former extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:""
        }
    }
    render(){
        return(
            <div classname="container">
                <form>
                   <label>Username:</label>
                   <input type="text" onChange={(e)=>{this.setState({username:e.target.value})}} value={this.target.username} ></input>
                   <label>Password:</label>
                   <input type="passworld" onChange={(e)=>{this.setState({password:e.target.value})}} value={this.target.password} ></input>
                   <button className="btn btn-primary" name="submit">Submit</button>
                </form>

            </div>
        )
    }
}
