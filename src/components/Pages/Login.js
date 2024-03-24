import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Login() {

  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem("user");
  if(auth){
    navigate("/")
  }
});
  
  const [formData, setFormData] = useState({
    
    password: '',
    email: '',
  });

  const [errors, setErrors] = useState({
   
    password: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login successful")
    // const { email,password } = formData;
    // const res = await fetch("http://localhost:4004/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     email,password
    //   })

    // });

    // const datahit = await res.json();
    // if (datahit.status === 422 || !datahit) {
    //   alert("registered not complete");
    //   console.log("not registered");
    // } else {
    //   alert("registered completed successfully");
    //   localStorage.setItem("user", JSON.stringify(datahit));
    //   console.log("registered")
    //   navigate("/")
    //   setFormData({...formData, email: "", password: "" })
    // }

  


    // Basic validation
    let hasError = false;
    const newErrors = {  password: '', email: '' };

  

    if (formData.password === '') {
      newErrors.password = 'Password is required';
      hasError = true;
    }

    if (formData.email === '') {
        newErrors.email = '@example.com';
        hasError = true;
      }

    if (hasError) {
      setErrors(newErrors);
    } else {
      // Here, you can perform your login logic
      console.log('Login data:', formData);
    }
  };

  return (
   
    <div style={{
      background: `url(https://itseeze.com/_webedit/cached-images/2761-0-0-1250-10000-7500-1344.png)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      minHeight: "100vh",
    
    }}>
     <div style={{backgroundColor: "#03172aba", padding: "60px", borderRadius: "20px", color:"white"}}>
     <h2 style={{textAlign:"center", fontSize: "38px"}}>Login</h2>
      <form onSubmit={handleSubmit}>
       

        <div className='form-group mb-3'>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className='form-control'
           
          />
          <span className="error"style={{color: "red"}}>{errors.email}</span>
        </div>

        <div className='form-group mb-3'>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className='form-control'
          />
          <span className="error" style={{color: "red"}}>{errors.password}</span>
        </div>
        <button type="submit" className='btn btn-primary col-12 mt-3'>Submit</button>
        <span >if you are not registered please signup <Link to="/signup">SignUp</Link></span>
      </form>
    </div>
    </div>
    
  );
}

export default Login;