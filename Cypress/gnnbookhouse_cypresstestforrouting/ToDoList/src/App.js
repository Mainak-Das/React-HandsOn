import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link,Routes} from 'react-router-dom';
import Todolist from './components/Todolist';
import Login from './components/Login';
import './App.css';



const styles={
     
    h2: {

        paddingTop:'100px',

        marginLeft:'auto',

        marginRight:'auto',

        color:'#022f3a',

        fontFamily:'verdana'

      }
};
class Homepage extends Component {

    render(){
            return(
                <div id="divHome">
                <h2 style={styles.h2}>Daily Tasks To Do </h2>
                 <Link to="/login">Login</Link> {" "}|{" "}
                <Link to="/todolist">Get Started</Link>{" "}|{" "}       
                
                
                 <Routes>           
                 <Route  path='/login' element={<Login/>}></Route> 
                 <Route  path='/todolist' element={<Todolist/>}></Route> 
                </Routes>  
      
                </div>
                
                
                );
    }	 	  	      	   	     	   	 	
}
export default Homepage;