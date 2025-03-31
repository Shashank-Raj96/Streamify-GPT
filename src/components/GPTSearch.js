import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GPTSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
         <img src={BG_URL}
          alt="logo" />
        </div>

        <GPTSearchBar/>
        <GptMovieSuggestion/>
    </div>
 );

};

export default GPTSearch ;