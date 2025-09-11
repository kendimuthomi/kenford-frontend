import ContentWrapper from "../components/ContentWrapper";

export default function Contact() {
  return (
    <ContentWrapper title="Contact Us">
      <p className="mb-6">
        Get in touch with us for inquiries, admissions, or collaborations. 
        We’d love to hear from you.
      </p>

      <div className="space-y-4 text-lg">
        <p>
          📧 <strong>Email:</strong>{" "}
          <a
            href="mailto:kenford.pa@gmail.com"
            className="text-blue-700 font-semibold underline"
          >
            kenford.pa@gmail.com
          </a>
        </p>

        <p>
          📞 <strong>Phone:</strong>{" "}
          <a
            href="tel:+254758771163"
            className="text-blue-700 font-semibold underline"
          >
            +254 758 771 163
          </a>
        </p>

        <p>
          📍 <strong>Address:</strong>  
          We are located off Spine Road, next to Maria Hospital within Kayole Central Region
        </p>
      </div>
    </ContentWrapper>
  );
}
