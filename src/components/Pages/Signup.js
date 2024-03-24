import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function SignUp() {

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/")
    }
  });

  const [formData, setFormData] = useState({

    name: '',
    email: '',
    password: '',
    address: '',

  });

  const [errors, setErrors] = useState({

    name: '',
    email: '',
    password: '',
    address: '',

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Basic validation
    let hasError = false;
    const newErrors = {
      name: '',
      email: '',
      password: '',
      address: '',
    };
  
    if (formData.name === '') {
      newErrors.name = 'Name is required';
      hasError = true;
    }
  
    if (formData.email === '') {
      newErrors.email = 'Email is required';
      hasError = true;
    }
  
    if (formData.password === '') {
      newErrors.password = 'Password is required';
      hasError = true;
    }
  
    if (formData.address === '') {
      newErrors.address = 'Address is required';
      hasError = true;
    }
  
    if (hasError) {
      setErrors(newErrors);
    } else {
      // Validation passed, perform further actions
      console.log('SignUp successful');
      alert('Signup successful');
      
      // Here, you can perform your signup logic
      // For example, you can make a fetch request to your backend
      // and handle the signup process there
      
      // Once signup is successful, you can navigate the user to the desired route
      navigate("/");
      
      // Clear form data
      setFormData({
        name: '',
        email: '',
        password: '',
        address: '',
      });
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
      <div style={{ backgroundColor: "#03172aba", padding: "60px", borderRadius: "20px", color: "white" }}>
        <h2 style={{ textAlign: "center", fontSize: "38px" }}>SignUp</h2>
        <form onSubmit={handleSubmit}>


          <div className='form-group mb-3'>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className='form-control'

            />
            <span className="error" style={{ color: "red" }}>{errors.name}</span>
          </div>




          <div className='form-group mb-3'>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className='form-control'

            />
            <span className="error" style={{ color: "red" }}>{errors.email}</span>
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
            <span className="error" style={{ color: "red" }}>{errors.password}</span>
          </div>


          <div className='form-group mb-3'>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className='form-control'

            />
            <span className="error" style={{ color: "red" }}>{errors.address}</span>
          </div>



          <button type="submit" className='btn btn-primary col-12 mt-3'>Submit</button>
          <span>if you already have an account please login <Link to="/login">Login</Link></span>
        </form>
      </div>
    </div>

  );
}

export default SignUp;