const VideoBackTitle = ({title , overview}) => {
    return (
        <div className="w-screen aspect-video pt-[17%] md:pt-[8%] px-7 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>

            <div className="my-4 md:m-0">
                <button className=" bg-white text-black py-2 md:py-4 px-2 md:px-12 text-xl  rounded-lg hover:bg-opacity-70">
                   ▶️ Play 
                </button>

                <button  className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-70">
                  ℹ️ More Info
                </button>

            </div>
       </div>
    );
};

export default VideoBackTitle;