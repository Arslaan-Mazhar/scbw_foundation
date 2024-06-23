
const VideoSlider = () => {
  return (
    <section className="bg-gray-100  p-10">
      <div className="flex items-stretch m-2 gap-10 p-2">
         <div>
            <video width="800" controls>
              <source src="/videos/VID1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <video width="800"  controls>
              <source src="/videos/VID2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
      </div>
      </section>
  );
};

export default VideoSlider;
