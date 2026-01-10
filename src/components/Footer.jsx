import { Mail, Heart } from 'lucide-react';

export default function Footer() {
  const links = {
    product: ['Features', 'Pricing', 'Case Studies', 'Integrations'],
    company: ['About', 'Community', 'Careers', 'Contact'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Ryze AI</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The AI-powered advertising platform that helps you optimize campaigns,
              increase ROAS, and save time across all major ad platforms.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-5 h-5" />
              <a href="mailto:hello@get-ryze.ai" className="hover:text-white transition-colors">
                hello@get-ryze.ai
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Ryze AI. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              <span>in San Francisco</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
