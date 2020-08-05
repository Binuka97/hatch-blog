import React,{Component} from "react";

class PostDetailedView extends Component {

    state = {
        loading:true,
        person:null
    };

    async componentDidMount(){
        // const url = "https://jsonplaceholder.typicode.com/posts";
        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({person: data[0], loading:false})
        // console.log(data)
        
    } 
    render() {
        return(
            <div>
                
                  <div> <h1>{'this.state.person.titl'} </h1> </div>
                  <br></br>
                  <br></br>
                  <div> <p> {'this.state.person.body'} </p>  </div>
    
            </div>
       );
    }
}

export default PostDetailedView;