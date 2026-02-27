import React from 'react';
import { EventPill } from './EventPill';

interface CalendarGridProps {
  selectedDay?: number | null;
  highlightToday?: boolean;
  compact?: boolean;
}

const DAYS_HEADER = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

type EventType = 'work' | 'ot' | 'pto' | 'sick' | 'callout' | 'calloff' | 'personal' | 'open' | 'ai' | 'training' | 'certexpiring' | 'conflict';

const CALENDAR_DATA: Record<number, Array<{ type: EventType; label: string }>> = {
  2:  [{ type: 'work',         label: 'Binns 7a' }, { type: 'work',        label: 'Brady 7a' }],
  3:  [{ type: 'work',         label: 'Binns 7a' }, { type: 'ot',          label: 'Brady OT' }],
  4:  [{ type: 'work',         label: 'Binns 7a' }, { type: 'certexpiring',label: 'BLS Exp.' }],
  9:  [{ type: 'work',         label: 'Binns 7a' }, { type: 'personal',    label: 'Dr Appt' }],
  10: [{ type: 'pto',          label: 'PTO' }],
  11: [{ type: 'training',     label: 'Training' }],
  13: [{ type: 'conflict',     label: 'Conflict!' }, { type: 'work',       label: 'Binns 7a' }],
  16: [{ type: 'work',         label: 'Binns 7a' }, { type: 'work',        label: 'Brady 7a' }],
  17: [{ type: 'sick',         label: 'Sick' }],
  23: [{ type: 'work',         label: 'Binns 7a' }],
  24: [{ type: 'calloff',      label: 'Call off' }],
  26: [{ type: 'certexpiring', label: 'ACLS Exp.' }],
  30: [{ type: 'work',         label: 'Binns 7a' }],
};

const WEEKS = [
  [31, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, 1, 2, 3, 4],
];

const PREV_MONTH = new Set([31]);
const NEXT_MONTH = new Set([1, 2, 3, 4]);

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  selectedDay = null,
  highlightToday = true,
  compact = false,
}) => {
  const today = 18;
  // In compact mode show only the week containing the selected day (or today)
  const pivotDay = selectedDay ?? today;
  const weeks = compact
    ? WEEKS.filter((w) => w.includes(pivotDay))
    : WEEKS;

  return (
    <div style={{ padding: compact ? '4px 8px 6px' : '4px 8px 0' }}>
      {/* Month header */}
      <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
        <button style={{ fontSize: 12, color: '#9ca3af', padding: '0 4px' }}>‹</button>
        <span style={{ fontSize: compact ? 11 : 12, fontWeight: 600, color: '#374151' }}>
          September 2024
        </span>
        <button style={{ fontSize: 12, color: '#9ca3af', padding: '0 4px' }}>›</button>
      </div>

      {/* Days header */}
      <div className="grid grid-cols-7" style={{ marginBottom: 3 }}>
        {DAYS_HEADER.map((d, i) => (
          <div
            key={i}
            className="text-center"
            style={{ fontSize: 9, fontWeight: 600, color: '#9ca3af', paddingTop: 2, paddingBottom: 2 }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Weeks */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 1 : 2 }}>
        {weeks.map((week, wi) => (
          <div key={wi} className="grid grid-cols-7" style={{ gap: 1 }}>
            {week.map((day, di) => {
              const isOtherMonth =
                (PREV_MONTH.has(day) && wi === 0) ||
                (NEXT_MONTH.has(day) && (compact ? false : wi === 4));
              const isToday = day === today && !isOtherMonth && highlightToday;
              const isSelected = day === selectedDay && !isOtherMonth;
              const events = (!isOtherMonth && CALENDAR_DATA[day]) || [];

              return (
                <div
                  key={di}
                  style={{
                    minHeight: compact ? 32 : 44,
                    borderRadius: 4,
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    background: isSelected
                      ? '#eff3ff'
                      : isToday
                      ? '#eff3ff'
                      : 'transparent',
                    outline: isSelected ? '1.5px solid #3B5BDB' : 'none',
                  }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 600,
                      width: 16,
                      height: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                      marginBottom: 2,
                      background: isToday ? '#3B5BDB' : 'transparent',
                      color: isToday ? 'white' : isOtherMonth ? '#d1d5db' : '#374151',
                    }}
                  >
                    {day}
                  </span>
                  {!compact && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
                      {events.slice(0, 2).map((ev, ei) => (
                        <EventPill key={ei} type={ev.type} label={ev.label} compact />
                      ))}
                      {events.length > 2 && (
                        <span style={{ fontSize: 7, color: '#9ca3af' }}>+{events.length - 2}</span>
                      )}
                    </div>
                  )}
                  {compact && events.length > 0 && (
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: 2,
                        background: '#3B5BDB',
                        margin: '0 auto',
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
