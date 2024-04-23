import { Link } from "react-router-dom";
import { urlToImg } from "../utils/urlToImg";

const Miniature = ({media}) => {

    let link ="";
    if (media.media_type=="movie"){
        link="/movie/"+media.id
    }else{
        link="/tv-show/"+media.id
    }
    return ( 
        <>
        <Link to={link}>
        <img 
            src={urlToImg(media.backdrop_path, "w300")} 
            alt={media.title} 
        />
        </Link>
        </>
     );
}
 
export default Miniature;