import MiniatureList from "./miniatureList";
import { useContext } from "react";
import Context from "../../context/Context";

const Tv =() =>{
    const {searchKeywords} = useContext(Context)
    return(
        <>
            <main>
                <h1>Search for : {searchKeywords}</h1>
                <MiniatureList APIUrl={`https://api.themoviedb.org/3/search/multi?query=${searchKeywords}&include_adult=false&language=en-US&page=1`}/>
            </main>
        </>
    )
}

export default Tv;