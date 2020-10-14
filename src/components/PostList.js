import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {

constructor(props) {
    
    super(props)

    this.state = {
         PostList:[],
         errorMsg:""
    }
}

componentDidMount(){

    axios.get('https://jsonplaceholder.typicode.com/posts/').then(
        response=>{
            console.log(response.data)

            this.setState({
                PostList:response,
              
               
            })
        }
    ).catch((error)=>{
console.log(error)

this.setState({
    errorMsg:"Erorrrrr MSg"
})
    })
}


    render() {
    
       console.log(this.state.PostList)
        return (
           
            <div>
  List of Posts


{this.state.errorMsg}
            </div>
        )
    }
}

export default PostList
