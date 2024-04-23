import MiniatureList from "./miniatureList";

const Tv =() =>{

    return(
        <>
            <main>
                <h1>TV Shows</h1>
                <MiniatureList APIUrl={"https://api.themoviedb.org/3/trending/tv/day"}/>
            </main>
        </>
    )
}

export default Tv;