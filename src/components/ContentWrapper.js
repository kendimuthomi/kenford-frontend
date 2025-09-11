export default function ContentWrapper({ title, children }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        {title && (
          <h1 className="text-4xl font-bold text-blue-900 mb-6">{title}</h1>
        )}
        <div className="text-gray-700 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
