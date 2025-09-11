import { motion } from "framer-motion";
import heroVideo from "../assets/hero-video.mp4";
import DiscoverKenford from "../components/DiscoverKenford";

export default function Home() {
  return (
    <div>
       {/* Hero Section with Video Background */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Hero Text */}
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-4"
          >
            Welcome to Kenford Progressive Academy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl"
          >
            Excellence • Creativity • Character
          </motion.p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Why Choose Kenford?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Academic Excellence", desc: "Strong curriculum ensuring outstanding results." },
              { title: "Holistic Development", desc: "Sports, arts, and leadership opportunities." },
              { title: "Safe Environment", desc: "A nurturing community for every learner." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white shadow-lg rounded-2xl border hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-semibold text-blue-800">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Kenford Section */}
      <DiscoverKenford />

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Kenford Community</h2>
        <p className="mb-6 text-lg">Admissions are open for the new academic year.</p>
        <a
          href="/admissions"
          className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-300 transition"
        >
          Apply Now
        </a>
      </section>
    </div>
  );
}
