import ContentWrapper from "../components/ContentWrapper";

export default function News() {
  const newsList = [
    { id: 1, title: "Sports Day 2025", date: "Sept 15, 2025", content: "Our annual sports day will be held next week. All parents are welcome!" },
    { id: 2, title: "CBC Training", date: "Aug 20, 2025", content: "Teachers completed training on CBC curriculum delivery." },
  ];

  return (
    <ContentWrapper title="News & Events">
      <div className="mt-6 space-y-4 max-w-2xl mx-auto">
        {newsList.map(item => (
          <div key={item.id} className="p-4 border rounded-lg shadow text-left">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.content}</p>
            <small className="text-gray-500">{item.date}</small>
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
}
