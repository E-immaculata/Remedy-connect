--- src/data/mockData.ts (原始)


+++ src/data/mockData.ts (修改后)
export interface Child {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  guardianId: string | null;
  status: 'active' | 'pending' | 'matched';
  needs: string[];
  educationLevel: string;
  location: string;
  registeredDate: string;
  progress: { academic: number; emotional: number; lifeSkills: number };
}

export interface Guardian {
  id: string;
  name: string;
  email: string;
  phone: string;
  childIds: string[];
  status: 'approved' | 'pending' | 'rejected';
  applicationDate: string;
}

export interface Mentor {
  id: string;
  name: string;
  email: string;
  expertise: string[];
  assignedChildren: string[];
  status: 'active' | 'pending';
  sessionsCompleted: number;
  rating: number;
}

export interface Donor {
  id: string;
  name: string;
  email: string;
  totalDonated: number;
  donationType: 'one-time' | 'recurring' | 'sponsorship';
  sponsoredChild?: string;
  joinDate: string;
}

export interface Donation {
  id: string;
  donorId: string;
  donorName: string;
  amount: number;
  type: 'one-time' | 'recurring' | 'sponsorship';
  purpose: string;
  date: string;
  status: 'completed' | 'pending' | 'processing';
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  volunteers: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  description: string;
}

export interface Volunteer {
  id: string;
  name: string;
  email: string;
  hoursLogged: number;
  eventsAttended: number;
  status: 'active' | 'pending';
}

export const children: Child[] = [
  { id: 'CHD-001', firstName: 'Amina', lastName: 'O.', age: 8, gender: 'Female', guardianId: 'GRD-001', status: 'matched', needs: ['Education', 'Feeding'], educationLevel: 'Primary', location: 'Lagos', registeredDate: '2026-01-15', progress: { academic: 72, emotional: 80, lifeSkills: 65 } },
  { id: 'CHD-002', firstName: 'Chinedu', lastName: 'K.', age: 12, gender: 'Male', guardianId: 'GRD-002', status: 'matched', needs: ['Education', 'Healthcare'], educationLevel: 'Primary', location: 'Abuja', registeredDate: '2026-02-03', progress: { academic: 60, emotional: 70, lifeSkills: 55 } },
  { id: 'CHD-003', firstName: 'Fatima', lastName: 'B.', age: 10, gender: 'Female', guardianId: null, status: 'active', needs: ['Education', 'Feeding', 'Healthcare'], educationLevel: 'Primary', location: 'Kano', registeredDate: '2026-02-20', progress: { academic: 45, emotional: 60, lifeSkills: 50 } },
  { id: 'CHD-004', firstName: 'Emeka', lastName: 'N.', age: 14, gender: 'Male', guardianId: 'GRD-003', status: 'matched', needs: ['Career Guidance', 'Education'], educationLevel: 'Secondary', location: 'Port Harcourt', registeredDate: '2026-03-01', progress: { academic: 80, emotional: 75, lifeSkills: 70 } },
  { id: 'CHD-005', firstName: 'Grace', lastName: 'A.', age: 7, gender: 'Female', guardianId: null, status: 'pending', needs: ['Education', 'Feeding'], educationLevel: 'Primary', location: 'Ibadan', registeredDate: '2026-03-10', progress: { academic: 30, emotional: 50, lifeSkills: 40 } },
  { id: 'CHD-006', firstName: 'Ibrahim', lastName: 'S.', age: 11, gender: 'Male', guardianId: 'GRD-004', status: 'matched', needs: ['Education', 'Life Skills'], educationLevel: 'Primary', location: 'Lagos', registeredDate: '2026-01-28', progress: { academic: 68, emotional: 72, lifeSkills: 60 } },
  { id: 'CHD-007', firstName: 'Blessing', lastName: 'E.', age: 9, gender: 'Female', guardianId: 'GRD-005', status: 'active', needs: ['Education', 'Healthcare'], educationLevel: 'Primary', location: 'Benin', registeredDate: '2026-04-05', progress: { academic: 55, emotional: 65, lifeSkills: 48 } },
  { id: 'CHD-008', firstName: 'David', lastName: 'U.', age: 15, gender: 'Male', guardianId: null, status: 'matched', needs: ['Career Guidance', 'Entrepreneurship'], educationLevel: 'Secondary', location: 'Enugu', registeredDate: '2026-02-14', progress: { academic: 75, emotional: 68, lifeSkills: 72 } },
];

