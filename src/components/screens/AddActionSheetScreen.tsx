import React from 'react';
import {
  User, Palmtree, Thermometer, PhoneOff,
  ArrowLeftRight, CalendarCheck, X,
} from 'lucide-react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { CalendarGrid } from '../ui/CalendarGrid';
import { BottomTabBar } from '../ui/BottomTabBar';

const ACTIONS = [
  { Icon: User,          label: 'Add Personal Event',    sub: 'Add a private event to your calendar',    color: '#06B6D4', bg: '#ecfeff' },
  { Icon: Palmtree,      label: 'Request Vacation / PTO', sub: 'Select dates and notify your manager',   color: '#12B76A', bg: '#f0fdf4' },
  { Icon: Thermometer,   label: 'Sick Leave',             sub: 'Today or date range + comment',          color: '#F59E0B', bg: '#fffbeb' },
  { Icon: PhoneOff,      label: 'Call Out',               sub: 'Cancel your shift + notify manager',     color: '#EF4444', bg: '#fef2f2' },
  { Icon: ArrowLeftRight,label: 'Request Swap',           sub: 'Choose a shift and select a colleague',  color: '#7C3AED', bg: '#f5f3ff' },
  { Icon: CalendarCheck, label: 'Add Availability',       sub: 'Mark available or unavailable dates',    color: '#3B5BDB', bg: '#eff3ff' },
];

export const AddActionSheetScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-white relative" style={{ height: '100%' }}>
      <AppNavbar showBadge />
      <CalendarToolbar view="week" team="me" />

      {/* Calendar — dimmed */}
      <div className="flex-1 overflow-hidden" style={{ opacity: 0.4 }}>
        <CalendarGrid highlightToday />
      </div>

      <BottomTabBar active="calendar" />

      {/* Action Sheet */}
      <div
        className="absolute left-0 right-0 bg-white"
        style={{
          bottom: 0, zIndex: 20,
          borderRadius: '24px 24px 0 0',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.14)',
          borderTop: '1px solid #f1f1f4',
        }}
      >
        {/* Handle */}
        <div className="flex justify-center" style={{ paddingTop: 10, paddingBottom: 4 }}>
          <div style={{ width: 36, height: 4, background: '#d1d5db', borderRadius: 2 }} />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between" style={{ padding: '4px 20px 10px' }}>
          <p style={{ fontSize: 15, fontWeight: 800, color: '#111827' }}>Add to Calendar</p>
          <button
            className="flex items-center justify-center bg-gray-100 rounded-full"
            style={{ width: 28, height: 28 }}
          >
            <X size={14} color="#6b7280" strokeWidth={2.5} />
          </button>
        </div>

        {/* Action list */}
        <div style={{ padding: '0 14px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {ACTIONS.map(({ Icon, label, sub, color, bg }) => (
            <button
              key={label}
              className="flex items-center text-left w-full rounded-2xl"
              style={{ gap: 12, padding: '10px 12px', background: bg }}
            >
              <div
                className="flex items-center justify-center rounded-xl flex-shrink-0"
                style={{ width: 36, height: 36, background: color + '22' }}
              >
                <Icon size={17} color={color} strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <p style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>{label}</p>
                <p style={{ fontSize: 9, color: '#9ca3af', marginTop: 1 }}>{sub}</p>
              </div>
              <div style={{ width: 6, height: 6, borderRadius: 3, background: color, flexShrink: 0 }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
