import React from 'react';
import { Palmtree, Clock, CheckCircle, Pencil, X } from 'lucide-react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { CalendarGrid } from '../ui/CalendarGrid';
import { BottomTabBar } from '../ui/BottomTabBar';

export const PtoDetailScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-white relative" style={{ height: '100%' }}>
      <AppNavbar />
      <CalendarToolbar view="month" team="me" />

      {/* Calendar — dimmed */}
      <div className="flex-1 overflow-hidden" style={{ opacity: 0.45 }}>
        <CalendarGrid selectedDay={10} highlightToday={false} />
      </div>

      <BottomTabBar active="calendar" />

      {/* PTO Detail Sheet */}
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
            <div style={{ width: 28, height: 28, borderRadius: 8, background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Palmtree size={14} color="#12B76A" strokeWidth={2} />
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#12B76A' }}>VACATION / PTO</span>
          </div>
          <p style={{ fontSize: 18, fontWeight: 800, color: '#1e2d5a' }}>Paid Time Off</p>
          <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>Mon, Sep 9 – Tue, Sep 10 · 2 days</p>
        </div>

        {/* Status card */}
        <div style={{ margin: '0 16px 12px', padding: '12px 14px', background: '#f0fdf4', borderRadius: 16, border: '1px solid #bbf7d0' }}>
          <div className="flex items-center gap-3">
            <CheckCircle size={22} color="#12B76A" strokeWidth={2} />
            <div>
              <p style={{ fontSize: 13, fontWeight: 800, color: '#059669' }}>Approved</p>
              <p style={{ fontSize: 10, color: '#6b7280', marginTop: 1 }}>Approved by Sarah M. · Sep 5, 2024</p>
            </div>
          </div>

          {/* PTO balance */}
          <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid #bbf7d0' }}>
            <div className="flex justify-between">
              {[
                { label: 'Used',      value: '2d',  color: '#059669' },
                { label: 'Remaining', value: '10d', color: '#374151' },
                { label: 'Total',     value: '12d', color: '#9ca3af' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <p style={{ fontSize: 14, fontWeight: 800, color: s.color }}>{s.value}</p>
                  <p style={{ fontSize: 8, color: '#9ca3af', marginTop: 1 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Details row */}
        <div style={{ margin: '0 16px 14px', display: 'flex', gap: 8 }}>
          <div style={{ flex: 1, padding: '10px 12px', background: '#f9fafb', borderRadius: 12 }}>
            <Clock size={13} color="#9ca3af" strokeWidth={2} />
            <p style={{ fontSize: 11, fontWeight: 600, color: '#374151', marginTop: 4 }}>8:00 AM – 8:00 AM</p>
            <p style={{ fontSize: 9, color: '#9ca3af' }}>Duration</p>
          </div>
          <div style={{ flex: 1, padding: '10px 12px', background: '#f9fafb', borderRadius: 12 }}>
            <p style={{ fontSize: 9, color: '#9ca3af', marginBottom: 4 }}>Comment</p>
            <p style={{ fontSize: 10, color: '#374151', fontStyle: 'italic' }}>"Family vacation"</p>
          </div>
        </div>

        {/* Actions */}
        <div style={{ padding: '0 14px 22px', display: 'flex', gap: 8 }}>
          <button
            className="flex-1 flex items-center justify-center gap-2 rounded-xl font-semibold"
            style={{ paddingTop: 11, paddingBottom: 11, fontSize: 12, background: '#f0fdf4', color: '#059669' }}
          >
            <Pencil size={13} strokeWidth={2} />
            Edit Request
          </button>
          <button
            className="flex items-center justify-center rounded-xl"
            style={{ width: 48, background: '#fef2f2', color: '#EF4444' }}
          >
            <X size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};
