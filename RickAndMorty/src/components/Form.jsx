
import './Form.css'

import React from 'react'
import validate from './validation'



export default function Form(props) {
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
        
        <div >
            <form onSubmit={handleSubmit}>
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
            </div>


    )
}