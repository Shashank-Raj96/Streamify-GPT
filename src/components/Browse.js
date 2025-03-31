
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import usePopularMovies from "../hook/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecodaryContainer";
import GPTSearch from "./GPTSearch";

const Browse = () => {

   const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
   
    return (
        <div>
       <Header/>
       {showGptSearch ? (
         <GPTSearch />
       ) : (
         <>
       <MainContainer/>
       <SecondaryContainer/>
       </>
       )}
       
           {/*
           
           Main container
             - Video Background
             - Video Title
            
            SecondaryContainer 
            - Movie list
             - Cards * n


          */}



       </div> 
    );
 };
 
export default Browse;