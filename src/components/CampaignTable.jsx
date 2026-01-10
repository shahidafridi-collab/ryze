import { TrendingUp, TrendingDown } from 'lucide-react';

export default function CampaignTable() {
  const campaigns = [
    {
      name: 'Summer Sale - Shoes',
      platform: 'Google',
      conversions: 234,
      roas: 4.2,
      trend: 'up',
      suggestion: 'Increase budget by 20%',
    },
    {
      name: 'Brand Awareness',
      platform: 'Meta',
      conversions: 187,
      roas: 3.8,
      trend: 'up',
      suggestion: 'Add negative keywords: "cheap"',
    },
    {
      name: 'Retargeting Q2',
      platform: 'LinkedIn',
      conversions: 156,
      roas: 3.2,
      trend: 'down',
      suggestion: 'Lower max CPC to $2.50',
    },
    {
      name: 'Product Launch',
      platform: 'Amazon',
      conversions: 412,
      roas: 5.1,
      trend: 'up',
      suggestion: 'Expand to similar audiences',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Smart Campaign Management
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI-generated optimization suggestions for every campaign
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Campaign</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Platform</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Conversions</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">ROAS</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">AI Suggestion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {campaigns.map((campaign, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {campaign.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                        {campaign.platform}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-semibold">
                      {campaign.conversions}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">{campaign.roas}x</span>
                        {campaign.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border border-blue-200">
                        {campaign.suggestion}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
