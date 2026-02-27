import AboutHeader from "./AboutHeader";
import AboutImage from "./AboutImage";
import AboutDetails from "./AboutDetails";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-white px-6 py-20">
      <AboutHeader />

      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <AboutImage />
        <AboutDetails />
      </div>
    </section>
  );
};

export default AboutSection;
