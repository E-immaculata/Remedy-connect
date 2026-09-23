--- src/pages/Donations.tsx (原始)


+++ src/pages/Donations.tsx (修改后)
import { useState } from 'react';
import { donations, donors } from '../data/mockData';
import { Search, CreditCard, Download, Filter, DollarSign, TrendingUp, Users } from 'lucide-react';

export default function Donations() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [showDonationForm, setShowDonationForm] = useState(false);

  const filtered = donations.filter(d => {
    const matchSearch = d.donorName.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === 'all' || d.type === typeFilter;
    return matchSearch && matchType;
  });

  const totalDonated = donations.reduce((s, d) => s + d.amount, 0);
  const completedDonations = donations.filter(d => d.status === 'completed').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Donation Management</h2>
          <p className="text-sm text-gray-500">FR-DON: Track donations, sponsorships, and generate receipts</p>
        </div>
        <button onClick={() => setShowDonationForm(!showDonationForm)}
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 flex items-center gap-2">
          <CreditCard className="w-4 h-4" /> Make Donation
        </button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">₦{(totalDonated / 1000000).toFixed(1)}M</p>
              <p className="text-xs text-gray-500">Total Received</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">{donors.length}</p>
              <p className="text-xs text-gray-500">Active Donors</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">{completedDonations}</p>
              <p className="text-xs text-gray-500">Completed Transactions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Form Modal */}
      {showDonationForm && (
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Make a Donation (FR-DON.1, FR-DON.2)</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Donation Type</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm">
                <option>One-Time Donation</option>
                <option>Monthly Recurring</option>
                <option>Child Sponsorship</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount (₦)</label>
              <input type="number" placeholder="50000" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm">
                <option>General Fund</option>
                <option>Education</option>
                <option>Feeding</option>
                <option>Healthcare</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm">
                <option>Paystack (Nigeria)</option>
                <option>Stripe (International)</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700">
              Process Payment
            </button>
            <button onClick={() => setShowDonationForm(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm">
              Cancel
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Payment processing via Paystack (Nigerian donors) and Stripe (International donors) as per FR-DON.1
          </p>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search donations..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500" />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
            <option value="all">All Types</option>
            <option value="one-time">One-Time</option>
            <option value="recurring">Recurring</option>
            <option value="sponsorship">Sponsorship</option>
          </select>
        </div>
      </div>

      {/* Donations Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Transaction</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Donor</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Amount</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Type</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Purpose</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Date</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(d => (
                <tr key={d.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-xs text-gray-500">{d.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{d.donorName}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">₦{d.amount.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      d.type === 'sponsorship' ? 'bg-purple-100 text-purple-700' :
                      d.type === 'recurring' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>{d.type}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{d.purpose}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      d.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                      d.status === 'processing' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>{d.status}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{d.date}</td>
                  <td className="px-4 py-3">
                    <button className="text-emerald-600 hover:text-emerald-700" title="Download Receipt (FR-DON.4)">
                      <Download className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Impact Report Note */}
      <div className="bg-blue-50 rounded-xl border border-blue-100 p-4">
        <p className="text-sm text-blue-800">
          <strong>FR-DON.4:</strong> The system generates downloadable receipts for every donation and periodic impact reports
          showing how funds were used. Donors can never see a sponsored child's private identifying information (NFR-13).
        </p>
      </div>
    </div>
  );
}
