import React,{Component} from "react";

class PostDetailedView extends Component {

    state = {
        loading:true,
        post:null
    };

    async componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({post: data[0], loading:false})
        console.log(data);
        
    }
    render() {
        return(
            <div>
                {this.state.loading || !this.state.post ? (
                    <div> Nothing to display </div>
                ) : (
                <div>
                  <div> <h1>{this.state.post.title} </h1> </div>
                  <br></br>
                  <br></br>
                  <div> <p> {this.state.post.body} </p>  </div>
                </div>
                )}
            </div>
       );
    }
}

export default PostDetailedView;