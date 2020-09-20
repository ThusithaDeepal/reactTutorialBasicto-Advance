import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCounter=()=>{
        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     console.log("callback value is",this.state.count);
        // })
        // //if we do something after updating state,we should do in call back function in set state
        // console.log("incremnt values:",this.state.count); 
    this.setState((prevstate,props)=>
    (
        {
count:prevstate.count+1    
}

),

    )
    
    }
    incrementFiveCounter=()=>{

        //in here all set state are called at once by combining so we should use prevstate to update state
        //as a function 
this.incrementCounter();
this.incrementCounter();
this.incrementCounter();
this.incrementCounter();
this.incrementCounter();
    }



    render() {

//destructuring props and state lile this props can be destructing like this

const {count}=this.state

        return (
            <div>
                <p>Counter value is:
                    {count} 
                    {/* {this.state.count} */}

                </p>
                <button onClick={this.incrementCounter}>Click me</button>
                <br/>
                <button onClick={this.incrementFiveCounter}>Click me increment by 5</button>

            </div>
        )
    }
}

export default  Counter;