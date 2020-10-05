import React from 'react'


const withCounterHoc=WrappedComponent=>
{

    class WithCounterHoc extends React.Component{

        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
    incrementCounter=()=>{
        this.setState(prevState=>{
    return {count:prevState.count+1}
        })
    }


      render(){
          return  <WrappedComponent count={this.state.count} incrementCounter={this.incrementCounter}/>
             
          
      }
        
    }

    return WithCounterHoc
    
}

export default withCounterHoc