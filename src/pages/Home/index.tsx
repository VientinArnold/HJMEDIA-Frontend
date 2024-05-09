import Navbar from "@/layout/Navbar";
import Hero from "./component/hero";
import Service from "./component/Service";
import Blog from "./component/Blog";
import About from "./component/About";
import Contact from "./component/Contact";
import Faq from "./component/Faq";
import Footer from "@/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="fixed inset-0">
        <video
          className="absolute min-h-full min-w-full rounded-lg object-cover"
          autoPlay
          muted
          loop
        >
          <source
            src="https://blockman.pro/wp-content/uploads/2023/06/pexels-pressmaster-3129957-1280x720-25fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <Navbar />
      <Hero />
      <Service />
      <Blog />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
