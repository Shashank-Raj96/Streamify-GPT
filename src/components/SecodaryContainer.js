import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    return (
        movies.addNowPlayingMovies && (
        <div className="  bg-black">
            <div className="mt-0 md:-mt-52 pl-4 md:pl-8 relative z-20">
            <MovieList title ={"Now Playing"} movies={movies.addNowPlayingMovies}/>
            <MovieList title ={"Trending"} movies={movies.addNowPlayingMovies}/>
            <MovieList title ={"Popular "} movies={movies.addPopularMovies}/>
            <MovieList title ={"Upcoming Movies"} movies={movies.addNowPlayingMovies}/>
            <MovieList title ={"Horror"} movies={movies.addNowPlayingMovies}/>
            </div>
            {/*
                Movie List - Popular
                 MovieCard*n
                Movie List - Now Playing
                Movie List - Trending
                Movie List - Horror

            */}
        </div>
        )
    );
};

export default SecondaryContainer;