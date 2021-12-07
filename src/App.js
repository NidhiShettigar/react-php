import axios from 'axios';
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    text: ""
  };

  handelAdd = async e =>{
    await this.setState({
      text : e.target.value
    })
  }
  handelSubmit = e =>{
    e.preventDefault();
    console.log(this.state.text);
    let formData = new FormData();
    formData.append("text", this.state.text);
    const url = "http://localhost:80/react-backend/";
    axios.post(url, formData)
    .then(res=> console.log(res.data))
    .catch(err=> console.log(err));
  }
  render()
  {
    return (
      <div className="App-header">
        <input 
        onChange = {this.handelAdd}
        className="form-control" 
        type="text" id="text" 
        placeholder="Enter some text">
        </input>
        <br></br>
        <button 
        onClick = {this.handelSubmit}
        className="btn-success" id="submit">Save</button>
      </div>
    );
  }
}

export default App;
