--- src/pages/Mentors.tsx (原始)


+++ src/pages/Mentors.tsx (修改后)
import { useState } from 'react';
import { mentors as mockMentors, children, mentorMatchSuggestions } from '../data/mockData';
import { Search, UserPlus, Star, CheckCircle, XCircle, Sparkles, Users } from 'lucide-react';

export default function Mentors() {
  const [search, setSearch] = useState('');
  const [showMatching, setShowMatching] = useState(false);
  const [approvedMatches, setApprovedMatches] = useState<string[]>([]);

  const filtered = mockMentors.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleApproveMatch = (childId: string) => {
    setApprovedMatches(prev => [...prev, childId]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Mentor Management</h2>
          <p className="text-sm text-gray-500">FR-MEN: AI-powered mentor matching with Admin approval</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setShowMatching(!showMatching)}
            className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${showMatching ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-700 border border-purple-200'}`}>
            <Sparkles className="w-4 h-4" /> AI Matching
          </button>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 flex items-center gap-2">
            <UserPlus className="w-4 h-4" /> Add Mentor
          </button>
        </div>
      </div>

      {/* AI Matching Panel */}
      {showMatching && (
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-100 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-900">AI Mentor Matching (FR-MEN.2)</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            The system recommends mentors based on age, educational needs, career interests, skills, and personal goals.
            All matches require Admin approval before finalization (NFR-12).
          </p>
          <div className="space-y-3">
            {mentorMatchSuggestions.map((match, i) => (
              <div key={i} className="bg-white rounded-lg border border-purple-100 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{match.childName} → {match.mentorName}</p>
                      <p className="text-xs text-gray-500">Match Score: {match.matchScore}%</p>
                    </div>
                  </div>
                  {approvedMatches.includes(match.childId) ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                      <CheckCircle className="w-4 h-4" /> Approved
                    </span>
                  ) : (
                    <div className="flex gap-2">
                      <button onClick={() => handleApproveMatch(match.childId)}
                        className="px-3 py-1 bg-emerald-600 text-white rounded text-xs font-medium hover:bg-emerald-700">
                        Approve
                      </button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium hover:bg-gray-200">
                        Reject
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-1">
                  {match.reasons.map((r, j) => (
                    <span key={j} className="px-2 py-0.5 bg-purple-50 rounded text-xs text-purple-700">{r}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input type="text" placeholder="Search mentors..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500" />
      </div>

      {/* Mentor Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(mentor => {
          const assignedChildrenList = children.filter(c => mentor.assignedChildren.includes(c.id));
          return (
            <div key={mentor.id} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-700">{mentor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{mentor.name}</h4>
                  <p className="text-xs text-gray-500">{mentor.email}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {mentor.expertise.map(e => (
                  <span key={e} className="px-2 py-0.5 bg-blue-50 rounded text-xs text-blue-700">{e}</span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-gray-500">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>{mentor.rating || 'New'}</span>
                </div>
                <span className="text-gray-500">{mentor.sessionsCompleted} sessions</span>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Assigned Children ({assignedChildrenList.length}):</p>
                {assignedChildrenList.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {assignedChildrenList.map(c => (
                      <span key={c.id} className="px-2 py-0.5 bg-emerald-50 rounded text-xs text-emerald-700">{c.firstName}</span>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-gray-400">No children assigned yet</p>
                )}
              </div>
              <div className="mt-3">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  mentor.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                }`}>{mentor.status}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
