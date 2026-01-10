import { TrendingUp, DollarSign } from 'lucide-react';

export default function AccountAudits() {
  const platforms = [
    { name: 'ChatGPT', spend: '$12,450', conversions: 234, roas: 4.2, color: 'bg-green-500' },
    { name: 'Meta', spend: '$8,900', conversions: 187, roas: 3.8, color: 'bg-blue-600' },
    { name: 'Reddit', spend: '$5,200', conversions: 92, roas: 2.9, color: 'bg-orange-500' },
    { name: 'Perplexity', spend: '$4,100', conversions: 78, roas: 3.5, color: 'bg-purple-500' },
    { name: 'Amazon', spend: '$15,800', conversions: 412, roas: 5.1, color: 'bg-yellow-600' },
    { name: 'LinkedIn', spend: '$6,700', conversions: 156, roas: 3.2, color: 'bg-blue-700' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Complete Account Audits
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Monitor performance across all platforms in one unified dashboard
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                    {platform.name[0]}
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{platform.roas}x</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{platform.name}</h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-sm">Spend</span>
                    </div>
                    <span className="font-semibold text-gray-900">{platform.spend}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm">Conversions</span>
                    </div>
                    <span className="font-semibold text-gray-900">{platform.conversions}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                    <TrendingUp className="w-4 h-4" />
                    <span>ROAS: {platform.roas}x</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
