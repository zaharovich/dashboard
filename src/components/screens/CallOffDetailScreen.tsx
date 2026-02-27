import React from 'react';
import { AlertTriangle, CalendarX, MessageSquare } from 'lucide-react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { CalendarGrid } from '../ui/CalendarGrid';
import { BottomTabBar } from '../ui/BottomTabBar';

export const CallOffDetailScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-white relative" style={{ height: '100%' }}>
      <AppNavbar showBadge />
      <CalendarToolbar view="week" team="me" />

      {/* Calendar — dimmed */}
      <div className="flex-1 overflow-hidden" style={{ opacity: 0.45 }}>
        <CalendarGrid selectedDay={21} highlightToday={false} />
      </div>

      <BottomTabBar active="calendar" />

      {/* Call Off Detail Sheet */}
      <div
        className="absolute left-0 right-0 bg-white"
        style={{
          bottom: 0, zIndex: 20,
          borderRadius: '24px 24px 0 0',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.12)',
          borderTop: '1px solid #f1f1f4',
        }}
      >
        {/* Handle */}
        <div className="flex justify-center" style={{ paddingTop: 10, paddingBottom: 6 }}>
          <div style={{ width: 36, height: 4, background: '#d1d5db', borderRadius: 2 }} />
        </div>

        {/* Header — warning style */}
        <div style={{ padding: '4px 20px 10px' }}>
          <div className="flex items-center gap-2" style={{ marginBottom: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CalendarX size={16} color="#EF4444" strokeWidth={2} />
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#EF4444' }}>SHIFT CANCELLED BY MANAGER</span>
          </div>
          <p style={{ fontSize: 17, fontWeight: 800, color: '#1e2d5a' }}>MER 2N Medical</p>
          <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>Sat, Sep 21 · 7:00 AM – 3:00 PM · 8 hrs</p>
        </div>

        {/* Manager note */}
        <div style={{ margin: '0 16px 12px', padding: '12px 14px', background: '#fef2f2', borderRadius: 16, border: '1px solid #fecaca' }}>
          <div className="flex items-start gap-2">
            <AlertTriangle size={14} color="#EF4444" strokeWidth={2} style={{ flexShrink: 0, marginTop: 1 }} />
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, color: '#EF4444', marginBottom: 3 }}>Manager's Note</p>
              <p style={{ fontSize: 11, color: '#374151', lineHeight: 1.5 }}>
                "Unit staffing has been adjusted due to census changes. Your shift has been removed from the schedule."
              </p>
              <p style={{ fontSize: 9, color: '#9ca3af', marginTop: 4 }}>— Sarah M., Charge Nurse · Sep 20, 8:12 AM</p>
            </div>
          </div>
        </div>

        {/* Alternative shift */}
        <div style={{ margin: '0 16px 12px', padding: '10px 14px', background: '#f0fdf4', borderRadius: 16, border: '1px solid #bbf7d0' }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: '#059669', marginBottom: 6 }}>Suggested Alternative</p>
          <div className="flex items-center justify-between">
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>MER 3S Surgical</p>
              <p style={{ fontSize: 10, color: '#6b7280' }}>Sun Sep 22 · 7a–3p · 8 hrs</p>
            </div>
            <button style={{ fontSize: 10, fontWeight: 700, color: 'white', background: '#12B76A', padding: '5px 12px', borderRadius: 10 }}>
              Accept
            </button>
          </div>
        </div>

        {/* Actions */}
        <div style={{ padding: '0 14px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div className="flex" style={{ gap: 8 }}>
            <button
              className="flex-1 flex items-center justify-center gap-1.5 rounded-xl font-bold text-white"
              style={{ paddingTop: 11, paddingBottom: 11, fontSize: 12, background: '#1e2d5a' }}
            >
              Acknowledge
            </button>
            <button
              className="flex-1 flex items-center justify-center gap-1.5 rounded-xl font-semibold"
              style={{ paddingTop: 11, paddingBottom: 11, fontSize: 12, background: '#f3f4f6', color: '#374151' }}
            >
              <MessageSquare size={13} strokeWidth={2} />
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
