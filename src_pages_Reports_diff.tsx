--- src/pages/Reports.tsx (原始)


+++ src/pages/Reports.tsx (修改后)
import { children, mentors, donations, volunteers, guardians, events, monthlyDonations, childrenGrowth } from '../data/mockData';
import { Download, FileText, TrendingUp, Users, Heart, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';

export default function Reports() {
  const totalDonations = donations.reduce((s, d) => s + d.amount, 0);
  const mentorActivity = mentors.map(m => ({
    name: m.name.split(' ')[1],
    sessions: m.sessionsCompleted,
    children: m.assignedChildren.length,
  }));

  const donationPurpose = [
    { name: 'Education', amount: 3500000 },
    { name: 'Feeding', amount: 1800000 },
    { name: 'Healthcare', amount: 1200000 },
    { name: 'General', amount: 5000000 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reports & Analytics</h2>
          <p className="text-sm text-gray-500">FR-RPT.1: Dashboard analytics and downloadable reports</p>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 flex items-center gap-2">
          <Download className="w-4 h-4" /> Export Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-emerald-600" />
            <span className="text-xs text-gray-500">Children Supported</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{children.length}</p>
          <p className="text-xs text-emerald-600">+2 this quarter</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-xs text-gray-500">Total Donations</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">₦{(totalDonations / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-emerald-600">+15% vs last quarter</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-xs text-gray-500">Mentor Activity</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{mentors.reduce((s, m) => s + m.sessionsCompleted, 0)}</p>
          <p className="text-xs text-gray-500">Total sessions completed</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-purple-600" />
            <span className="text-xs text-gray-500">Events Held</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{events.length}</p>
          <p className="text-xs text-gray-500">{events.filter(e => e.status === 'completed').length} completed</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Donation Trend */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Donation Revenue</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={monthlyDonations}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `₦${v/1000000}M`} />
              <Tooltip formatter={(value: number) => [`₦${value.toLocaleString()}`, 'Amount']} />
              <Area type="monotone" dataKey="amount" stroke="#10b981" fill="#d1fae5" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Children Growth */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Children Registration Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={childrenGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="children" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Mentor Activity */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Mentor Activity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={mentorActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="sessions" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="Sessions" />
              <Bar dataKey="children" fill="#10b981" radius={[4, 4, 0, 0]} name="Children" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Fund Allocation */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Fund Allocation by Purpose</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={donationPurpose} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" tick={{ fontSize: 12 }} tickFormatter={(v) => `₦${v/1000000}M`} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={80} />
              <Tooltip formatter={(value: number) => [`₦${value.toLocaleString()}`, 'Amount']} />
              <Bar dataKey="amount" fill="#f59e0b" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Available Reports */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Reports</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { title: 'Children Summary Report', desc: 'All registered children with status and progress', icon: Users },
            { title: 'Donation Report', desc: 'Complete donation history with receipts', icon: Heart },
            { title: 'Mentor Activity Report', desc: 'Sessions completed and child outcomes', icon: TrendingUp },
            { title: 'Volunteer Hours Report', desc: 'Hours logged and certificates issued', icon: FileText },
            { title: 'Guardian Applications', desc: 'Application status and approval history', icon: Users },
            { title: 'Event Summary', desc: 'Past and upcoming events with attendance', icon: Calendar },
          ].map((report, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <report.icon className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{report.title}</p>
                <p className="text-xs text-gray-500 truncate">{report.desc}</p>
              </div>
              <Download className="w-4 h-4 text-gray-400 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Hypothesis Tracking */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100 p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">6-Month Hypothesis Tracking</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">Goal 1: 7-Day Matching</p>
            <p className="text-lg font-bold text-emerald-700">✓ Achieved</p>
            <p className="text-xs text-gray-500">Avg. 4.2 days to match</p>
          </div>
          <div className="bg-white rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">Goal 2: Donation Transparency</p>
            <p className="text-lg font-bold text-emerald-700">✓ On Track</p>
            <p className="text-xs text-gray-500">100% receipt generation</p>
          </div>
          <div className="bg-white rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">Goal 3: Unified Records</p>
            <p className="text-lg font-bold text-emerald-700">✓ Active</p>
            <p className="text-xs text-gray-500">8 children in digital system</p>
          </div>
        </div>
      </div>
    </div>
  );
}
