import { Target, Eye, FileText } from 'lucide-react';

export default function AdAnalysis() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            AI-Powered Ad Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get instant feedback on your ad creatives with actionable insights to improve performance
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl p-8 text-white flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👟</div>
                <p className="text-lg font-semibold">Running Shoe Ad Preview</p>
                <p className="text-sm opacity-90 mt-2">Shop Now - Limited Time Offer!</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Scores</h3>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-orange-500" />
                      <span className="font-semibold text-gray-900">Call-to-Action</span>
                    </div>
                    <span className="text-2xl font-bold text-orange-500">45%</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    CTA is generic. Try "Get 30% Off Today" for urgency
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold text-gray-900">Visual Impact</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-500">72%</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Good product focus. Consider lifestyle imagery for emotional connection
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-gray-900">Ad Copy</span>
                    </div>
                    <span className="text-2xl font-bold text-green-500">88%</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Strong value proposition. Highlight unique benefits over competitors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
