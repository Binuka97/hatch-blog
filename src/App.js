import React from 'react';
import './App.css';
import PostList from './PostList'
import PostDetailedView from './PostDetailedView'
import {BrowserRouter as Router,Switch,Route}
from 'react-router-dom';
 

function App() {
  return (
    <Router>
      <div className="main">
        <PostList />
       

      <Switch>
        <Route exact path="/PostDetailedView" component={PostDetailedView} />

        
      </Switch>

      </div>
    </Router>
      
      

  );
}

export default App;
