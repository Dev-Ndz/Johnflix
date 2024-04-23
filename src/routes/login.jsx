import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/home`; 
      navigate(path);
    }

    return ( 
<>

        <form onSubmit={() => {routeChange();}}>
        <input 
            type="text"
            placeholder="email"
            value = {inputEmail}
            onChange = {(e) => setInputEmail(e.target.value)}
        ></input>
        <input 
            type="password"
            placeholder="password"
            value = {inputPassword}
            onChange = {(e) => setInputPassword(e.target.value)}
        ></input>
        <input type="submit" value="login" />
    </form>
        <Link to="/home">continue as guest</Link>
        </>
     );
}
 
export default Login;