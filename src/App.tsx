import { PresentationRow } from './components/layout/PresentationRow';
import { HomeClockIn } from './components/screens/HomeClockIn';
import { HomeClockOut } from './components/screens/HomeClockOut';
import { MenuScreen } from './components/screens/MenuScreen';
import { DayDetailScreen } from './components/screens/DayDetailScreen';
import { AddEventScreen } from './components/screens/AddEventScreen';
import { InboxScreen } from './components/screens/InboxScreen';
import { LayersScreen } from './components/screens/LayersScreen';
import { PlanningScreen } from './components/screens/PlanningScreen';
import { WeekViewScreen } from './components/screens/WeekViewScreen';
import { MonthViewScreen } from './components/screens/MonthViewScreen';
import { SixWeekViewScreen } from './components/screens/SixWeekViewScreen';
import { AddActionSheetScreen } from './components/screens/AddActionSheetScreen';
import { ShiftDetailScreen } from './components/screens/ShiftDetailScreen';
import { CallOffDetailScreen } from './components/screens/CallOffDetailScreen';
import { PersonalEventDetailScreen } from './components/screens/PersonalEventDetailScreen';
import { InboxUpdatesScreen } from './components/screens/InboxUpdatesScreen';
import { InboxAlertsScreen } from './components/screens/InboxAlertsScreen';
import { CredentialsScreen } from './components/screens/CredentialsScreen';
import { TeamViewScreen } from './components/screens/TeamViewScreen';
import { PtoDetailScreen } from './components/screens/PtoDetailScreen';
import { SickLeaveDetailScreen } from './components/screens/SickLeaveDetailScreen';

const ROWS = [
  {
    title: 'Home — Main Calendar View',
    subtitle: 'Timecard controls · Calendar grid · Shift layers · Navigation',
    screens: [
      { label: 'Clock In State',    screen: <HomeClockIn /> },
      { label: 'Clock Out State',   screen: <HomeClockOut /> },
      { label: 'Layers Panel',      screen: <LayersScreen /> },
      { label: 'Day Selected',      screen: <DayDetailScreen /> },
    ],
  },
  {
    title: 'Actions & Events',
    subtitle: 'Add event · Swap requests · Schedule management',
    screens: [
      { label: 'Add Event',     screen: <AddEventScreen /> },
      { label: '6-Week Planning', screen: <PlanningScreen /> },
    ],
  },
  {
    title: 'Inbox & Navigation',
    subtitle: 'Notifications · Punch log · Account menu',
    screens: [
      { label: 'Inbox',        screen: <InboxScreen /> },
      { label: 'Account Menu', screen: <MenuScreen /> },
    ],
  },
  {
    title: 'Calendar Views',
    subtitle: 'Week agenda · Month overview · 6-Week planning grid · Team schedule',
    screens: [
      { label: 'Week View',   screen: <WeekViewScreen /> },
      { label: 'Month View',  screen: <MonthViewScreen /> },
      { label: '6-Week View', screen: <SixWeekViewScreen /> },
      { label: 'Team View',   screen: <TeamViewScreen /> },
    ],
  },
  {
    title: 'Event Details & Actions',
    subtitle: 'EL-04 Add action sheet · EL-09 Tap on event pill → detail bottom sheets',
    screens: [
      { label: '+ Add Sheet',      screen: <AddActionSheetScreen /> },
      { label: 'Shift Details',    screen: <ShiftDetailScreen /> },
      { label: 'PTO / Vacation',   screen: <PtoDetailScreen /> },
      { label: 'Sick Leave',       screen: <SickLeaveDetailScreen /> },
      { label: 'Call Off Event',   screen: <CallOffDetailScreen /> },
      { label: 'Personal Event',   screen: <PersonalEventDetailScreen /> },
    ],
  },
  {
    title: 'Inbox — All Tabs',
    subtitle: 'Requests · Updates · Alerts · Punches — полное покрытие уведомлений',
    screens: [
      { label: 'Inbox Requests', screen: <InboxScreen /> },
      { label: 'Inbox Updates',  screen: <InboxUpdatesScreen /> },
      { label: 'Inbox Alerts',   screen: <InboxAlertsScreen /> },
    ],
  },
  {
    title: 'Account — Credentials',
    subtitle: 'Список сертификатов сотрудника · Статусы · Напоминания о продлении',
    screens: [
      { label: 'Credentials', screen: <CredentialsScreen /> },
    ],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950" style={{ background: 'linear-gradient(135deg, #0d1529 0%, #152040 50%, #0d1529 100%)' }}>
      {/* Header */}
      <header className="px-8 pt-10 pb-8 border-b border-white/5">
        <div className="flex items-start justify-between max-w-[1800px] mx-auto">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <span className="text-white/40 text-sm font-medium tracking-widest uppercase">MedSchedule Pro</span>
            </div>
            <h1 className="text-white text-4xl font-bold tracking-tight leading-tight">
              UI/UX Design Prototype
            </h1>
            <p className="text-white/40 text-base mt-2 font-light">
              Healthcare Staff Scheduling Platform · iOS Mobile Application
            </p>
          </div>

          <div className="text-right">
            <p className="text-white/20 text-xs uppercase tracking-widest mb-1">Confidential</p>
            <p className="text-white/40 text-sm">Version 1.0 · 2024</p>
            <p className="text-white/20 text-xs mt-1">For internal review only</p>
          </div>
        </div>

        {/* Meta tags */}
        <div className="flex gap-6 mt-8 max-w-[1800px] mx-auto">
          {[
            { label: 'Platform', value: 'iOS 16+' },
            { label: 'Screens', value: '8 prototype screens' },
            { label: 'Sector', value: 'Healthcare / USA' },
            { label: 'Status', value: 'Design Review' },
          ].map((m) => (
            <div key={m.label} className="flex flex-col gap-0.5">
              <span className="text-white/30 text-[10px] uppercase tracking-widest">{m.label}</span>
              <span className="text-white/70 text-sm font-medium">{m.value}</span>
            </div>
          ))}
        </div>
      </header>

      {/* Screen rows */}
      <main className="px-8 pt-10 max-w-[1800px] mx-auto">
        {ROWS.map((row, i) => (
          <PresentationRow
            key={i}
            title={row.title}
            subtitle={row.subtitle}
            screens={row.screens}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-white/5 mt-6">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <p className="text-white/20 text-xs">© 2024 HealthTech Systems Inc. · All rights reserved.</p>
          <p className="text-white/20 text-xs">Confidential — For client review only</p>
        </div>
      </footer>
    </div>
  );
}
