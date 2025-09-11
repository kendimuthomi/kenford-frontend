import ContentWrapper from "../components/ContentWrapper";

export default function Academics() {
  return (
    <ContentWrapper title="Academics">
      <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
        At Kenford School, we follow a rich curriculum designed to develop
        intellectual, social, and creative abilities in all learners.
      </p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-semibold">Early Years</h2>
          <p className="text-gray-600">Playgroup, Nursery, and Kindergarten with a focus on foundational skills.</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-semibold">Primary School</h2>
          <p className="text-gray-600">Competency-based curriculum (CBC) fostering creativity and problem solving.</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-semibold">Junior & Senior School</h2>
          <p className="text-gray-600">Strong academic focus with extracurricular activities for holistic growth.</p>
        </div>
      </div>
    </ContentWrapper>
  );
}
