import { Clock, Sparkles, TrendingUp, MessageSquare } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: '24/7 Performance Audits',
      description: 'Continuous monitoring and analysis of your campaigns with real-time alerts for optimization opportunities',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Sparkles,
      title: 'AI Creative Generation',
      description: 'Generate high-performing ad creatives with AI assistance. Test multiple variations automatically',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: TrendingUp,
      title: 'Automated ROAS Improvement',
      description: 'Get actionable suggestions to increase return on ad spend across all your campaigns',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: MessageSquare,
      title: 'ChatGPT-Style Interface',
      description: 'Ask questions like "How can I improve ROAS?" and get instant, data-driven answers',
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to maximize your advertising performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
