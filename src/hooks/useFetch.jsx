import {useState, useEffect, useRef } from "react";

const useFetch = (url) => {

    const options =
    {  
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWE0YTdjNzFhNDU1OGU2ZGU5NDc5YzIwOTU4Nzg5MCIsInN1YiI6IjY2MjE4MTYyMGQxMWYyMDE4NzAyMjJhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ypmwqPJ_-VBysoNkJ2UusMkES6lMGAXVBJNh8bl_Ivk'
        }   
    }

    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const abortControllerRef = useRef(null);

    const fetchData = async (url) => {
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();
        setIsLoading(true);
        try{
            const response = await fetch(url,{ ...options, signal:abortControllerRef.current?.signal});
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json(); 
            setData(data);
            setError(null);
        }catch(err){
            if (err.name === "AbortError"){
                console.log('Aborted');
                return;
            }
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }
    const refetch = (url) => fetchData(url);

    useEffect(() => {
        fetchData(url)
    },[url]);

    return {data, isLoading, error, refetch}

}

export default useFetch;

