import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import CourseSection from "./components/CourseSection";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import FooterSection from "./components/FooterSection";
import AboutCard from "./components/AboutCard";

export default function App() {
  return (
    <div className="bg-[#0d0f14] min-h-screen">
      <HeaderSection />
      <HeroSection />
      <AboutSection/>
      <SkillSection />
      <CourseSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
