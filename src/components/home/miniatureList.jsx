import useFetch from "../../hooks/useFetch";
import Miniature from "../miniature";

const MiniatureList = ({APIUrl}) => {
    const {data, isLoading, error} = useFetch(APIUrl);
    return ( 
        <div className="miniatures">
            {isLoading 
                ? (<div>Loading...</div>)
                : error 
                    ? (<div>Something went wrong ! Please try again. {error.message}</div>)
                    : (data.results) && data.results.map((media) => {
                return (
                <Miniature media={media} />
                )
            })}
        </div>
     );
}
 
export default MiniatureList;