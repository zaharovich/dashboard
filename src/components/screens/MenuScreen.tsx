import React from 'react';
import {
  Home, CalendarPlus, Settings, BadgeCheck,
  Lock, HelpCircle, LogOut, ChevronRight,
} from 'lucide-react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { CalendarGrid } from '../ui/CalendarGrid';
import { BottomTabBar } from '../ui/BottomTabBar';

const MENU_ITEMS = [
  { Icon: Home,        label: 'Main screen',       active: true,  danger: false },
  { Icon: CalendarPlus,label: 'Connect calendar',  active: false, danger: false },
  { Icon: Settings,    label: 'Preferences',       active: false, danger: false },
  { Icon: BadgeCheck,  label: 'Credentials',       active: false, danger: false },
  { Icon: Lock,        label: 'Privacy & Sharing', active: false, danger: false },
  { Icon: HelpCircle,  label: 'Help & Support',    active: false, danger: false },
  { Icon: LogOut,      label: 'Log out',           active: false, danger: true  },
];

export const MenuScreen: React.FC = () => {
  return (
    <div className="relative bg-white" style={{ height: '100%', overflow: 'hidden' }}>

      {/* Background app — shifted right, dimmed + blurred */}
      <div style={{ position: 'absolute', inset: 0, transform: 'translateX(72%)', filter: 'blur(3px)', willChange: 'filter' }}>
        <div className="flex flex-col" style={{ height: '100%' }}>
          <AppNavbar />
          <CalendarToolbar view="week" team="me" />
          <div className="flex-1 overflow-hidden">
            <CalendarGrid highlightToday />
          </div>
          <BottomTabBar active="calendar" />
        </div>
      </div>

      {/* Dim overlay over the right part */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(15, 23, 60, 0.45)',
          left: '72%',
        }}
      />

      {/* Drawer panel */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, bottom: 0,
          width: '78%',
          background: 'white',
          display: 'flex', flexDirection: 'column',
          boxShadow: '4px 0 32px rgba(0,0,0,0.18)',
        }}
      >
        {/* User header */}
        <div style={{
          background: 'linear-gradient(135deg, #1e2d5a 0%, #2d4080 100%)',
          padding: '24px 20px 22px',
          flexShrink: 0,
        }}>
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"
              style={{ width: 48, height: 48, border: '2.5px solid rgba(255,255,255,0.3)', flexShrink: 0 }}
            >
              <span style={{ color: 'white', fontSize: 15, fontWeight: 700 }}>SV</span>
            </div>
            <div className="min-w-0">
              <p style={{ color: 'white', fontSize: 14, fontWeight: 700, lineHeight: 1.2 }}>Sticky Vladimir</p>
              <p style={{ color: 'rgba(147,197,253,1)', fontSize: 10, marginTop: 3 }}>Nurse Manager · MER 2N</p>
            </div>
            <ChevronRight size={16} color="rgba(147,197,253,0.6)" style={{ flexShrink: 0, marginLeft: 'auto' }} />
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto" style={{ paddingTop: 6, paddingBottom: 6 }}>
          {MENU_ITEMS.map(({ Icon, label, active, danger }, i) => (
            <button
              key={i}
              className="w-full flex items-center text-left"
              style={{
                gap: 14, padding: '13px 20px',
                background: active ? '#eff3ff' : 'transparent',
                borderRight: active ? '3px solid #3B5BDB' : '3px solid transparent',
              }}
            >
              <Icon size={17} strokeWidth={1.8} color={danger ? '#ef4444' : active ? '#3B5BDB' : '#6b7280'} />
              <span style={{
                fontSize: 13, fontWeight: 600,
                color: danger ? '#ef4444' : active ? '#3B5BDB' : '#374151',
              }}>
                {label}
              </span>
              {active && <ChevronRight size={13} color="#3B5BDB" style={{ marginLeft: 'auto' }} />}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div style={{ padding: '10px 20px', borderTop: '1px solid #f1f1f4', flexShrink: 0 }}>
          <p style={{ fontSize: 9, color: '#d1d5db' }}>MedSchedule Pro v2.4.1 · © 2026 HealthTech Systems Inc.</p>
        </div>
      </div>
    </div>
  );
};
