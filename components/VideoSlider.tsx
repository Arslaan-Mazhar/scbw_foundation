
const VideoSlider = () => {
  return (
    <section className="bg-gray-100  p-10">
      <div className="flex flex-col md:flex-row items-center justify-center m-2">
         <div className="flex-none  md:h-full">
            <video width="800" className="rounded-3xl p-2"  controls>
              <source src="/videos/VID1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex-none w-full md:w-1/2  md:h-full"> 
            <video width="800" className="rounded-xl"  controls>
              <source src="/videos/VID2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
      </div>
      </section>
  );
};

export default VideoSlider;
