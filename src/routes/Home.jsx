import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

import './home.css';

const Home =() =>{



    return(
        <>
        <div className="background">
            <Navbar />
            <Outlet />
            </div>
        </>

    )
}

export default Home;