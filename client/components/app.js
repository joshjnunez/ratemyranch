import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            reviewButtonClicked: false,
            restaraunt: " "
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

    const array = ['juniors', 'three b\'s', 'blue oak bbq'];

    for(let i = 0; i < array.length; i++){
        if(e.target.value === array[i]) {
            this.setState({
                    restaraunt: array[i],
                })
        };
        }
    }

    render(){
        const {restaraunt} = this.state;
        return (
        <div>
        <h2>Rate My Ranch</h2>
        <input onChange={(e)=> this.handleChange(e)}></input>
        <button onClick={()=> this.handleClick()}>Click Me</button>
        <div>---------------------------</div>
        <div>{restaraunt}</div>
        </div>
        )
    }
}


export default App;