import ContentWrapper from "../components/ContentWrapper";

export default function Admissions() {
  return (
    <ContentWrapper title="Admissions">
      <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
        We welcome new learners into our vibrant community. Admissions are open
        for all levels based on availability.
      </p>

      <div className="mt-6 max-w-md mx-auto p-4 border rounded-lg shadow">
        <h2 className="text-xl font-semibold">How to Apply</h2>
        <ol className="list-decimal list-inside mt-4 space-y-2">
        <li>Download and fill the appropriate admission form below</li>
        <li>Submit required documents</li>
        <li>Email the completed form to <strong>kenford.pa@gmail.com</strong></li>
      </ol>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <a
          href="/forms/Kenford-Playgroup-Admission-Form.pdf"
          download
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
        >
          📄 Download Playgroup Admission Form
        </a>

        <a
          href="/forms/Kenford-Transfer-Admission-Form.pdf"
          download
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition"
        >
          📄 Download Transfer Admission Form
        </a>
      </div>

      <p className="mt-6 text-gray-700">
        Once filled, kindly submit your form and documents to:  
        <a
          href="mailto:admissions@kenfordschool.ac.ke"
          className="text-blue-700 font-semibold underline"
        >
          kenford.pa@gmail.com
        </a>
        </p>
    </ContentWrapper>
  );
}
