import React,{ useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {

  
  const [userName, setUserName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [rating, setRating] = useState(0);
  const [userFeedback, setUserFeedback] = useState([]);
  const [comments, setcomments] = useState(''); 
  const [status, setStatus] = useState(''); 


 
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("rating",rating)
         let arr={
             userName:userName,
             emailId:emailId,
             rating:rating,
             comments:comments
         }   
         userFeedback.push(arr);                
            setStatus("Thanks for your feedback!!!");         
          };
 const getStatus= () => {  
    return (
        
        <div style={{backgroundColor:"grey",color:"#ffffff"}}>
        
        <div>         
            <table className="table table-hover">
                <thead >
                    <tr>
                        <th>User Name</th>
                        <th>Email Id</th>
                        <th>Rating</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                
            {userFeedback.map(({userName,emailId,rating,comments}) => (
               <tbody>
               <tr>
                    <td>{userName}</td> <td>{emailId}</td><td>{rating}</td><td>{comments}</td>
                </tr>        
        </tbody>
      ) )}
            
      </table> 
        </div>
            
        </div>
      );
 }	 	  	  	 			     	    	 	
  // Showing success message
  return (
    <div className="container w-50 ">           
     <h1> Go Tours -Enjoy Every Minute</h1>
      <form>
    <br></br>
   <div className="card" style={{backgroundColor:"grey"}}>
    <div className="card-header bg-warning"><h4>Feedback</h4></div>
      <div className="card-body">
          <div className="col align-items-center ">
                <div className="col" >                   
                    <div className="p-2"><input id='name' type='text' data-testid="name" className='w-100 form-control form-control-sm' placeholder="User Name" onChange={(e) =>{ setUserName(e.target.value)} } /> </div>                   
                </div>
                <div className="col">
                   <div className="p-2"><input id='emailId' type='text' data-testid="emailid" className='w-100 form-control form-control-sm'  placeholder="Email Id"  onChange={(e) => setEmailId(e.target.value)}  /> </div>
                </div>
                <div className="col">
                   <div className="p-2">
                       <select className='w-200 form-control form-control-sm' data-testid="rating" id='rating' onChange={(e) => setRating(e.target.value)}  > <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                       </select>
                    </div>
                </div>
                <div className="col">
                   <div className="p-2"><textarea id='comments' data-testid="comments" className='w-100 form-control form-control-sm' onChange={(e) => setcomments(e.target.value)} rows="5" placeholder="Comments"   /> </div>
                </div>
                <div className="col">
                <button className='btn btn-warning btn-sm' id= "submit" onClick={handleSubmit} >Submit</button>
                </div>
          </div>
      </div> 
  </div> <br></br>

    </form> <br></br>
    <div id='result'>{status}</div>
    <br></br>
      <div >   
        {getStatus()}	 	  	  	 			     	    	 	
      </div>
    </div>
  );
}
