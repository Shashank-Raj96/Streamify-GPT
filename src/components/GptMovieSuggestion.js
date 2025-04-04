import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {

    const {movieResults , movieNames} = useSelector((store) => store.gpt);
     if (!movieNames) return null;

     console.log(movieNames);
     console.log("10" , movieResults)
    return(
     <div className="p-3 m-3 bg-black text-white bg-opacity-70">
      <div>
        {movieNames.map((movieName,index ) => (
            <MovieList
             key={movieName}
              title={movieName}
              movies = {movieResults[index]}
             />
         ))}
       
      </div>
    </div>
    );

};

export default GptMovieSuggestion;