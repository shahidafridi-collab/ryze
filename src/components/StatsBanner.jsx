export default function StatsBanner() {
  const stats = [
    '2000+ CLIENTS',
    '700+ AGENCIES',
    '23+ COUNTRIES',
    '$500M+ AD SPEND MANAGED',
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-500 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(3)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center">
              {stats.map((stat, index) => (
                <div key={`${groupIndex}-${index}`} className="flex items-center">
                  <span className="text-white font-bold text-xl mx-8">{stat}</span>
                  <span className="text-white text-2xl mx-8">•</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
