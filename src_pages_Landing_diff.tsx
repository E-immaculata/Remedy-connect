--- src/pages/Landing.tsx (原始)


+++ src/pages/Landing.tsx (修改后)
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Users, UserCheck, Heart, Shield, ArrowRight, Star, Globe, Calendar } from 'lucide-react';

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Remedy Connect</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#mission" className="text-sm text-gray-600 hover:text-emerald-600">Mission</a>
              <a href="#features" className="text-sm text-gray-600 hover:text-emerald-600">Features</a>
              <a href="#impact" className="text-sm text-gray-600 hover:text-emerald-600">Impact</a>
              <Link to="/login" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">Sign In</Link>
              <Link to="/register" className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors">Get Started</Link>
            </div>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
              </div>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            <a href="#mission" className="block text-sm text-gray-600 py-2">Mission</a>
            <a href="#features" className="block text-sm text-gray-600 py-2">Features</a>
            <a href="#impact" className="block text-sm text-gray-600 py-2">Impact</a>
            <Link to="/login" className="block text-sm text-emerald-600 py-2">Sign In</Link>
            <Link to="/register" className="block bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm text-center">Get Started</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <HeartPulse className="w-4 h-4" />
                The Remedy Foundation
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Connecting <span className="text-emerald-600">Every Child</span> to Opportunity
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Remedy Connect is a digital platform that integrates children, guardians, mentors,
                volunteers, and donors into one unified system — providing education, safety,
                mentorship, and opportunities to vulnerable children across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                  Join the Movement <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/login" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  Demo Dashboard
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-emerald-700">17.5M</p>
                    <p className="text-xs text-gray-600 mt-1">Orphans in Nigeria</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-blue-700">18.3M</p>
                    <p className="text-xs text-gray-600 mt-1">Out of School Children</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-purple-700">2/3</p>
                    <p className="text-xs text-gray-600 mt-1">In Multidimensional Poverty</p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-amber-700">8</p>
                    <p className="text-xs text-gray-600 mt-1">Children Connected</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 text-center">Source: UNICEF Nigeria 2024-2025 Reports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              The Remedy Foundation provides every child with education, safety, mentorship,
              and opportunities irrespective of their background.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vulnerable Children</h3>
              <p className="text-gray-600 text-sm">Orphans, neglected children, abuse victims, and those from poor families without access to education.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mentorship & Support</h3>
              <p className="text-gray-600 text-sm">AI-powered matching connects children with mentors in academics, career, emotional support, and life skills.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pan-African Vision</h3>
              <p className="text-gray-600 text-sm">Starting in Nigeria, expanding across Africa to create a unified digital child-support ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Platform Features</h2>
            <p className="text-lg text-gray-600">
              A comprehensive digital solution addressing the fragmented landscape of child support in Nigeria.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Child Management', desc: 'Register, track, and manage children with verified guardians or direct admin registration.', bgClass: 'bg-emerald-100', iconClass: 'text-emerald-600' },
              { icon: UserCheck, title: 'AI Mentor Matching', desc: 'Intelligent matching based on age, needs, skills, and goals — approved by Foundation Admin.', bgClass: 'bg-blue-100', iconClass: 'text-blue-600' },
              { icon: Heart, title: 'Donation Tracking', desc: 'One-time, recurring, and sponsorship donations via Paystack and Stripe with full transparency.', bgClass: 'bg-red-100', iconClass: 'text-red-600' },
              { icon: Calendar, title: 'Event Management', desc: 'Create, manage, and track Foundation events with volunteer registration and coordination.', bgClass: 'bg-purple-100', iconClass: 'text-purple-600' },
              { icon: Shield, title: 'Guardian Portal', desc: 'Guardians apply for support, register children, and track their progress — mobile-first design.', bgClass: 'bg-amber-100', iconClass: 'text-amber-600' },
              { icon: Star, title: 'AI Chat Assistant', desc: 'Automated answers to common questions about volunteering, donating, and Foundation services.', bgClass: 'bg-teal-100', iconClass: 'text-teal-600' },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.bgClass}`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconClass}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Hypothesis & Goals</h2>
            <p className="text-lg text-gray-600">
              Within 6 months of launch, Remedy Connect will achieve measurable impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">7-Day Matching</h3>
              <p className="text-gray-600">Link every newly registered child with an authorized mentor in less than 7 days, without reliance on temporary meetings.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Donation Transparency</h3>
              <p className="text-gray-600">Provide every donor with evidence of their donation usage through impact reports and receipts.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Unified Records</h3>
              <p className="text-gray-600">Maintain a single accessible digital record for every registered child, replacing scattered paper records.</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Who Can Use Remedy Connect?</h2>
            <p className="text-lg text-gray-600">The platform serves five key user groups working together to support children.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { role: 'Foundation Admin', desc: 'Full system oversight, approvals, analytics', icon: Shield },
              { role: 'Mentors', desc: 'Guide children through sessions & reports', icon: UserCheck },
              { role: 'Volunteers', desc: 'Register for events, log hours', icon: HandHelping },
              { role: 'Donors', desc: 'Donate, sponsor, view impact reports', icon: Heart },
              { role: 'Guardians', desc: 'Apply for support, track child progress', icon: Users },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 text-center border border-gray-100">
                <item.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.role}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-emerald-100 text-lg mb-8">
            Join The Remedy Foundation in creating a unified digital ecosystem for child support in Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Create Account
            </Link>
            <Link to="/login" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Demo Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <HeartPulse className="w-6 h-6 text-emerald-400" />
                <span className="text-white font-bold text-lg">Remedy Connect</span>
              </div>
              <p className="text-sm">A project of The Remedy Foundation — providing education, safety, and mentorship to every child.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/login" className="hover:text-emerald-400">Sign In</Link></li>
                <li><Link to="/register" className="hover:text-emerald-400">Register</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-400">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">References</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.aiha.com/current-projects/ovc_nigeria/" className="hover:text-emerald-400" target="_blank">AIHA - OVC Nigeria</a></li>
                <li><a href="https://www.unicef.org/nigeria" className="hover:text-emerald-400" target="_blank">UNICEF Nigeria</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© 2026 The Remedy Foundation. Remedy Connect v1.0 — Developed by Effiong Immaculata Emmanuel</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HandHelping(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 12h2a2 2 0 1 0 0-4h-2c-1.1 0-2-.9-2-2a2 2 0 1 1 4 0"/><path d="M4 19v-5a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v5c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2Z"/><path d="M12 12v7"/>
    </svg>
  );
}
