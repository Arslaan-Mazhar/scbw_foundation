
const GoogleMap: React.FC = () => {
  const src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.3420807439688!2d73.95097498697812!3d32.70109876245114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f092ff3ebe943%3A0x116b4073688c9d!2sspecial%20campaign%20for%20the%20blind%20welfare%20Foundation!5e0!3m2!1sen!2s!4v1721894950664!5m2!1sen!2s";

  return (
    <div className="map-container w-full h-64 md:h-[30.5rem] ">
      <iframe
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        src={src}
      ></iframe>
    </div>
  );
};

export default GoogleMap;
