--- src/pages/Volunteers.tsx (原始)


+++ src/pages/Volunteers.tsx (修改后)
import { volunteers } from '../data/mockData';
import { Search, Award, Clock, Calendar, UserPlus } from 'lucide-react';
import { useState } from 'react';

export default function Volunteers() {
  const [search, setSearch] = useState('');

  const filtered = volunteers.filter(v =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalHours = volunteers.reduce((s, v) => s + v.hoursLogged, 0);
  const certifiedCount = volunteers.filter(v => v.hoursLogged >= 100).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Volunteer Management</h2>
          <p className="text-sm text-gray-500">FR-VOL: Applications, event registration, and hour tracking</p>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 flex items-center gap-2">
          <UserPlus className="w-4 h-4" /> New Application
        </button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">{totalHours}h</p>
              <p className="text-xs text-gray-500">Total Hours Logged</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">{certifiedCount}</p>
              <p className="text-xs text-gray-500">Certificates Issued (100h+)</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">{volunteers.reduce((s, v) => s + v.eventsAttended, 0)}</p>
              <p className="text-xs text-gray-500">Total Event Attendances</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input type="text" placeholder="Search volunteers..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500" />
      </div>

      {/* Volunteer Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(vol => (
          <div key={vol.id} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-teal-700">{vol.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{vol.name}</h4>
                <p className="text-xs text-gray-500">{vol.email}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-gray-50 rounded-lg p-2 text-center">
                <p className="text-lg font-bold text-gray-900">{vol.hoursLogged}h</p>
                <p className="text-xs text-gray-500">Hours</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2 text-center">
                <p className="text-lg font-bold text-gray-900">{vol.eventsAttended}</p>
                <p className="text-xs text-gray-500">Events</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                vol.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
              }`}>{vol.status}</span>
              {vol.hoursLogged >= 100 && (
                <span className="flex items-center gap-1 text-xs text-amber-600">
                  <Award className="w-3 h-3" /> Certified
                </span>
              )}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className={`h-1.5 rounded-full ${vol.hoursLogged >= 100 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                  style={{ width: `${Math.min((vol.hoursLogged / 100) * 100, 100)}%` }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{vol.hoursLogged >= 100 ? 'Certificate earned!' : `${100 - vol.hoursLogged}h to certificate`}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FR Note */}
      <div className="bg-amber-50 rounded-xl border border-amber-100 p-4">
        <p className="text-sm text-amber-800">
          <strong>FR-VOL.3:</strong> The system tracks each volunteer's logged hours and issues a certificate once the 100-hour threshold is reached.
        </p>
      </div>
    </div>
  );
}
