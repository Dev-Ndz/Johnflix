import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
        setInputValue("");
    }

    return(
        <>
        <div id="register-container">
            <p className="label">Enter your email to start your subscription.</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter your email here"
                    value = {inputValue}
                    onChange = {(e) => setInputValue(e.target.value)}
                >
                </input>
                <input type="submit" value="Sign up now" />
            </form>
        </div>
        <div id="to-login">
            already register ?
            <Link to="/login">Login</Link>
        </div>
        </>
    )
}

export default Register;