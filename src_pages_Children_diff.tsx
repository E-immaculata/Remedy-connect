--- src/pages/Children.tsx (原始)


+++ src/pages/Children.tsx (修改后)
import { useState } from 'react';
import { children as mockChildren, guardians } from '../data/mockData';
import { Search, Plus, Filter, Eye, BookOpen, Heart, Brain } from 'lucide-react';

export default function Children() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedChild, setSelectedChild] = useState<string | null>(null);

  const filtered = mockChildren.filter(c => {
    const matchSearch = `${c.firstName} ${c.lastName}`.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const selected = selectedChild ? mockChildren.find(c => c.id === selectedChild) : null;
  const childGuardian = selected?.guardianId ? guardians.find(g => g.id === selected.guardianId) : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Child Management</h2>
          <p className="text-sm text-gray-500">FR-CHD: Register, track, and manage children in the system</p>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Register Child
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search children..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500" />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="matched">Matched</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Children List */}
        <div className="lg:col-span-2 space-y-3">
          {filtered.map(child => (
            <div key={child.id} onClick={() => setSelectedChild(child.id)}
              className={`bg-white rounded-xl border p-4 cursor-pointer transition-all hover:shadow-md ${selectedChild === child.id ? 'border-emerald-300 ring-2 ring-emerald-100' : 'border-gray-100'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-emerald-700">{child.firstName[0]}{child.lastName[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{child.firstName} {child.lastName}</h4>
                    <p className="text-xs text-gray-500">{child.age} yrs • {child.gender} • {child.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    child.status === 'matched' ? 'bg-emerald-100 text-emerald-700' :
                    child.status === 'active' ? 'bg-blue-100 text-blue-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>{child.status}</span>
                  <Eye className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                {child.needs.map(need => (
                  <span key={need} className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-600">{need}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Child Details Panel */}
        <div className="lg:col-span-1">
          {selected ? (
            <div className="bg-white rounded-xl border border-gray-100 p-5 sticky top-24">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-emerald-700">{selected.firstName[0]}{selected.lastName[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{selected.firstName} {selected.lastName}</h3>
                <p className="text-sm text-gray-500">{selected.id} • {selected.age} years • {selected.gender}</p>
                <span className={`inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-medium ${
                  selected.status === 'matched' ? 'bg-emerald-100 text-emerald-700' :
                  selected.status === 'active' ? 'bg-blue-100 text-blue-700' :
                  'bg-amber-100 text-amber-700'
                }`}>{selected.status}</span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                    <BookOpen className="w-4 h-4" /> Progress (FR-CHD.4)
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Academic</span>
                        <span>{selected.progress.academic}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${selected.progress.academic}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Emotional</span>
                        <span>{selected.progress.emotional}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${selected.progress.emotional}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Life Skills</span>
                        <span>{selected.progress.lifeSkills}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: `${selected.progress.lifeSkills}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                    <Heart className="w-4 h-4" /> Needs
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {selected.needs.map(n => (
                      <span key={n} className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-600">{n}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Details</h4>
                  <dl className="text-xs space-y-1">
                    <div className="flex justify-between"><dt className="text-gray-500">Education</dt><dd>{selected.educationLevel}</dd></div>
                    <div className="flex justify-between"><dt className="text-gray-500">Location</dt><dd>{selected.location}</dd></div>
                    <div className="flex justify-between"><dt className="text-gray-500">Registered</dt><dd>{selected.registeredDate}</dd></div>
                    <div className="flex justify-between"><dt className="text-gray-500">Guardian</dt><dd>{childGuardian?.name || 'N/A (Admin registered)'}</dd></div>
                  </dl>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    <Brain className="w-3 h-3 inline mr-1" />
                    NFR-6: Child data only visible to Admin, assigned mentor & guardian
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
              <Eye className="w-8 h-8 text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Select a child to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
