import { useState } from 'react';
import { Crown, Coffee, Instagram, Facebook, Twitter, Mail, Sparkles, Award, Shield, Gem, Star, MapPin, Clock, Users } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [left, setLeft] = useState(64);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    setTimeout(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailRegex.test(email)) {
        setMessage('Please enter a valid email address.');
        setStatus('error');
        return;
      }

      setMessage('🎉 Welcome to the Royal Circle! Exclusive access and 25% discount granted.');
      setStatus('success');
      setEmail('');
      setLeft(left - 1);
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }, 1500);
  };

  const royalBenefits = [
    { icon: Award, text: '25% Exclusive Launch Discount', color: 'from-yellow-500 to-amber-500' },
    { icon: Gem, text: 'Limited Edition Packaging', color: 'from-purple-500 to-pink-500' },
    { icon: Clock, text: 'Priority Pre-order Access', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, text: 'Members-Only Tasting Events', color: 'from-emerald-500 to-green-500' },
    { icon: MapPin, text: 'Global Shipping Priority', color: 'from-red-500 to-orange-500' },
    { icon: Shield, text: 'Quality Guarantee Certificate', color: 'from-slate-600 to-gray-700' },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', gradient: 'from-purple-600 via-pink-600 to-rose-600' },
    { icon: Facebook, label: 'Facebook', gradient: 'from-blue-600 to-blue-700' },
    { icon: Twitter, label: 'Twitter', gradient: 'from-sky-500 to-blue-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-amber-900 to-amber-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Royal Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-yellow-400 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-amber-600 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Ornamental Borders */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-yellow-400 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-yellow-400 to-transparent"></div>

      {/* Animated Particles */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.3 + Math.random() * 0.4
          }}
        />
      ))}

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Brand Story */}
          <div className="space-y-8">
            {/* Royal Badge */}
            

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-7xl md:text-8xl font-bold leading-none">
                <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent">
                  Royal
                </span>
                <br />
                <span className="text-amber-100 font-serif italic">Chai</span>
              </h1>
              
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-amber-600 to-transparent"></div>
                <p className="text-2xl md:text-3xl text-amber-300 font-light italic">
                  "Brew the Royal Tradition"
                </p>
                <div className="h-px flex-1 bg-gradient-to-l from-amber-600 to-transparent"></div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-amber-200 text-lg leading-relaxed">
                For generations, our chai has been served in the palaces of India's royal families. 
                Now, we bring this exclusive heritage blend to your home. Crafted with 
                <span className="text-yellow-300 font-semibold"> premium Assam tea leaves</span> and 
                <span className="text-yellow-300 font-semibold"> handpicked spices</span>, each cup 
                is a journey through centuries of tradition.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-amber-900/30 rounded-xl border border-amber-800/50 hover:border-amber-600/50 transition-colors">
                  <div className="p-2 bg-gradient-to-br from-yellow-600 to-amber-700 rounded-lg">
                    <Shield className="w-5 h-5 text-amber-100" />
                  </div>
                  <span className="text-amber-100 font-medium">100% Authentic</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-amber-900/30 rounded-xl border border-amber-800/50 hover:border-amber-600/50 transition-colors">
                  <div className="p-2 bg-gradient-to-br from-yellow-600 to-amber-700 rounded-lg">
                    <Star className="w-5 h-5 text-amber-100" />
                  </div>
                  <span className="text-amber-100 font-medium">Premium Quality</span>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-amber-900 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-amber-100 font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-amber-300 text-sm mt-1">
                  <span className="font-bold">487</span> royal families served since 1857
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Signup Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-yellow-500/20 rounded-3xl blur-2xl"></div>
            
            <div className="relative bg-gradient-to-b from-amber-900/90 to-amber-950/90 backdrop-blur-md rounded-2xl border border-amber-700/50 shadow-2xl overflow-hidden">
              {/* Card Header */}
              <div className="relative p-8 border-b border-amber-800/50">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500"></div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-yellow-600 to-amber-700 rounded-xl">
                      <Coffee className="w-8 h-8 text-amber-100" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-amber-100">Royal Circle Access</h2>
                      <p className="text-amber-400 text-sm">Limited Invitations Available</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-amber-800 to-amber-900 rounded-full border border-amber-700">
                    <span className="text-yellow-300 font-bold text-sm">{left}/500 LEFT</span>
                  </div>
                </div>

                <p className="text-amber-300 text-center">
                  Join the exclusive list of first customers and receive royal privileges
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="p-8 border-b border-amber-800/50">
                <div className="grid grid-cols-2 gap-4">
                  {royalBenefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-900/50 to-amber-950/50 p-4 border border-amber-800/30 hover:border-amber-600/50 transition-all duration-300 cursor-pointer"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      <div className="relative flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-br ${benefit.color} rounded-lg`}>
                          <benefit.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-amber-200 text-sm font-medium">{benefit.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signup Form */}
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your royal email address"
                        required
                        disabled={status === 'loading'}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-amber-950/30 border-2 border-amber-700/50 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all text-amber-100 placeholder-amber-500 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group relative w-full overflow-hidden bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-500 hover:to-amber-600 text-amber-50 font-bold py-4 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative flex items-center justify-center gap-3">
                      {status === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-amber-200 border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing Your Royal Request...</span>
                        </>
                      ) : (
                        <>
                          <Crown className="w-5 h-5" />
                          <span>Claim My Royal Privileges</span>
                          <Sparkles className="w-5 h-5" />
                        </>
                      )}
                    </div>
                  </button>

                  {message && (
                    <div className={`p-4 rounded-xl border ${
                      status === 'success' 
                        ? 'bg-emerald-900/20 border-emerald-700/50 text-emerald-300' 
                        : 'bg-red-900/20 border-red-700/50 text-red-300'
                    }`}>
                      <p className="text-center font-medium">{message}</p>
                    </div>
                  )}

                  <p className="text-amber-500 text-center text-sm">
                    By joining, you agree to receive exclusive updates and offers from Royal Chai
                  </p>
                </form>
              </div>

              {/* Social Links */}
              <div className="px-8 pb-8">
                <div className="flex items-center justify-center gap-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="group relative"
                      aria-label={social.label}
                    >
                      <div className={`absolute -inset-2 bg-gradient-to-r ${social.gradient} rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                      <div className="relative p-3 bg-gradient-to-b from-amber-800/50 to-amber-900/50 rounded-xl border border-amber-700/50 group-hover:border-amber-500/50 transition-all duration-300">
                        <social.icon className="w-6 h-6 text-amber-300 group-hover:text-amber-100 transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-amber-800/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center">
            <div>
              <p className="text-amber-400 text-sm">
                © 2026 Royal Chai Company. All rights reserved.
              </p>
              <p className="text-amber-600 text-xs mt-1">
                A legacy of flavor brewed to perfection.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-amber-500 text-sm">Official Suppliers to:</span>
              <div className="flex gap-4">
                <div className="px-3 py-1 bg-amber-900/30 rounded-full border border-amber-800/50">
                  <span className="text-amber-300 text-xs">ROYAL PALACES</span>
                </div>
                <div className="px-3 py-1 bg-amber-900/30 rounded-full border border-amber-800/50">
                  <span className="text-amber-300 text-xs">FIVE STAR HOTELS</span>
                </div>
                <div className="px-3 py-1 bg-amber-900/30 rounded-full border border-amber-800/50">
                  <span className="text-amber-300 text-xs">GOURMET STORES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;