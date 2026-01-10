import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc',
      content: 'Ryze AI saved us 15 hours per week on campaign management. Our CTR basically doubled in the first month.',
      rating: 5,
      result: 'CTR +95%',
    },
    {
      name: 'Michael Chen',
      role: 'Growth Lead',
      company: 'FastGrow',
      content: 'The AI suggestions are incredibly accurate. We saw a 63% improvement in ROAS within 6 weeks.',
      rating: 5,
      result: '+63% ROAS',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Performance Marketer',
      company: 'Scale Digital',
      content: 'Managing multiple platforms was a nightmare. Ryze unified everything and cut our costs by 30%.',
      rating: 5,
      result: '-30% Costs',
    },
    {
      name: 'David Park',
      role: 'Agency Owner',
      company: 'Apex Marketing',
      content: 'Game changer for our agency. We can now manage 3x more clients with the same team size.',
      rating: 5,
      result: '3x Clients',
    },
    {
      name: 'Lisa Thompson',
      role: 'E-commerce Manager',
      company: 'ShopNow',
      content: 'The creative analysis feature alone is worth it. Our ad performance improved dramatically.',
      rating: 5,
      result: '+45% CTR',
    },
    {
      name: 'James Wilson',
      role: 'CMO',
      company: 'InnovateCo',
      content: 'Finally, a tool that actually delivers on its promises. ROI was positive in week one.',
      rating: 5,
      result: 'Week 1 ROI+',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Wall of Love
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200 hover:border-blue-200 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">{testimonial.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
