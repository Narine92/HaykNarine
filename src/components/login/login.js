import React, { useState } from "react";
import { API_URL } from "../../constants";



import './login.css';

const Login = ({ setIsLoggedIn }) => {
    const[username, setUsername1]=useState("");
    const[password, setPassword]=useState("");

    const handleLogin = () => {
        let item={username,password};
        
        fetch(`${API_URL}/auth/sign-in`, {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: [JSON.stringify(item)]
        }).then((res) => res.json()).then((res) => {
            if(username==="User_1"){
            localStorage.setItem("token",JSON.stringify(res))
            setIsLoggedIn(true);}
            else if(username==="User_2"){
                localStorage.setItem("token",JSON.stringify(res))
                setIsLoggedIn(true)

            }
        })
}

 
return (
    <div className="wrapper">
        <h1>Login page</h1>
            <input type="text"
                   placeholder="Username"
                   onChange={(e) => setUsername1(e.target.value) }
                   className="form-control"/>
            <input type="password"
                   placeholder="Password"
                   onChange={(e) => setPassword(e.target.value)}
                   className="form-control"/>
        <button onClick={handleLogin} className="btn-submit">Login</button>
    </div>
    );
}

export default Login

