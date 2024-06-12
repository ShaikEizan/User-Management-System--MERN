import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [name ,setName] = useState("");
  const [email ,setEmail] = useState("");
  const [age ,setAge] = useState(0);

  const navigate =useNavigate();

  const [error , setError] = useState("");

// console.log(name,email,age);
      const handleSubmit = async (e) => {
      e.preventDefault();
      const addUser =  {name,email,age};

      const response = await fetch("http://localhost:5000/new" ,{
         method:"POST",
         body:JSON.stringify(addUser),
         headers:{
          "content-Type":"application/json",  
         },
      });

      const result = await response.json();

      if(!response.ok){
         console.log(result.error);
         setError(result.error)
      }

      if(response.ok){
        console.log(result);
        setError("");
        setName("");
        setEmail("");
        setAge(0);

        navigate("/all");
      }
};
  return (
  <div className='container my-2'>
      {error && <div class="alert alert-danger">{error}</div>}
      <h3 className='text-center '>ENTER THE DATA</h3>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
      <label  className="form-label fw-bold ">Name</label>
      <input type="text" className="form-control 
      fw-bold border border-success 
      p-2 mb-2"  value={name} onChange={(e) => setName(e.target.value)}/>

      </div>  
      <div className="mb-3">
      <label  className="form-label fw-bold">Email address</label>
      <input type="email" className="form-control
       fw-bold border border-success 
       p-2 mb-2" value={email} onChange={(e) => setEmail(e.target.value)}/>


      </div>
      <div className="mb-3">
      <label className="form-label fw-bold">Age</label>
      <input type="number" className="form-control
       fw-bold border border-success
      p-2 mb-2" value={age} onChange={(e) => setAge(e.target.value)}/>

      </div>
        
      <div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      </form>
  </div>
  )
}
