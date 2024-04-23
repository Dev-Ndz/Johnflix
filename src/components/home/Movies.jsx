import MiniatureList from "./miniatureList";

const Movies =() =>{

    return(
        <>
            <main>
                <h1>Movies</h1>
                <MiniatureList APIUrl={"https://api.themoviedb.org/3/trending/movie/day"}/>
            </main>
        </>
    )
}

export default Movies;