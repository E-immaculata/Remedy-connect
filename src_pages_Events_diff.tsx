--- src/pages/Events.tsx (原始)


+++ src/pages/Events.tsx (修改后)
import { events } from '../data/mockData';
import { Calendar, MapPin, Clock, Users, Plus } from 'lucide-react';

export default function Events() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Event Management</h2>
          <p className="text-sm text-gray-500">FR-EVT.1: Create, manage, and publish Foundation events</p>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Create Event
        </button>
      </div>

      {/* Event Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className={`h-2 ${
              event.status === 'upcoming' ? 'bg-emerald-500' :
              event.status === 'ongoing' ? 'bg-blue-500' :
              'bg-gray-300'
            }`}></div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  event.status === 'upcoming' ? 'bg-emerald-100 text-emerald-700' :
                  event.status === 'ongoing' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-600'
                }`}>{event.status}</span>
                <span className="text-xs text-gray-500">{event.type}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{event.description}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>{event.volunteers} volunteers registered</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex gap-2">
                <button className="flex-1 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-emerald-100">
                  Register
                </button>
                <button className="flex-1 bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-100">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Notification Info */}
      <div className="bg-purple-50 rounded-xl border border-purple-100 p-4">
        <p className="text-sm text-purple-800">
          <strong>FR-NOT.1:</strong> The system sends push and/or email notifications for event reminders, application status updates,
          and upcoming sessions via Firebase Cloud Messaging.
        </p>
      </div>
    </div>
  );
}
