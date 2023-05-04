import React from 'react';

import './Form.css'

import validate from './validation'



export default function Forms(props) {
    const [userData, setUserData] = React.useState({
     username: '', 
     password: '' });
    const handleInputChange =(event)=>{
        const {name,value}=event.target
        setUserData({...userData,[name]:value})
        setErrors(
            validate({
               ...userData,
               [name]: value,
            })
         );
    }

    const [errors,setErrors]= React.useState({
        username:'',
        password:'',
        
        }
        )
       
        const handleSubmit =(event) => {
            event.preventDefault();
            props.login(userData)

        }

    return (
        
        
            <form className='form-container' onSubmit={handleSubmit}>
                <label>Username</label>
                    <input
                    
                    onChange={handleInputChange}
                    id='username'
                    htmlFor='username'
                    name='username'
                    placeholder="ingrese su usuario"
                    type="text"
                    value={userData.username}>
                    </input>
                    <p>{errors.username}</p>
                    <label>Password</label>
                    <input
                   
                    onChange={handleInputChange}
                    id='password'
                    htmlFor='password'
                    name='password'
                    placeholder="ingrese su password"
                    type="password"
                    value={userData.password}
                    ></input>
                     <p >{errors.password}</p>
                    <button >Login</button>
            


            </form>
        


    )
}