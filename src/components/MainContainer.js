import { useSelector } from "react-redux";
import VideoBackTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
     if (movies === null)  return ;
       

    const mainMovie = movies?.[0];
   

    const {original_title, overview, id} = mainMovie;


    return (
        <div className=" pt-[25%] bg-black md:pt-0">
            <VideoBackTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    );
};

export default MainContainer;