import React from 'react'


const withCounterHoc=(WrappedComponent,countTimes)=>
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
    return {count:prevState.count+countTimes}
        })
    }


      render(){
          return  <WrappedComponent count={this.state.count} incrementCounter={this.incrementCounter}
          {...this.props} //passing all parent props to children
          />
             
          
      }
        
    }

    return WithCounterHoc
    
}

export default withCounterHoc