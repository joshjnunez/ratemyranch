import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            reviewButtonClicked: false
        };  
    }

    handleClick(){
      console.log('Clicked!')
      this.setState({
          reviewButtonClicked: !this.reviewButtonClicked,
      })
    }

    handleChange(e){
        console.log(e.target.value);
    }

    render(){
        return (
        <div>
        <h2>Rate My Ranch</h2>
        <input onChange={(e)=> this.handleChange(e)}></input>
        <button onClick={()=> this.handleClick()}>Click Me</button>
        </div>
        )
    }
}


export default App;