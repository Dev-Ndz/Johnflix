import { useLoaderData } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { urlToImg } from "../utils/urlToImg";
import './TvShow.css'
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";



export const loader = async ({params}) => {
    return params.id;
}

const TvShow = () => {

    const id = useLoaderData();

    const {data,error, isPending} = useFetch('https://api.themoviedb.org/3/tv/'+id);

    const [date, setDate] = useState()
    const [seasonNumber, setSeasonNumber] = useState()
    const [genre, setGenre] = useState()
    const [tagline, setTagline] = useState()
    const [overview, setOverview] = useState()

    useEffect(() =>{
        console.log("length",data.length)
        console.log(data)
        if(data.length!==0){
            setDate(data.first_air_date.substring(0,4));
            setSeasonNumber(data.last_episode_to_air.season_number);
            setGenre(data.genres.map(genre => genre.name).join(", "));
            setTagline(data.tagline)
            setOverview(data.overview)
        }
    },[data])

    return ( 
    <>
    <div className="main-container" style={{backgroundImage:"url("+urlToImg(data.backdrop_path,"original")+")"}}>
        <Navbar />
        <div className="space"></div>
        <div className="content">
            <div className="title">
                <h1>{data.original_name}</h1>
                <h2>{tagline}</h2>
                <div className="info">
                    <div className="date">{date}</div> 
                    <div className="season">{seasonNumber} season</div>
                    <div className="genre">{genre}</div>
                </div>
            </div>
            <div className="overview">
                <p>{overview}</p>
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
 
export default TvShow;