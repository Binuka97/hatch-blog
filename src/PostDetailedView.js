import React,{Component} from "react";

class PostDetailedView extends Component {

    state = {
        loading:true,
        person:null
    };

    async componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data[0], loading:false})
        
    }
    render() {
        return(
            <div>
                {this.state.loading || !this.state.person ? (
                    <div> Nothing to display </div>
                ) : (
                <div>
                  <div> <h1>{this.state.person.title} </h1> </div>
                  <br></br>
                  <br></br>
                  <div> <p> {this.state.person.body} </p>  </div>
                </div>
                )}
            </div>
       );
    }
}

export default PostDetailedView;