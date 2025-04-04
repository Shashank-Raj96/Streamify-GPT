import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
  
const useNowPlayingMovies = () => {
   // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store) => store.movies.addNowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?page=1',
            API_OPTIONS
        ); 
        const json = await data.json();
        
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
        
    }, []);
};

export default useNowPlayingMovies;
