import { Link, NavLink } from "react-router-dom"
import SearchBar from "../searchBar"
import './navbar.css'

const Navbar = () => {

    return (
        <header>

            <Link to="/home" className="logo">
                <img src="./AmaJohn-Prime.svg" alt="logo" />
                <div>AmaJhon Prime</div>
            </Link>

            <SearchBar />
            <nav>
                <NavLink to="tv"> TV Shows</NavLink>
                <NavLink to="movies">Movies</NavLink>
                <NavLink to=''>New & Popular</NavLink>
                <NavLink>My List</NavLink>
            </nav>
            <Link className="user-profil">profile</Link>
        </header>
    )
}

export default Navbar;