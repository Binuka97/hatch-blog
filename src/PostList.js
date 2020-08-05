import React, {Component} from 'react';
import './PostList.css';
import {Link} from 'react-router-dom'; 
class PostList extends Component{

    state={
        isOpen:false
    }

    handleClick=()=>{
        this.setState({
            isOpen:!this.state.isOpen,
        })
    }

    render(){
        return(

            <nav>

        <div className= "btn" onClick={this.handleClick} >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={this.state.isOpen ? 'showList' : 'undefined'}>
          <li> <Link to='/PostDetailedView' href= "#"> List 1 </Link></li>
          <li> <a href= "#"> List 2 </a></li>
          <li> <a href= "#"> List 3 </a></li>
          <li> <a href= "#"> List 4 </a></li>
        
        </ul>

      </nav>
        )
    }
}

export default PostList;