export const guardians: Guardian[] = [
  { id: 'GRD-001', name: 'Mrs. Ngozi Okafor', email: 'ngozi@email.com', phone: '+234 801 234 5678', childIds: ['CHD-001'], status: 'approved', applicationDate: '2026-01-10' },
  { id: 'GRD-002', name: 'Mr. Kelechi Nwosu', email: 'kelechi@email.com', phone: '+234 802 345 6789', childIds: ['CHD-002'], status: 'approved', applicationDate: '2026-01-28' },
  { id: 'GRD-003', name: 'Mrs. Ada Eze', email: 'ada.eze@email.com', phone: '+234 803 456 7890', childIds: ['CHD-004'], status: 'approved', applicationDate: '2026-02-20' },
  { id: 'GRD-004', name: 'Alhaji Sani M.', email: 'sani.m@email.com', phone: '+234 804 567 8901', childIds: ['CHD-006'], status: 'approved', applicationDate: '2026-01-15' },
  { id: 'GRD-005', name: 'Mrs. Osarugue E.', email: 'osarugue@email.com', phone: '+234 805 678 9012', childIds: ['CHD-007'], status: 'pending', applicationDate: '2026-04-01' },
  { id: 'GRD-006', name: 'Mr. Tunde Adeyemi', email: 'tunde@email.com', phone: '+234 806 789 0123', childIds: [], status: 'pending', applicationDate: '2026-04-10' },
];

export const mentors: Mentor[] = [
  { id: 'MEN-001', name: 'Dr. Folake Adeyemi', email: 'folake@email.com', expertise: ['Academic', 'Life Skills'], assignedChildren: ['CHD-001', 'CHD-006'], status: 'active', sessionsCompleted: 45, rating: 4.8 },
  { id: 'MEN-002', name: 'Engr. Obinna Chukwu', email: 'obinna@email.com', expertise: ['Career', 'Technical'], assignedChildren: ['CHD-002'], status: 'active', sessionsCompleted: 32, rating: 4.6 },
  { id: 'MEN-003', name: 'Mrs. Hauwa Abdullahi', email: 'hauwa@email.com', expertise: ['Emotional', 'Life Skills'], assignedChildren: ['CHD-003', 'CHD-007'], status: 'active', sessionsCompleted: 28, rating: 4.9 },
  { id: 'MEN-004', name: 'Mr. Chidi Nnamdi', email: 'chidi@email.com', expertise: ['Entrepreneurship', 'Career'], assignedChildren: ['CHD-004', 'CHD-008'], status: 'active', sessionsCompleted: 50, rating: 4.7 },
  { id: 'MEN-005', name: 'Ms. Aisha Mohammed', email: 'aisha@email.com', expertise: ['Academic', 'Emotional'], assignedChildren: [], status: 'active', sessionsCompleted: 15, rating: 4.5 },
  { id: 'MEN-006', name: 'Mr. Samuel Ogunleye', email: 'samuel@email.com', expertise: ['Technical', 'Career'], assignedChildren: [], status: 'pending', sessionsCompleted: 0, rating: 0 },
];

export const donors: Donor[] = [
  { id: 'DON-001', name: 'Chief Olumide Bankole', email: 'olumide@email.com', totalDonated: 2500000, donationType: 'recurring', sponsoredChild: 'CHD-001', joinDate: '2026-01-05' },
  { id: 'DON-002', name: 'Mrs. Sarah Williams', email: 'sarah@email.com', totalDonated: 1200000, donationType: 'sponsorship', sponsoredChild: 'CHD-003', joinDate: '2026-01-20' },
  { id: 'DON-003', name: 'TechCorp Nigeria Ltd', email: 'giving@techcorp.ng', totalDonated: 5000000, donationType: 'one-time', joinDate: '2026-02-01' },
  { id: 'DON-004', name: 'Dr. James Okonkwo', email: 'james.o@email.com', totalDonated: 800000, donationType: 'recurring', joinDate: '2026-02-15' },
  { id: 'DON-005', name: 'Global Hope Foundation', email: 'contact@globalhope.org', totalDonated: 3500000, donationType: 'sponsorship', sponsoredChild: 'CHD-004', joinDate: '2026-03-01' },
];

