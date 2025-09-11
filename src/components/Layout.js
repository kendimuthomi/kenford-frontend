import Navbar from "./Navbar";
import Footer from "./Footer";
import heroVideo from "../assets/hero-video.mp4";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 -z-10" />

      {/* Page Content */}
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
