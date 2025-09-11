import school1 from "../assets/School1.jpeg";
import school2 from "../assets/School2.jpeg";
import school3 from "../assets/School3.jpeg";
import school4 from "../assets/School4.jpeg";
import school5 from "../assets/School5.jpeg";
import school6 from "../assets/School6.jpeg";
import sports from "../assets/School7.jpeg";
import event from "../assets/event.mp4"; // video example
import event1 from "../assets/event1.mp4";
import event2 from "../assets/event2.mp4";
import event3 from "../assets/event3.mp4";

export default function DiscoverKenford() {
  const media = [
    { type: "image", src: school1, alt: "Kenford School Campus" },
    { type: "image", src: school2, alt: "Students in Class" },
    { type: "image", src: sports, alt: "Sports Activities" },
    { type: "image", src: school3, alt: "Art Class" },
    { type: "image", src: school4, alt: "Science Lab" },
    { type: "image", src: school5, alt: "Library" },
    { type: "image", src: school6, alt: "Playground" },
    { type: "video", src: event1, alt: "School Event" },
    { type: "video", src: event2, alt: "School Event" },
    { type: "video", src: event3, alt: "School Event" },
    { type: "video", src: event, alt: "School Event" },
  ];

  return (
    <section className="py-16 px-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Discover Kenford
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {media.map((item, index) =>
          item.type === "image" ? (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className="rounded-xl shadow-md object-cover w-full h-64"
            />
          ) : (
            <video
              key={index}
              src={item.src}
              controls
              className="rounded-xl shadow-md w-full h-64 object-cover"
            />
          )
        )}
      </div>
    </section>
  );
}
