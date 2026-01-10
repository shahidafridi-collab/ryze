export default function PlatformLogos() {
  const platforms = [
    { name: 'Google Ads', icon: '🔍' },
    { name: 'Meta', icon: '📱' },
    { name: 'ChatGPT', icon: '🤖' },
    { name: 'Perplexity', icon: '⚡' },
    { name: 'LinkedIn', icon: '💼' },
    { name: 'Amazon', icon: '📦' },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-wide">
          Integrated with leading ad platforms
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <span className="text-3xl">{platform.icon}</span>
              <span className="font-semibold text-lg">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
