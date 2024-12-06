
const VideoSlider = () => {
  return (
    <section className="bg-gray-100  p-10">
      <div className="flex flex-col w-full  lg:flex-row gap-2 items-center justify-center ">
         <div className="w-full lg:mr-0  md:h-full">
            <video width="900px" className="rounded-3xl p-2"  controls>
              <source src="/videos/VID1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full  lg:w-full  md:h-full"> 
            <video width="900px" className="rounded-xl"  controls>
              <source src="/videos/VID2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
      </div>
      </section>
  );
};

export default VideoSlider;
