import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

export default function Update() {

  const [name ,setName] = useState("");
  const [email ,setEmail] = useState("");
  const [age ,setAge] = useState(0);

  const navigate = useNavigate();


  const [error , setError] = useState("");
  const {id} = useParams();

  // get single user data 
  const getSingleUser = async () => {
    const response = await fetch (`http://localhost:5000/${id}`);

     const result = await response.json(); 

     if(!response.ok){
      console.log(result.error);
      setError(result.error)
   }

   if(response.ok){
     setError("");
     console.log("updated user" ,result);
     setName(result.name);
     setEmail(result.email);
     setAge(result.age);

   }
  };

  // send updated data to backend
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updateUser =  {name,email,age};

    const response = await fetch(`http://localhost:5000/${id}` ,{
       method:"PUT",
       body:JSON.stringify(updateUser),
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
  
      navigate("/all");
    }
};

  useEffect(() => {
    getSingleUser();
  },[]);

  return (
    <div className='container my-2'>
      {error && <div class="alert alert-danger">{error}</div>}
      <h3 className='text-center '>EDIT THE DATA</h3>
      <form onSubmit={handleUpdate}>
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
