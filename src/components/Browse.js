
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import usePopularMovies from "../hook/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecodaryContainer";

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
   
    return (
        <div>
       <Header/>

       <MainContainer/>
       <SecondaryContainer/>
       
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