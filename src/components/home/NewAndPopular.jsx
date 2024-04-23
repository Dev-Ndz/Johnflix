import MiniatureList from "./miniatureList";

const NewAndPopular =() =>{
    return(
        <>
            <main>
                <h1>New and Popular</h1>
                <MiniatureList APIUrl={"https://api.themoviedb.org/3/trending/all/week"}/>
            </main>
        </>
    )
}

export default NewAndPopular;