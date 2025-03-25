const VideoBackTitle = ({title , overview}) => {
    return (
        <div className="w-scree aspect-video pt-[17%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/3">{overview}</p>

            <div className="">
                <button className=" bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-70">
                   ▶️ Play 
                </button>

                <button  className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-70">
                  ℹ️ More Info
                </button>

            </div>
       </div>
    );
};

export default VideoBackTitle;