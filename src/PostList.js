import React, {Component} from 'react';
import './PostList.css';
import {Link} from 'react-router-dom'; 
import  Modal from 'react-modal';

Modal.setAppElement('#root')
class PostList extends Component{

state = {
  loading:true,
  isModalVisible:false,
  posts:[]
}

  componentDidMount(){
    this.fetchData()
  }

fetchData = async ()=>{
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({posts: data, loading:false})
        console.log(data)
}

    renderItem = ({title})=>{
    return (<li> <Link to='/PostDetailedView'>{title}</Link></li>)
    }

    toggleModal = () => {
        this.setState({
            isModalVisible:!this.state.isModalVisible
        })
    }
    handleSubmit = (event) => {

    }

    render(){
      console.log('renderring... ', this.state)

        return(
          <div>
        <button onClick={this.toggleModal}>Create New Post</button>
       {this.state.isModalVisible && <div>
           
           <Modal isOpen={this.state.isModalVisible} onRequestClose={this.toggleModal}
              style={
                  {
                      overlay:{
                          backgroundColor: "grey"
                      }
                  }
              } >
            <form onSubmit={this.handleSubmit}>
               <h3>Title :</h3>
               <input type="text" id="title" placeholder="Enter the Title"/>
               <h3>Description :</h3>
               <input type="text" id="desc" placeholder="Enter Description" /> 
               <hr></hr>

                <button onClick={this.toggleModal}>Save & Publish</button>   

            </form>
            

           </Modal>
        </div>
    }
            <ul>

              {this.state.posts.map(function (item, index) {
                return (
                  <p>{item.title}</p>


                )
              }
              )}
            </ul>
</div>
     
        )
    }
}

export default PostList;