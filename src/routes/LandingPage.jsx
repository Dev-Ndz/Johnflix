import { useState } from "react";
import { Outlet } from "react-router-dom";

import { getSlogan } from "../utils/getSlogan";

import './LandingPage.css'



const Register = () => {
    const [slogan, setSlogan] = useState(getSlogan());

    return(
        <>
            <div className="background">
            <main className="landing">
                <div className="title-container">
                <h1 onClick={() =>setSlogan(getSlogan)}>{slogan}</h1>

                </div>
            <div className="action-btn">
            <Outlet />
            </div>
            </main>
            </div>
        </>

    )
}

export default Register;