import React, {Component} from 'react';
import './PostList.css';
import {Link} from 'react-router-dom'; 

class PostList extends Component{

state = {
  loading:true,
  posts:[]
}

  componentDidMount(){
    this.fetchData()
  }

fetchData = async ()=>{
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({posts: data[0], loading:false})
        console.log(data)
}

    renderItem = ({title})=>{
    return (<li> <Link to='/PostDetailedView'>{title}</Link></li>)
    }

    render(){
      console.log('renderring... ', this.state)

        return(
          <div>

       {this.state.isModalVisible && <div>
          <h2>new post modal</h2>
        </div>
    }
        <ul>
         {this.renderItem({title:'asdfafasf', body:'asdfafdasfas'})}

         
         
        </ul>
</div>
     
        )
    }
}

export default PostList;