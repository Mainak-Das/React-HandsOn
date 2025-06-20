import React,{ useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

export default function Feedback() {
//   let sh=[];
  
  //Create state variables using useState hook
  const [userName, setUserName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');
  const [status, setStatus] = useState('');
  const [userFeedback, setUserFeedback] = useState([]);

   const handleSubmit = (e) => {
    e.preventDefault();

    // Push new feedback to the userFeedback array
    const newFeedback = { userName, emailId, rating, comments };
    setUserFeedback([...userFeedback, newFeedback]);

    // Set the status message
    setStatus('Thanks for your feedback');

    // Clear form fields
    setUserName('');
    setEmailId('');
    setRating('');
    setComments('');
  };
 
 const getStatus= () => {
  
    return (
        
        <div style={{backgroundColor:"grey",color:"#ffffff"}}>
        
        <div>         
        {/*  Create table to render the feedback information entered in the form using iteration*/}
        <table className='table table-hover'>
          <thead>
            <td>User Name</td>
            <td>Email Id</td>
            <td>Rating</td>
            <td>Comments</td>
          </thead>
          <tbody>
          {userFeedback.map((fb, index) => (
            <tr key={index}>
              <td>{fb.userName}</td>
              <td>{fb.emailId}</td>
              <td>{fb.rating}</td>
              <td>{fb.comments}</td>
            </tr>
          ))}
        </tbody>

        </table>
        </div>
            
        </div>
      );
 }

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
                    <div className="p-2">
                            {/* {/Implement code for Use Name input field/} */}
                        <input type='text' className='w-100 form-control form-control-sm' id='name' placeholder='User Name' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                    </div>                   
                </div>
                <div className="col">
                   <div className="p-2">
                            {/* {/Implement code for Email Id input field/}  */}
                            <input type='text' className='w-100 form-control form-control-sm' id='emailId' placeholder='Email Id' value={emailId} onChange={(e)=>setEmailId(e.target.value)}/>          
                   </div>
                </div>
                <div className="col">
                   <div className="p-2">
                       {/* {/Implement code for Rating dropdown field/} */}
                       <input type='dropdown' className='w-100 form-control form-control-sm' id='rating'  value={rating} onChange={(e)=>setRating(e.target.value)}/>
                    </div>
                </div>
                <div className="col">
                   <div className="p-2">
                        {/* {/Implement code for Comments textarea field/} */}
                        <input type='text' className='w-100 form-control form-control-sm' id='comments' placeholder='Comments' value={comments} onChange={(e)=>setComments(e.target.value)}/>

                   </div>
                </div>
                <div className="col">
                        {/* {/Implement code for Submit button field/} */}
                         <button type="submit" id="click" className="btn btn-warning btn-sm" onClick={handleSubmit}>Submit</button>
                </div>
          </div>
      </div> 
  </div> <br></br>

    </form> <br></br>
    {/* {/Create a div tag with an id result to display the message set to status variable/} */}
    <div id='result'>{status}</div>

    <br></br>
      <div >   
        {/* {/Create a div tag to render the getStatus() function/} */}
        <div>{getStatus()}</div>

      </div>
    </div>
  );
}