import React, {Component} from 'react';
import './PostList.css';
import {Link} from 'react-router-dom'; 
import  Modal from 'react-modal';

Modal.setAppElement('#root')
class PostList extends Component{

state = {
  loading:true,
  isModalVisible:false,
  posts:[],
  title:null,
  Description:null
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

    toggleModal = () => {
        this.setState({
            isModalVisible:!this.state.isModalVisible
        })
    }
    handleSubmit = () => {

    }
    handleInputChange = (event) => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    render(){
      console.log('renderring... ', this.state)
      const {title} = this.state
      
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
             <p>Title is: {title} </p>     
            <form onSubmit={this.handleSubmit}>
               <h3>Title :</h3>
               <input type="text" id="title" placeholder="Enter the Title" name="title" onChange={this.handleInputChange}/>
               <h3>Description :</h3>
               <input type="text" id="desc" placeholder="Enter Description" name="description" /> 
               <hr></hr>

                <button onClick={this.toggleModal}>Save & Publish</button>   

            </form>
            

           </Modal>
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