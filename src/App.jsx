import AboutSection from "./components/About/AboutSection";
import ChatWidget from "./components/chatwidget/ChatWidget";
import GetInTouch from "./components/Contacts/GetInTouch";
import EducationSection from "./components/EducationSection/EducationSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProjectsSection from "./components/Projects/ProjectSections";
import SkillsSection from "./components/Skills/SkillsSection";

function App() {
  return (
    <>
      <Header />
      <div className="pt-16">
        <Hero />

        {/* ChatWidget */}
        <ChatWidget />
        
        {/* About  */}
        <AboutSection />
        
        {/* Skills  */}
        <SkillsSection />
        
        {/* Education  */}
        <EducationSection />

        {/* Projects  */}
        <ProjectsSection />
        
        {/* Experience  */}
        <ExperienceSection />
        
        {/* Contacts  */}
        <GetInTouch />

        {/* Footer  */}
        <Footer/>
      </div>
    </>
  );
}

export default App;
