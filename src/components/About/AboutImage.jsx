import profile from "../../assets/profile11.png"; // replace with your image

const AboutImage = () => {
  return (
    <div className="flex justify-center">
      <img
        src={profile}
        alt="shameer ali"
        className="w-[360px] h-[460px] object-cover rounded-3xl shadow-xl grayscale"
      />
    </div>
  );
};

export default AboutImage;
