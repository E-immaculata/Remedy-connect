--- src/pages/Guardians.tsx (原始)


+++ src/pages/Guardians.tsx (修改后)
import { guardians, children } from '../data/mockData';
import { Search, CheckCircle, XCircle, Clock, UserPlus, Eye } from 'lucide-react';
import { useState } from 'react';

export default function Guardians() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = guardians.filter(g => {
    const matchSearch = g.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || g.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Guardian Management</h2>
          <p className="text-sm text-gray-500">FR-CHD: Guardian applications, child registration, and approvals</p>
        </div>
      </div>

      {/* Business Rules */}
      <div className="bg-emerald-50 rounded-xl border border-emerald-100 p-4">
        <p className="text-sm text-emerald-800">
          <strong>NFR-11:</strong> A child cannot be added to the system unless (a) a guardian's application has been approved
          by the Foundation Admin, or (b) the Foundation Admin registers the child directly (e.g., verified orphan referral).
        </p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">{guardians.filter(g => g.status === 'approved').length}</p>
              <p className="text-xs text-gray-500">Approved</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">{guardians.filter(g => g.status === 'pending').length}</p>
              <p className="text-xs text-gray-500">Pending Review</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <UserPlus className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">{guardians.length}</p>
              <p className="text-xs text-gray-500">Total Applications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search guardians..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500" />
        </div>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
          <option value="all">All Status</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Guardian List */}
      <div className="space-y-3">
        {filtered.map(guardian => {
          const guardianChildren = children.filter(c => guardian.childIds.includes(c.id));
          return (
            <div key={guardian.id} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-indigo-700">{guardian.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{guardian.name}</h4>
                    <p className="text-xs text-gray-500">{guardian.email} • {guardian.phone}</p>
                    <p className="text-xs text-gray-400">Applied: {guardian.applicationDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    guardian.status === 'approved' ? 'bg-emerald-100 text-emerald-700' :
                    guardian.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>{guardian.status}</span>
                  {guardian.status === 'pending' && (
                    <div className="flex gap-1">
                      <button className="p-1.5 bg-emerald-50 rounded-lg hover:bg-emerald-100" title="Approve">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </button>
                      <button className="p-1.5 bg-red-50 rounded-lg hover:bg-red-100" title="Reject">
                        <XCircle className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {guardianChildren.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-2">Registered Children:</p>
                  <div className="flex flex-wrap gap-2">
                    {guardianChildren.map(c => (
                      <span key={c.id} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 rounded text-xs text-gray-700">
                        <Eye className="w-3 h-3" /> {c.firstName} {c.lastName} ({c.age} yrs)
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
