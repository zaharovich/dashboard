import React from 'react';
import { Thermometer, Pencil, CalendarRange } from 'lucide-react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { CalendarGrid } from '../ui/CalendarGrid';
import { BottomTabBar } from '../ui/BottomTabBar';

export const SickLeaveDetailScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-white relative" style={{ height: '100%' }}>
      <AppNavbar />
      <CalendarToolbar view="month" team="me" />

      {/* Calendar — dimmed */}
      <div className="flex-1 overflow-hidden" style={{ opacity: 0.45 }}>
        <CalendarGrid selectedDay={17} highlightToday={false} />
      </div>

      <BottomTabBar active="calendar" />

      {/* Sick Leave Detail Sheet */}
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

        {/* Header */}
        <div style={{ padding: '4px 20px 10px' }}>
          <div className="flex items-center gap-2" style={{ marginBottom: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Thermometer size={14} color="#F59E0B" strokeWidth={2} />
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#d97706' }}>SICK LEAVE</span>
            <span style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 700, background: '#fffbeb', color: '#d97706', padding: '2px 8px', borderRadius: 20 }}>
              Notified Manager
            </span>
          </div>
          <p style={{ fontSize: 18, fontWeight: 800, color: '#1e2d5a' }}>Sick Leave</p>
          <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>Tue, Sep 17 · Full Day</p>
        </div>

        {/* Info card */}
        <div style={{ margin: '0 16px 12px', padding: '12px 14px', background: '#fffbeb', borderRadius: 16, border: '1px solid #fde68a', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div className="flex items-center gap-3">
            <CalendarRange size={16} color="#d97706" strokeWidth={2} />
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#374151' }}>Tue, Sep 17 (1 day)</p>
              <p style={{ fontSize: 10, color: '#9ca3af', marginTop: 1 }}>Full shift covered · MER 2N</p>
            </div>
          </div>

          {/* Comment */}
          <div style={{ paddingTop: 10, borderTop: '1px solid #fde68a' }}>
            <p style={{ fontSize: 9, color: '#9ca3af', marginBottom: 4 }}>Your comment</p>
            <p style={{ fontSize: 11, color: '#374151', fontStyle: 'italic', lineHeight: 1.5 }}>
              "Fever and sore throat since last night. Will rest and update tomorrow."
            </p>
          </div>

          {/* Manager notified */}
          <div style={{ paddingTop: 8, borderTop: '1px solid #fde68a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: 3, background: '#12B76A', flexShrink: 0 }} />
            <p style={{ fontSize: 9, color: '#6b7280' }}>
              Manager Sarah M. notified · Sep 17, 5:48 AM
            </p>
          </div>
        </div>

        {/* Sick days balance */}
        <div style={{ margin: '0 16px 14px', padding: '10px 14px', background: '#f9fafb', borderRadius: 14, display: 'flex', justifyContent: 'space-around' }}>
          {[
            { label: 'Used this year', value: '3d', color: '#d97706' },
            { label: 'Remaining',      value: '7d', color: '#374151' },
            { label: 'Annual limit',   value: '10d', color: '#9ca3af' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p style={{ fontSize: 14, fontWeight: 800, color: s.color }}>{s.value}</p>
              <p style={{ fontSize: 8, color: '#9ca3af', marginTop: 1 }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ padding: '0 14px 22px', display: 'flex', gap: 8 }}>
          <button
            className="flex-1 flex items-center justify-center gap-2 rounded-xl font-semibold"
            style={{ paddingTop: 11, paddingBottom: 11, fontSize: 12, background: '#fffbeb', color: '#d97706' }}
          >
            <Pencil size={13} strokeWidth={2} />
            Edit Comment / Dates
          </button>
          <button
            className="flex-1 rounded-xl font-semibold"
            style={{ paddingTop: 11, paddingBottom: 11, fontSize: 12, background: '#f3f4f6', color: '#374151' }}
          >
            Extend Leave
          </button>
        </div>
      </div>
    </div>
  );
};
