import React from 'react';
import { CalendarDays, Bell, Plus } from 'lucide-react';

type ActiveTab = 'calendar' | 'inbox';

interface BottomTabBarProps {
  active?: ActiveTab;
  badge?: boolean;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({ active = 'calendar', badge = false }) => {
  return (
    <div
      className="flex-shrink-0 flex items-end justify-around bg-white"
      style={{
        borderTop: '1px solid #f1f1f4',
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 6,
        paddingTop: 6,
        height: 58,
      }}
    >
      {/* Calendar tab */}
      <button className="flex flex-col items-center gap-0.5" style={{ flex: 1 }}>
        <CalendarDays
          size={22}
          strokeWidth={active === 'calendar' ? 2.5 : 1.8}
          color={active === 'calendar' ? '#3B5BDB' : '#9ca3af'}
        />
        <span style={{ fontSize: 9, fontWeight: 600, color: active === 'calendar' ? '#3B5BDB' : '#9ca3af' }}>
          Calendar
        </span>
      </button>

      {/* Center: raised + FAB */}
      <div className="flex flex-col items-center" style={{ flex: 1, position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 4 }}>
          <button
            style={{
              width: 52, height: 52, borderRadius: 26,
              background: 'linear-gradient(135deg, #4C6EF5 0%, #3B5BDB 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(59,91,219,0.45), 0 2px 6px rgba(59,91,219,0.3)',
              border: '3px solid white',
            }}
          >
            <Plus size={22} color="white" strokeWidth={2.8} />
          </button>
        </div>
      </div>

      {/* Inbox tab */}
      <button className="flex flex-col items-center gap-0.5 relative" style={{ flex: 1 }}>
        <div className="relative">
          <Bell
            size={22}
            strokeWidth={active === 'inbox' ? 2.5 : 1.8}
            color={active === 'inbox' ? '#3B5BDB' : '#9ca3af'}
          />
          {badge && (
            <span
              className="absolute flex items-center justify-center bg-red-500 text-white font-bold rounded-full"
              style={{ top: -4, right: -6, width: 14, height: 14, fontSize: 7, border: '1.5px solid white' }}
            >
              2
            </span>
          )}
        </div>
        <span style={{ fontSize: 9, fontWeight: 600, color: active === 'inbox' ? '#3B5BDB' : '#9ca3af' }}>
          Inbox
        </span>
      </button>
    </div>
  );
};
