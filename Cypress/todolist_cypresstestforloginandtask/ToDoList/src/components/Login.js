import React, { Component } from 'react';

const styles={
    form:{
      backgroundColor:'rgb(247, 247, 181)',
      textAlign:'center'
        },
    h1:{
        paddingTop:'100px',
        textAlign:'center',
        color:'rgb(6, 6, 88)'
      } 
};
class Login extends Component{
  constructor(props) {
        super(props);
        this.state = 
        {
        name: '',
        password:'',
        display:''
            
        }
               this.handleName = this.handleName.bind(this);
               this.handlePassword = this.handlePassword.bind(this);
			   this.handleSubmit = this.handleSubmit.bind(this);
       }
        
         handleName(event) {
             this.setState({name: event.target.value});
         }
         handlePassword(event)
         {
            this.setState({password:event.target.value});
         }
        
        handleSubmit(event) {	 	  	      	   	     	   	 	
        event.preventDefault();
        var name=this.state.name;
        var password=this.state.password;
        if(name.length>5 && password.length>8)
        {
          this.setState({ display: 'Hai '+this.state.name+' .Login successful'});
        }
        
        else{
          this.setState({display:'Invalid LoginId or Password'});}
        }
        
        

    
         render() {
        return ( 
            
            <div>
            
            <h1 style={styles.h1}>Smart task list for everyday use and truly usable with great user experience</h1>
            
            <form style={styles.form}>
            <h1 style={styles.h1}>Login Here</h1>
            
               <div>
                                <div>User Name<br/>
                                <input  id="name" type="text" placeholder="Enter your name"  value={this.state.name} onChange={this.handleName}/></div>
                            </div><br/>
                          
                            <div>
                                <div >Password <br/>
                                <input  id="password" type="text" placeholder="password" value={this.state.password} onChange={this.handlePassword}/></div>
                            </div>
                            
                             <div>
                            <button  style={{textAlign:'center',marginTop:'auto',paddingTop:'75px'}} id="click" type="submit" onClick={this.handleSubmit}>Submit</button>
                            </div>
                            <br/>
                           
                            <div id="display" style={{ color:'rgb(6, 6, 88)',textAlign:'center',fontWeight:'bold'}} >{this.state.display}</div>
                
              
            </form>
            
            </div>
            
            
            );
              }


}	 	  	      	   	     	   	 	

export default Login;