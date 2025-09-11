import ContentWrapper from "../components/ContentWrapper";

export default function About() {
  return (
    <ContentWrapper title="About Kenford">
      <p className="mb-6">
        Kenford School is committed to nurturing excellence, creativity, and character. 
        Our vision is to develop students who are confident, competent, and compassionate 
        leaders of tomorrow. We combine academic rigor with holistic growth to prepare 
        learners for success in a rapidly changing world.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Mission */}
        <div className="bg-blue-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-blue-900 mb-3">🎯 Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To provide high-quality, inclusive education that nurtures every child’s 
            potential and fosters intellectual curiosity, creativity, and lifelong learning.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-green-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-green-900 mb-3">🌟 Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To be a leading center of educational excellence in Kenya, recognized for 
            producing well-rounded individuals who thrive academically, socially, and morally.
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
}
