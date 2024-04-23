import { useLoaderData } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { urlToImg } from "../utils/urlToImg";
import './Movie.css'
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";



export const loader = async ({params}) => {
    return params.id;
}

const Movie = () => {

    const id = useLoaderData();

    const {data,error, isPending} = useFetch('https://api.themoviedb.org/3/movie/'+id);

    return ( 
    <>
    <div className="main-container" style={{backgroundImage:"url("+urlToImg(data.backdrop_path,"original")+")"}}>
        <Navbar />
        <div className="space"></div>
        <div className="content">
            <div className="title">
                {data.length!==0 &&
                    (<>
                        <h1>{data.title}</h1>
                        <h2>{data.tagline}</h2>
                        <div className="info">
                            <div className="date">{data.release_date.substring(0,4)}</div> 
                            <div className="genre">{data.genres.map(genre => genre.name).join(", ")}</div>
                        </div>
                    </>)
                }

            </div>
            <div className="overview">
                <p>{data.overview}</p>
                <div className="action-btn">
                    <button className="watch">watch</button>
                    <button className="add-to-list">add to My List</button>
                </div>
            </div>
        </div>

    </div>
    </>

     );
}
 
export default Movie;