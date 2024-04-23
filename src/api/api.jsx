import useFetch from "../hooks/useFetch";

export const useGetTvShowById = async (id) => {

    // const [error, setError] = useState();
    // const [isLoading, setIsLoading] = useState(false);
    // const [data, setData] = useState([]);
    
    const URL = 'https://api.themoviedb.org/3/tv/'+id
    const option = 
    {  
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWE0YTdjNzFhNDU1OGU2ZGU5NDc5YzIwOTU4Nzg5MCIsInN1YiI6IjY2MjE4MTYyMGQxMWYyMDE4NzAyMjJhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ypmwqPJ_-VBysoNkJ2UusMkES6lMGAXVBJNh8bl_Ivk'
        }   
    }

    useEffect(() => {
        useFetch(URL, option)
    },[URL]);

    return {data,error, isPending}
}