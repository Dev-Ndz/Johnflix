import { useParams, useNavigate } from "react-router-dom";
import React, {useState, useContext} from "react";
import Context from "../context/Context";

const SearchBar = () => {
    // const params = useParams();
    // const {query} = params

    const {setSearchKeywords} = useContext(Context)

    const [inputValue, setInputValue] = useState("")
    const handleInput = (e) => setInputValue(e.target.value);

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/home/search`; 
      navigate(path);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchKeywords(inputValue)
        console.log(inputValue);

        setInputValue("");
        routeChange();

    }

    return (

        <section id="search-bar">
            <form onSubmit={handleSubmit}>
                <input  
                    id = "search-box"
                    type = "text"
                    value = {inputValue}
                    onChange = {handleInput}
                    placeholder='search for a show or a movie...' 
                    
                />
            </form>
      </section>
     );
}
 
export default SearchBar;