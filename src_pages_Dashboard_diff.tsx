--- src/pages/Dashboard.tsx (原始)


+++ src/pages/Dashboard.tsx (修改后)
import { children, guardians, mentors, donations, events, volunteers, monthlyDonations, childrenGrowth } from '../data/mockData';
import { Users, UserCheck, Heart, Calendar, TrendingUp, ArrowUpRight, Clock, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'];

export default function Dashboard() {
  const totalDonations = donations.reduce((sum, d) => sum + d.amount, 0);
  const activeChildren = children.filter(c => c.status === 'active' || c.status === 'matched').length;
  const matchedChildren = children.filter(c => c.status === 'matched').length;
  const upcomingEvents = events.filter(e => e.status === 'upcoming').length;

  const donationByType = [
    { name: 'One-Time', value: donations.filter(d => d.type === 'one-time').reduce((s, d) => s + d.amount, 0) },
    { name: 'Recurring', value: donations.filter(d => d.type === 'recurring').reduce((s, d) => s + d.amount, 0) },
    { name: 'Sponsorship', value: donations.filter(d => d.type === 'sponsorship').reduce((s, d) => s + d.amount, 0) },
  ];

  const stats = [
    { label: 'Children Registered', value: children.length, icon: Users, bgClass: 'bg-emerald-100', iconClass: 'text-emerald-600', change: '+2 this month' },
    { label: 'Active Mentors', value: mentors.filter(m => m.status === 'active').length, icon: UserCheck, bgClass: 'bg-blue-100', iconClass: 'text-blue-600', change: '+1 this month' },
    { label: 'Total Donations', value: `₦${(totalDonations / 1000000).toFixed(1)}M`, icon: Heart, bgClass: 'bg-red-100', iconClass: 'text-red-600', change: '+15% vs last month' },
    { label: 'Upcoming Events', value: upcomingEvents, icon: Calendar, bgClass: 'bg-purple-100', iconClass: 'text-purple-600', change: '3 this week' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.bgClass}`}>
                <stat.icon className={`w-5 h-5 ${stat.iconClass}`} />
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            <p className="text-xs text-emerald-600 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Donation Trend */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Donation Trends</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyDonations}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `₦${v/1000000}M`} />
              <Tooltip formatter={(value: number) => [`₦${value.toLocaleString()}`, 'Amount']} />
              <Bar dataKey="amount" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Children Growth */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Children Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={childrenGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="children" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Donation Breakdown */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Donation Breakdown</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={donationByType} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {donationByType.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `₦${value.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { text: 'New donation from TechCorp Nigeria', time: '2 hours ago', icon: Heart, bgClass: 'bg-red-100', iconClass: 'text-red-600' },
              { text: 'Guardian application pending review', time: '5 hours ago', icon: Clock, bgClass: 'bg-amber-100', iconClass: 'text-amber-600' },
              { text: 'Mentor session completed for Chinedu', time: '1 day ago', icon: CheckCircle, bgClass: 'bg-emerald-100', iconClass: 'text-emerald-600' },
              { text: 'New volunteer registration', time: '2 days ago', icon: Users, bgClass: 'bg-blue-100', iconClass: 'text-blue-600' },
              { text: 'Event "Health Fair" created', time: '3 days ago', icon: Calendar, bgClass: 'bg-purple-100', iconClass: 'text-purple-600' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${activity.bgClass}`}>
                  <activity.icon className={`w-4 h-4 ${activity.iconClass}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 truncate">{activity.text}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Children Matched</span>
                <span className="font-medium">{matchedChildren}/{children.length}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${(matchedChildren / children.length) * 100}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Guardians Approved</span>
                <span className="font-medium">{guardians.filter(g => g.status === 'approved').length}/{guardians.length}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(guardians.filter(g => g.status === 'approved').length / guardians.length) * 100}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Volunteer Hours</span>
                <span className="font-medium">{volunteers.reduce((s, v) => s + v.hoursLogged, 0)}h</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Avg. Mentor Rating</span>
                <span className="font-medium">4.7/5.0</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span className="text-gray-600">Platform is on track for 6-month goals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
