import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GPTSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
        <div className="fixed -z-10">
         <img className="h-screen object-cover md:h-full" src={BG_URL}
          alt="logo" />
          </div>
     <div className="">
        <GPTSearchBar/>
        <GptMovieSuggestion/>
    </div>
    </>
 );

};

export default GPTSearch ;