export const donations: Donation[] = [
  { id: 'TXN-001', donorId: 'DON-001', donorName: 'Chief Olumide Bankole', amount: 250000, type: 'recurring', purpose: 'Education - Amina O.', date: '2026-07-01', status: 'completed' },
  { id: 'TXN-002', donorId: 'DON-003', donorName: 'TechCorp Nigeria Ltd', amount: 5000000, type: 'one-time', purpose: 'General Fund', date: '2026-07-03', status: 'completed' },
  { id: 'TXN-003', donorId: 'DON-002', donorName: 'Mrs. Sarah Williams', amount: 150000, type: 'sponsorship', purpose: 'Feeding - Fatima B.', date: '2026-07-05', status: 'completed' },
  { id: 'TXN-004', donorId: 'DON-004', donorName: 'Dr. James Okonkwo', amount: 100000, type: 'recurring', purpose: 'Healthcare Fund', date: '2026-07-08', status: 'processing' },
  { id: 'TXN-005', donorId: 'DON-005', donorName: 'Global Hope Foundation', amount: 500000, type: 'sponsorship', purpose: 'Education - Emeka N.', date: '2026-07-10', status: 'completed' },
  { id: 'TXN-006', donorId: 'DON-001', donorName: 'Chief Olumide Bankole', amount: 250000, type: 'recurring', purpose: 'Education - Amina O.', date: '2026-07-15', status: 'pending' },
  { id: 'TXN-007', donorId: 'DON-002', donorName: 'Mrs. Sarah Williams', amount: 150000, type: 'sponsorship', purpose: 'Feeding - Fatima B.', date: '2026-07-15', status: 'completed' },
];

export const events: Event[] = [
  { id: 'EVT-001', title: 'Back to School Drive', date: '2026-08-15', time: '09:00 AM', location: 'Lagos Community Center', type: 'Fundraiser', volunteers: 25, status: 'upcoming', description: 'Annual back-to-school supply distribution for registered children.' },
  { id: 'EVT-002', title: 'Mentor Orientation Workshop', date: '2026-07-25', time: '10:00 AM', location: 'Virtual (Zoom)', type: 'Training', volunteers: 15, status: 'upcoming', description: 'Orientation for new mentors joining the Foundation.' },
  { id: 'EVT-003', title: 'Community Health Fair', date: '2026-07-20', time: '08:00 AM', location: 'Abuja Central Park', type: 'Outreach', volunteers: 40, status: 'upcoming', description: 'Free health screening and nutrition education for children and families.' },
  { id: 'EVT-004', title: 'Annual Gala Dinner', date: '2026-09-30', time: '06:00 PM', location: 'Eko Hotel, Lagos', type: 'Fundraiser', volunteers: 50, status: 'upcoming', description: 'Annual fundraising gala for donors and supporters.' },
  { id: 'EVT-005', title: 'Volunteer Appreciation Day', date: '2026-06-30', time: '11:00 AM', location: 'Remedy Foundation HQ', type: 'Celebration', volunteers: 30, status: 'completed', description: 'Celebrating our amazing volunteers and their contributions.' },
];

export const volunteers: Volunteer[] = [
  { id: 'VOL-001', name: 'Adebayo Johnson', email: 'adebayo@email.com', hoursLogged: 120, eventsAttended: 8, status: 'active' },
  { id: 'VOL-002', name: 'Chioma Nwankwo', email: 'chioma@email.com', hoursLogged: 85, eventsAttended: 6, status: 'active' },
  { id: 'VOL-003', name: 'Fatima Yusuf', email: 'fatima.y@email.com', hoursLogged: 60, eventsAttended: 4, status: 'active' },
  { id: 'VOL-004', name: 'Emmanuel Osei', email: 'emmanuel@email.com', hoursLogged: 200, eventsAttended: 12, status: 'active' },
  { id: 'VOL-005', name: 'Blessing Okoro', email: 'blessing@email.com', hoursLogged: 35, eventsAttended: 3, status: 'pending' },
];

export const monthlyDonations = [
  { month: 'Jan', amount: 1200000 },
  { month: 'Feb', amount: 1800000 },
  { month: 'Mar', amount: 2100000 },
  { month: 'Apr', amount: 1950000 },
  { month: 'May', amount: 2400000 },
  { month: 'Jun', amount: 2800000 },
  { month: 'Jul', amount: 6400000 },
];

export const childrenGrowth = [
  { month: 'Jan', children: 3 },
  { month: 'Feb', children: 5 },
  { month: 'Mar', children: 6 },
  { month: 'Apr', children: 7 },
  { month: 'May', children: 7 },
  { month: 'Jun', children: 8 },
  { month: 'Jul', children: 8 },
];

export const mentorMatchSuggestions = [
  { childId: 'CHD-005', childName: 'Grace A.', mentorId: 'MEN-005', mentorName: 'Ms. Aisha Mohammed', matchScore: 92, reasons: ['Age-appropriate expertise', 'Academic focus match', 'Emotional support capability'] },
  { childId: 'CHD-007', childName: 'Blessing E.', mentorId: 'MEN-003', mentorName: 'Mrs. Hauwa Abdullahi', matchScore: 88, reasons: ['Healthcare support experience', 'Emotional mentoring strength', 'Geographic proximity'] },
  { childId: 'CHD-003', childName: 'Fatima B.', mentorId: 'MEN-001', mentorName: 'Dr. Folake Adeyemi', matchScore: 85, reasons: ['Multiple needs coverage', 'Life skills expertise', 'Academic support capability'] },
];
