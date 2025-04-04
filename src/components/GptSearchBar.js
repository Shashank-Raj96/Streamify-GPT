import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";


const GPTSearchBar = () => {

  const dispatch = useDispatch();

  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  // Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + 
      movie + 
      "&include_adult=false&language=en-US&page=1",
       API_OPTIONS
    );

    const json = await data.json()
    return json.results;

  };

  const handleGptSearchClick = async() => {
    console.log(searchText.current.value);

    // Make an API call to GPT and get movie Results
     
    const gptQuery =
     "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
       ". Only give me names of 5 movies , comma seperated like the example reult given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await client.chat.completions.create({
      messages: [
        { role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
    
    });

    if (!gptResults.choices){
      //TODO: Write Error Handling}
    }
    console.log(gptResults.choices?.[0]?.message?.content);
   // Andaz Apna Apna, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan, Chhoti Si Baat

   const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

   // After this split our movie will be Array of movie
   // For each Movie I will search TMDB API

   const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie))
   // Result will be [Promise , Promise , Promise , Promise , Promise]

   const TMDBResults = await Promise.all(promiseArray);
   console.log(TMDBResults);

   dispatch(addGptMovieResult({movieNames: gptMovies , movieResults: TMDBResults}));
};

 

    return(
     <div className="pt-[25%] md:pt-[8%] flex justify-center">
      <form className= "bg-black w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}>

        <input
         ref = {searchText}
         type="text"
          className="p-4 m-4 col-span-9"
           placeholder={lang[langKey].gptSearchPlaceholder}
           />
         <button
         className=" col-span-3 m-4 py-2 px-3 bg-red-700 text-white rounded-lg" 
         onClick={handleGptSearchClick}>
            {lang[langKey].search}
            </button>
      </form>

    </div>
    );
};

export default GPTSearchBar;